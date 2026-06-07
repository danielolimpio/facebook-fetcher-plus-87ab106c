import { useState } from "react";
import { Link as LinkIcon, Download, ClipboardPaste, Loader2, CheckCircle2, X } from "lucide-react";
import { addDownload, detectType, isValidFacebookUrl } from "@/lib/downloads-store";
import { toast } from "sonner";

interface FbExtractResult {
  title: string;
  thumbnail?: string;
  hd?: string;
  sd?: string;
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;
const EXTRACT_TIMEOUT_MS = 35000;

export function Downloader() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FbExtractResult | null>(null);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch {
      toast.error("Não foi possível acessar a área de transferência");
    }
  };

  const handleFetch = async () => {
    if (!url.trim()) return toast.error("Cole um link do Facebook");
    if (!isValidFacebookUrl(url)) return toast.error("Link inválido. Use uma URL do Facebook.");
    setLoading(true);
    setResult(null);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), EXTRACT_TIMEOUT_MS);
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/fb-extract`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          apikey: SUPABASE_ANON,
          authorization: `Bearer ${SUPABASE_ANON}`,
        },
        body: JSON.stringify({ url: url.trim() }),
        signal: controller.signal,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Falha ao processar o link");
      setResult(data as FbExtractResult);
      toast.success("Vídeo encontrado! Escolha a qualidade.");
    } catch (e) {
      const msg = e instanceof DOMException && e.name === "AbortError"
        ? "O Facebook demorou demais para responder. Tente novamente ou use outro link público do mesmo vídeo."
        : e instanceof Error ? e.message : "Falha ao processar o link";
      toast.error(msg);
    } finally {
      window.clearTimeout(timeout);
      setLoading(false);
    }
  };

  const triggerDownload = (videoUrl: string, qualityLabel: string) => {
    const safeName = (result?.title || "facebook-video").slice(0, 60).replace(/[^\w\-]+/g, "_");
    const href = `${SUPABASE_URL}/functions/v1/fb-download?u=${encodeURIComponent(videoUrl)}&name=${encodeURIComponent(safeName)}`;
    const a = document.createElement("a");
    a.href = href;
    a.rel = "noopener";
    a.download = `${safeName}.mp4`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    addDownload({
      url,
      title: result?.title || "Vídeo do Facebook",
      type: detectType(url),
      quality: qualityLabel,
      thumbnail: result?.thumbnail,
    });
    toast.success(`Baixando em ${qualityLabel}`);
  };

  return (
    <div className="space-y-3">
      <div className="relative">
        <LinkIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Cole o link do vídeo, Reel ou Story do Facebook..."
          className="h-14 w-full rounded-xl border border-input bg-card pl-12 pr-12 text-base text-foreground shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        <button
          onClick={handlePaste}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label="Colar"
        >
          <ClipboardPaste className="h-5 w-5" />
        </button>
      </div>

      <button
        onClick={handleFetch}
        disabled={loading}
        className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary text-base font-semibold text-primary-foreground shadow-sm transition hover:opacity-95 disabled:opacity-70"
      >
        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Download className="h-5 w-5" />}
        {loading ? "Processando..." : "Baixar Agora"}
      </button>

      {result && (result.hd || result.sd) && (
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="mb-3 flex items-center gap-3">
            {result.thumbnail && (
              <img src={result.thumbnail} alt="" className="h-16 w-24 rounded-md object-cover" />
            )}
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <CheckCircle2 className="h-5 w-5 text-[color:var(--success)]" />
              {result.title}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {result.hd && (
              <button
                onClick={() => triggerDownload(result.hd!, "HD 1080p")}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-95"
              >
                Baixar HD
              </button>
            )}
            {result.sd && (
              <button
                onClick={() => triggerDownload(result.sd!, "SD 480p")}
                className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:border-primary hover:text-primary"
              >
                Baixar SD
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
