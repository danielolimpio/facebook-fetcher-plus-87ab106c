// Edge function: extracts video URLs from a public Facebook page.
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const UA_DESKTOP =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const UA_MOBILE =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1";
const UA_CRAWLER =
  "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";
const UA_EXTERNALHIT =
  "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)";

const MAX_CANDIDATES = 6;
const MAX_FETCHES = 10;
const FUNCTION_DEADLINE_MS = 28000;

function decode(s: string) {
  const decoded = s
    .replace(/\\u0025/g, "%")
    .replace(/\\u002F/g, "/")
    .replace(/\\\//g, "/")
    .replace(/\\u0026/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/\\"/g, '"');
  try {
    return decodeURIComponent(decoded);
  } catch {
    return decoded;
  }
}

function extractVideoId(text: string): string | undefined {
  return (
    text.match(/\/reel\/(\d+)/i) ||
    text.match(/\/videos\/(?:[^/]+\/)?(\d+)/i) ||
    text.match(/[?&]v=(\d+)/i) ||
    text.match(/\/watch\/?\?v=(\d+)/i) ||
    text.match(/\/story\.php\?[^"'<>]*story_fbid=(\d+)/i) ||
    text.match(/"initial_node_id":"(\d+)"/i) ||
    text.match(/"root_video_id":"(\d+)"/i) ||
    text.match(/"video_id":"?(\d+)"?/i) ||
    text.match(/"videoID":"(\d+)"/i) ||
    text.match(/media_id=(\d+)/i)
  )?.[1];
}

function pick(html: string, patterns: RegExp[]): string | undefined {
  for (const re of patterns) {
    const m = html.match(re);
    if (m && m[1]) {
      const u = decode(m[1]);
      if (u.startsWith("http")) return u;
    }
  }
}

function extract(html: string) {
  const hd = pick(html, [
    /"browser_native_hd_url":"([^"]+)"/,
    /"playable_url_quality_hd":"([^"]+)"/,
    /hd_src_no_ratelimit:"([^"]+)"/,
    /"hd_src":"([^"]+)"/,
    /hd_src:"([^"]+)"/,
  ]);
  const sd = pick(html, [
    /"browser_native_sd_url":"([^"]+)"/,
    /"playable_url":"([^"]+)"/,
    /"progressive_url":"([^"]+)"/,
    /sd_src_no_ratelimit:"([^"]+)"/,
    /"sd_src":"([^"]+)"/,
    /sd_src:"([^"]+)"/,
  ]);
  const thumbnail = pick(html, [
    /"preferred_thumbnail":\{[^}]*"image":\{"uri":"([^"]+)"/,
    /"thumbnailUrl":"([^"]+)"/,
    /<meta property="og:image" content="([^"]+)"/,
  ]);
  const tm =
    html.match(/<meta property="og:title" content="([^"]+)"/) ||
    html.match(/<title>([^<]+)<\/title>/);
  const title = tm ? decode(tm[1]).replace(/ \| Facebook$/, "") : undefined;
  return { hd, sd, thumbnail, title };
}

