import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageContainer } from "@/components/AppShell";
import { PageHeader } from "@/components/ui-page";
import { Downloader } from "@/components/Downloader";
import { Waves } from "lucide-react";

export const Route = createFileRoute("/baixar-kwai")({
  head: () => ({ meta: [{ title: "Baixar Vídeos do Kwai — HD Grátis" }] }),
  component: () => (
    <AppShell>
      <PageContainer>
        <PageHeader icon={Waves} title="Baixar Vídeos do" highlight="Kwai" subtitle="Baixe vídeos do Kwai em alta qualidade, grátis e ilimitado." />
        <div className="mx-auto max-w-2xl"><Downloader /></div>
      </PageContainer>
    </AppShell>
  ),
});
