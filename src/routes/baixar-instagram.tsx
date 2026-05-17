import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageContainer } from "@/components/AppShell";
import { PageHeader } from "@/components/ui-page";
import { Downloader } from "@/components/Downloader";
import { Instagram } from "lucide-react";

export const Route = createFileRoute("/baixar-instagram")({
  head: () => ({ meta: [{ title: "Baixar Vídeos do Instagram — Reels e Stories" }] }),
  component: () => (
    <AppShell>
      <PageContainer>
        <PageHeader icon={Instagram} title="Baixar Vídeos do" highlight="Instagram" subtitle="Baixe vídeos, Reels e Stories do Instagram em alta qualidade, grátis." />
        <div className="mx-auto max-w-2xl"><Downloader /></div>
        <p className="mt-3 text-center text-xs text-muted-foreground">Cole o link público do Instagram. Conteúdo protegido por direitos autorais não pode ser baixado.</p>
      </PageContainer>
    </AppShell>
  ),
});
