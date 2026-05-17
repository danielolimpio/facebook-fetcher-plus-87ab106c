import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageContainer } from "@/components/AppShell";
import { PageHeader } from "@/components/ui-page";
import { Downloader } from "@/components/Downloader";
import { Music2 } from "lucide-react";

export const Route = createFileRoute("/baixar-tiktok")({
  head: () => ({ meta: [{ title: "Baixar Vídeos do TikTok — Sem Marca d'Água" }] }),
  component: () => (
    <AppShell>
      <PageContainer>
        <PageHeader icon={Music2} title="Baixar Vídeos do" highlight="TikTok" subtitle="Baixe vídeos do TikTok sem marca d'água, em alta qualidade." />
        <div className="mx-auto max-w-2xl"><Downloader /></div>
      </PageContainer>
    </AppShell>
  ),
});
