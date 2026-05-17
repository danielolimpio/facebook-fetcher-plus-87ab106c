import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageContainer } from "@/components/AppShell";
import { PageHeader } from "@/components/ui-page";
import { Downloader } from "@/components/Downloader";
import { LucideIcon, Instagram, Youtube, Music2, Waves, Twitter } from "lucide-react";

type Cfg = { slug: string; name: string; brand: string; icon: LucideIcon; color: string };

function makeRoute(cfg: Cfg) {
  return createFileRoute(`/baixar-${cfg.slug}` as "/baixar-instagram")({
    head: () => ({ meta: [{ title: `Baixar Vídeos do ${cfg.brand} — ${cfg.name}` }] }),
    component: () => (
      <AppShell>
        <PageContainer>
          <PageHeader
            icon={cfg.icon}
            title={`Baixar Vídeos do`}
            highlight={cfg.brand}
            subtitle={`Baixe vídeos do ${cfg.brand} em alta qualidade, grátis e sem instalar nada.`}
            iconClass="text-white"
          />
          <div className="mx-auto mb-6 -mt-4 flex h-1 w-16 items-center justify-center rounded" style={{ backgroundColor: cfg.color }} />
          <div className="mx-auto max-w-2xl">
            <Downloader />
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Cole o link público do {cfg.brand}. Conteúdo protegido por direitos autorais não pode ser baixado.
            </p>
          </div>
          <div className="mt-10 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            <p>O baixador do {cfg.brand} funciona como o nosso baixador do Facebook: cole o link, escolha a qualidade e baixe. Sem cadastro, sem limites.</p>
          </div>
        </PageContainer>
      </AppShell>
    ),
  });
}

export const Route = makeRoute({ slug: "instagram", name: "FaceSave", brand: "Instagram", icon: Instagram, color: "#E1306C" });
export const YouTubeRoute = makeRoute({ slug: "youtube", name: "FaceSave", brand: "YouTube", icon: Youtube, color: "#FF0000" });
export const TikTokRoute = makeRoute({ slug: "tiktok", name: "FaceSave", brand: "TikTok", icon: Music2, color: "#111111" });
export const KwaiRoute = makeRoute({ slug: "kwai", name: "FaceSave", brand: "Kwai", icon: Waves, color: "#FF6A00" });
export const TwitterRoute = makeRoute({ slug: "twitter", name: "FaceSave", brand: "Twitter", icon: Twitter, color: "#111111" });