async function fetchHtml(url: string, ua: string, signal: AbortSignal) {
  const r = await fetch(url, {
    headers: {
      "user-agent": ua,
      "accept-language": "en-US,en;q=0.9,pt;q=0.8",
      accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
    redirect: "follow",
    signal: AbortSignal.any([signal, AbortSignal.timeout(5500)]),
  });
  if (!r.ok) throw new Error(`Facebook respondeu ${r.status}`);
  return { html: await r.text(), finalUrl: r.url };
}

async function probeCrawlerMedia(videoId: string, signal: AbortSignal) {
  const mediaUrl = `https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=${videoId}`;
  const r = await fetch(mediaUrl, {
    method: "HEAD",
    headers: {
      "user-agent": UA_EXTERNALHIT,
      referer: "https://www.facebook.com/",
    },
    redirect: "follow",
    signal: AbortSignal.any([signal, AbortSignal.timeout(4500)]),
  }).catch(() => undefined);
  const type = r?.headers.get("content-type") ?? "";
  const disposition = r?.headers.get("content-disposition") ?? "";
  if (r?.ok && (/video\//i.test(type) || /attachment/i.test(disposition))) return mediaUrl;
}

function addVideoCandidates(candidates: string[], seen: Set<string>, id?: string) {
  if (!id) return;
  for (const candidate of [
    `https://www.facebook.com/watch/?v=${id}`,
    `https://m.facebook.com/watch/?v=${id}&_rdr`,
    `https://www.facebook.com/reel/${id}/`,
    `https://m.facebook.com/reel/${id}`,
    `https://www.facebook.com/video.php?v=${id}`,
  ]) {
    if (!seen.has(candidate)) {
      seen.add(candidate);
      candidates.push(candidate);
    }
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: CORS });
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405, headers: CORS });

  try {
    const deadline = AbortSignal.timeout(FUNCTION_DEADLINE_MS);
    const body = await req.json().catch(() => ({}));
    let url: string = body?.url ?? "";
    if (!url || typeof url !== "string") throw new Error("URL inválida");
    if (!/facebook\.com|fb\.watch|fb\.com/i.test(url)) throw new Error("URL não é do Facebook");
    url = url.trim();

    if (/fb\.watch/i.test(url)) {
      try {
        const r = await fetch(url, { redirect: "follow", headers: { "user-agent": UA_DESKTOP } });
        url = r.url || url;
      } catch {}
    }

    const candidates: string[] = [];
    const seen = new Set<string>();
    let resolvedVideoId = extractVideoId(url);
    addVideoCandidates(candidates, seen, resolvedVideoId);
    for (const candidate of [url.replace("m.facebook.com", "www.facebook.com"), url.replace("www.facebook.com", "m.facebook.com")]) {
      if (!seen.has(candidate)) {
        seen.add(candidate);
        candidates.push(candidate);
      }
    }

    let info: ReturnType<typeof extract> = {};
    let lastErr: string | undefined;
    let fetches = 0;
    for (let i = 0; i < candidates.length && i < MAX_CANDIDATES; i++) {
      const candidate = candidates[i];
      const uas = /m\.facebook\.com/i.test(candidate)
        ? [UA_EXTERNALHIT, UA_CRAWLER, UA_MOBILE, UA_DESKTOP]
        : [UA_EXTERNALHIT, UA_CRAWLER, UA_DESKTOP, UA_MOBILE];
      for (const ua of uas) {
        if (fetches >= MAX_FETCHES || deadline.aborted) break;
        fetches++;
        try {
          const { html, finalUrl } = await fetchHtml(candidate, ua, deadline);
          const discoveredId = extractVideoId(finalUrl) ?? extractVideoId(html);
          if (discoveredId && discoveredId !== resolvedVideoId) {
            resolvedVideoId = discoveredId;
            addVideoCandidates(candidates, seen, discoveredId);
          }
          const d = extract(html);
          info = {
            title: info.title ?? d.title,
            thumbnail: info.thumbnail ?? d.thumbnail,
            hd: info.hd ?? d.hd,
            sd: info.sd ?? d.sd,
          };
          if (info.hd || info.sd) break;
        } catch (err) {
          lastErr = err instanceof Error ? err.message : String(err);
        }
      }
      if (info.hd || info.sd) break;
    }

    if (!info.hd && !info.sd && resolvedVideoId) {
      const directMedia = await probeCrawlerMedia(resolvedVideoId, deadline);
      if (directMedia) info = { ...info, hd: directMedia, sd: directMedia };
    }

    if (!info.hd && !info.sd) {
      throw new Error(
        `Este Reel é público, mas o Facebook não liberou o arquivo MP4 para acesso anônimo agora. ${lastErr ? `(${lastErr}) ` : ""}Tente novamente em alguns instantes ou use outro link público do mesmo vídeo.`,
      );
    }

    return new Response(
      JSON.stringify({
        title: info.title || "Vídeo do Facebook",
        thumbnail: info.thumbnail,
        hd: info.hd,
        sd: info.sd,
      }),
      { headers: { ...CORS, "content-type": "application/json" } },
    );
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Erro ao processar";
    return new Response(JSON.stringify({ error: msg }), {
      status: 400,
      headers: { ...CORS, "content-type": "application/json" },
    });
  }
});
