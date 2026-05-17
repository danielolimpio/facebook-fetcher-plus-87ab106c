import { useState } from "react";
import { Link as LinkIcon, Download, ClipboardPaste, Loader2, CheckCircle2 } from "lucide-react";
import { addDownload, detectType, isValidFacebookUrl } from "@/lib/downloads-store";
import { toast } from "sonner";

const QUALITIES = ["HD 1080p", "2K", "4K", "SD 480p", "Áudio MP3"];

export function Downloader() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ title: string; quality: string } | null>(null);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch {
      toast.error("Não foi possível acessar a área de transferência");
    }
  };

  const handleDownload = async () => {
    if (!url.trim()) {
      toast.error("Cole um link do Facebook");
      return;
    }
    if (!isValidFacebookUrl(url)) {
      toast.error("Link inválido. Use uma URL do Facebook.");
      return;
    }
    setLoading(true);
    setResult(null);
    // Simulação de processamento (servidor real exigiria scraping próprio do Facebook)
    await new Promise((r) => setTimeout(r, 1400));
    const type = detectType(url);
    const titleMap = {
      video: "Vídeo do Facebook",
      reel: "Reel do Facebook",
      story: "Story do Facebook",
      photo: "Foto do Facebook",
      audio: "Áudio do Facebook",
    } as const;
    const title = titleMap[type];
    setLoading(false);
    setResult({ title, quality: "HD 1080p" });
    toast.success("Vídeo pronto para download!");
  };

  const saveQuality = (q: string) => {
    if (!result) return;
    addDownload({
      url,
      title: result.title,
      type: detectType(url),
      quality: q,
    });
    toast.success(`Adicionado ao histórico em ${q}`);
  };

  return (
    <div className="space-y-3">
      <div className="relative">
        <LinkIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Cole o link do Reels ou Stories aqui..."
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
        onClick={handleDownload}
        disabled={loading}
        className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary text-base font-semibold text-primary-foreground shadow-sm transition hover:opacity-95 disabled:opacity-70"
      >
        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Download className="h-5 w-5" />}
        {loading ? "Processando..." : "Baixar Agora"}
      </button>

      {result && (
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
            <CheckCircle2 className="h-5 w-5 text-[color:var(--success)]" />
            {result.title} — escolha a qualidade
          </div>
          <div className="flex flex-wrap gap-2">
            {QUALITIES.map((q) => (
              <button
                key={q}
                onClick={() => saveQuality(q)}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
