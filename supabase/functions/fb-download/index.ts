// Edge function: proxies an MP4 download from Facebook CDN to force "save as".
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: CORS });

  const url = new URL(req.url);
  const target = url.searchParams.get("u");
  const filename = (url.searchParams.get("name") || "facebook-video").replace(/[^\w.-]+/g, "_");

  if (!target) return new Response("Missing u", { status: 400, headers: CORS });

  let host = "";
  try {
    host = new URL(target).hostname;
  } catch {
    return new Response("Invalid url", { status: 400, headers: CORS });
  }
  if (!/(^|\.)fbcdn\.net$|(^|\.)facebook\.com$|(^|\.)fbsbx\.com$/i.test(host)) {
    return new Response("Host not allowed", { status: 400, headers: CORS });
  }

  const upstream = await fetch(target, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
      referer: "https://www.facebook.com/",
    },
  });

  if (!upstream.ok || !upstream.body) {
    return new Response(`Upstream ${upstream.status}`, { status: 502, headers: CORS });
  }

  const headers = new Headers(CORS);
  headers.set("content-type", upstream.headers.get("content-type") || "video/mp4");
  const len = upstream.headers.get("content-length");
  if (len) headers.set("content-length", len);
  headers.set("content-disposition", `attachment; filename="${filename}.mp4"`);
  headers.set("cache-control", "no-store");

  return new Response(upstream.body, { status: 200, headers });
});
