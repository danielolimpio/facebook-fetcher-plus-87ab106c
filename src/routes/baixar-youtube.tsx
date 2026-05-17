import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageContainer } from "@/components/AppShell";
import { PageHeader } from "@/components/ui-page";
import { Downloader } from "@/components/Downloader";
import { Youtube } from "lucide-react";

export const Route = createFileRoute("/baixar-youtube")({
  head: () => ({ meta: [{ title: "Baixar Vídeos do YouTube — HD, 1080p, 4K" }] }),
  component: () => (
    <AppShell>
      <PageContainer>
        <PageHeader icon={Youtube} title="Baixar Vídeos do" highlight="YouTube" subtitle="Baixe vídeos do YouTube em alta qualidade, grátis e sem instalar nada." />
        <div className="mx-auto max-w-2xl"><Downloader /></div>
      </PageContainer>
    </AppShell>
  ),
});
