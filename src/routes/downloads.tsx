import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageContainer } from "@/components/AppShell";
import { useEffect, useState } from "react";
import { Download, Trash2, Info, Film, Video, Camera, Image as ImageIcon, Music } from "lucide-react";
import { type DownloadItem, clearDownloads, getDownloads, removeDownload } from "@/lib/downloads-store";

export const Route = createFileRoute("/downloads")({
  head: () => ({ meta: [{ title: "Downloads — Vídeos do Facebook Baixados" }] }),
  component: DownloadsPage,
});

const TYPE_ICON = { video: Video, reel: Film, story: Camera, photo: ImageIcon, audio: Music } as const;

function DownloadsPage() {
  const [items, setItems] = useState<DownloadItem[]>([]);

  useEffect(() => {
    const sync = () => setItems(getDownloads());
    sync();
    window.addEventListener("fb_downloads_updated", sync);
    return () => window.removeEventListener("fb_downloads_updated", sync);
  }, []);

  return (
    <AppShell>
      <PageContainer>
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Downloads — Vídeos do Facebook Baixados</h1>
            <p className="mt-1 text-sm text-muted-foreground">{items.length} {items.length === 1 ? "item" : "itens"} no histórico</p>
          </div>
          {items.length > 0 && (
            <button onClick={clearDownloads} className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground hover:border-destructive hover:text-destructive">
              <Trash2 className="h-4 w-4" /> Limpar
            </button>
          )}
        </div>

        <div className="mb-6 flex items-start gap-3 rounded-xl border border-border bg-accent/40 p-4 text-sm">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <div>
            <div className="font-semibold text-foreground">Armazenamento local</div>
            <p className="text-muted-foreground">O histórico de vídeos do Facebook baixados é salvo apenas no seu navegador. Se você limpar os cookies, o histórico será apagado automaticamente.</p>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
            <Download className="mx-auto h-10 w-10 text-muted-foreground" />
            <h2 className="mt-4 text-lg font-semibold text-foreground">Nenhum download de vídeo do Facebook ainda</h2>
            <p className="mt-1 text-sm text-muted-foreground">Os vídeos, Reels e Stories do Facebook que você baixar aparecerão aqui.</p>
          </div>
        ) : (
          <ul className="space-y-2">
            {items.map((it) => {
              const Icon = TYPE_ICON[it.type];
              return (
                <li key={it.id} className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 shadow-sm">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="truncate font-medium text-foreground">{it.title}</div>
                      <div className="truncate text-xs text-muted-foreground">{it.quality} · {new Date(it.createdAt).toLocaleString("pt-BR")}</div>
                      <div className="truncate text-xs text-muted-foreground">{it.url}</div>
                    </div>
                  </div>
                  <button onClick={() => removeDownload(it.id)} className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-destructive" aria-label="Remover">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </PageContainer>
    </AppShell>
  );
}
