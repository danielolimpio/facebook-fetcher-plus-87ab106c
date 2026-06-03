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

function decode(s: string) {
  return s
    .replace(/\\u0025/g, "%")
    .replace(/\\u002F/g, "/")
    .replace(/\\\//g, "/")
    .replace(/\\u0026/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/\\"/g, '"');
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

async function fetchHtml(url: string, ua: string) {
  const r = await fetch(url, {
    headers: {
      "user-agent": ua,
      "accept-language": "en-US,en;q=0.9,pt;q=0.8",
      accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
    redirect: "follow",
  });
  if (!r.ok) throw new Error(`Facebook respondeu ${r.status}`);
  return await r.text();
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: CORS });
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405, headers: CORS });

  try {
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

    // Normalize reel / video / share URLs to the desktop watch endpoint,
    // which reliably exposes browser_native_(hd|sd)_url for public content.
    const idMatch =
      url.match(/\/reel\/(\d+)/i) ||
      url.match(/\/videos\/(?:[^/]+\/)?(\d+)/i) ||
      url.match(/[?&]v=(\d+)/i) ||
      url.match(/\/watch\/?\?v=(\d+)/i) ||
      url.match(/\/story\.php\?[^"]*story_fbid=(\d+)/i);
    const candidates: string[] = [];
    if (idMatch) {
      const id = idMatch[1];
      candidates.push(`https://www.facebook.com/watch/?v=${id}`);
      candidates.push(`https://www.facebook.com/reel/${id}`);
    }
    candidates.push(url.replace("m.facebook.com", "www.facebook.com"));
    candidates.push(url.replace("www.facebook.com", "m.facebook.com"));

    let info: ReturnType<typeof extract> = {};
    let lastErr: string | undefined;
    for (const candidate of candidates) {
      try {
        const ua = /m\.facebook\.com/i.test(candidate) ? UA_MOBILE : UA_DESKTOP;
        const html = await fetchHtml(candidate, ua);
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

    if (!info.hd && !info.sd) {
      throw new Error(
        `Não foi possível extrair o vídeo. ${lastErr ? `(${lastErr}) ` : ""}Verifique se o vídeo é público e tente novamente.`,
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
