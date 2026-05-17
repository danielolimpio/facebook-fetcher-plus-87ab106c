import { createServerFn } from "@tanstack/react-start";

export interface FbExtractResult {
  title: string;
  thumbnail?: string;
  hd?: string;
  sd?: string;
}

const UA_DESKTOP =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const UA_MOBILE =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1";

function decode(str: string) {
  return str
    .replace(/\\u0025/g, "%")
    .replace(/\\u002F/g, "/")
    .replace(/\\\//g, "/")
    .replace(/\\u0026/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/\\"/g, '"');
}

function pickMatch(html: string, patterns: RegExp[]): string | undefined {
  for (const re of patterns) {
    const m = html.match(re);
    if (m && m[1]) {
      const url = decode(m[1]);
      if (url.startsWith("http")) return url;
    }
  }
  return undefined;
}

function extractFromHtml(html: string): Omit<FbExtractResult, "title"> & { title?: string } {
  const hd = pickMatch(html, [
    /"browser_native_hd_url":"([^"]+)"/,
    /"playable_url_quality_hd":"([^"]+)"/,
    /hd_src_no_ratelimit:"([^"]+)"/,
    /"hd_src":"([^"]+)"/,
    /hd_src:"([^"]+)"/,
  ]);
  const sd = pickMatch(html, [
    /"browser_native_sd_url":"([^"]+)"/,
    /"playable_url":"([^"]+)"/,
    /sd_src_no_ratelimit:"([^"]+)"/,
    /"sd_src":"([^"]+)"/,
    /sd_src:"([^"]+)"/,
  ]);
  const thumbnail = pickMatch(html, [
    /"preferred_thumbnail":\{[^}]*"image":\{"uri":"([^"]+)"/,
    /"thumbnailUrl":"([^"]+)"/,
    /<meta property="og:image" content="([^"]+)"/,
  ]);
  const titleM = html.match(/<meta property="og:title" content="([^"]+)"/) ||
    html.match(/<title>([^<]+)<\/title>/);
  const title = titleM ? decode(titleM[1]).replace(/ \| Facebook$/, "") : undefined;
  return { hd, sd, thumbnail, title };
}

async function fetchHtml(url: string, ua: string): Promise<string> {
  const res = await fetch(url, {
    headers: {
      "user-agent": ua,
      "accept-language": "en-US,en;q=0.9,pt;q=0.8",
      accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`Facebook respondeu ${res.status}`);
  return await res.text();
}

export const extractFacebookVideo = createServerFn({ method: "POST" })
  .inputValidator((input: { url: string }) => {
    if (!input?.url || typeof input.url !== "string") throw new Error("URL inválida");
    if (!/facebook\.com|fb\.watch|fb\.com/i.test(input.url)) throw new Error("URL não é do Facebook");
    return { url: input.url.trim() };
  })
  .handler(async ({ data }): Promise<FbExtractResult> => {
    let url = data.url;
    // Resolve fb.watch short links
    if (/fb\.watch/i.test(url)) {
      try {
        const r = await fetch(url, { redirect: "follow", headers: { "user-agent": UA_DESKTOP } });
        url = r.url || url;
      } catch {}
    }

    // Try mobile then desktop
    let info: ReturnType<typeof extractFromHtml> = {};
    try {
      const html = await fetchHtml(url.replace("www.facebook.com", "m.facebook.com"), UA_MOBILE);
      info = extractFromHtml(html);
    } catch {}

    if (!info.hd && !info.sd) {
      try {
        const html = await fetchHtml(url.replace("m.facebook.com", "www.facebook.com"), UA_DESKTOP);
        const desk = extractFromHtml(html);
        info = { ...desk, ...info, hd: info.hd ?? desk.hd, sd: info.sd ?? desk.sd };
      } catch {}
    }

    if (!info.hd && !info.sd) {
      throw new Error(
        "Não foi possível extrair o vídeo. Verifique se o vídeo é público e tente novamente.",
      );
    }

    return {
      title: info.title || "Vídeo do Facebook",
      thumbnail: info.thumbnail,
      hd: info.hd,
      sd: info.sd,
    };
  });
