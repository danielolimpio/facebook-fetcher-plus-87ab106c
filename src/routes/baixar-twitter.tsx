import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageContainer } from "@/components/AppShell";
import { PageHeader } from "@/components/ui-page";
import { Downloader } from "@/components/Downloader";
import { Twitter } from "lucide-react";

export const Route = createFileRoute("/baixar-twitter")({
  head: () => ({ meta: [{ title: "Baixar Vídeos do Twitter/X — HD Grátis" }] }),
  component: () => (
    <AppShell>
      <PageContainer>
        <PageHeader icon={Twitter} title="Baixar Vídeos do" highlight="Twitter" subtitle="Baixe vídeos do Twitter/X em alta qualidade, grátis." />
        <div className="mx-auto max-w-2xl"><Downloader /></div>
      </PageContainer>
    </AppShell>
  ),
});
