import { createFileRoute } from "@tanstack/react-router";
import { Music2 } from "lucide-react";
import { SocialDownloaderPage } from "@/components/SocialDownloaderPage";

export const Route = createFileRoute("/baixar-tiktok")({
  head: () => ({
    meta: [
      { title: "Baixar Vídeos do TikTok sem Marca d'Água — Grátis e HD" },
      { name: "description", content: "Baixar vídeos do TikTok em HD sem marca d'água. Salve seus vídeos favoritos do TikTok grátis e online." },
    ],
  }),
  component: () => (
    <SocialDownloaderPage
      data={{
        icon: Music2,
        brand: "TikTok",
        brandColor: "#000000",
        intro: "Baixe vídeos do TikTok em HD, sem marca d'água, em MP4 ou MP3. Grátis, ilimitado e sem cadastro.",
        steps: [
          { title: "Copie o link do TikTok", desc: "No app do TikTok toque em Compartilhar > Copiar link no vídeo desejado." },
          { title: "Cole o link aqui", desc: "Cole no campo acima e clique em Baixar Agora — processa em segundos." },
          { title: "Salve sem marca d'água", desc: "Baixe o vídeo limpo em HD ou extraia apenas o áudio em MP3." },
        ],
        formats: [
          "Vídeos do TikTok sem marca d'água",
          "Qualidade HD original do criador",
          "Áudio do TikTok em MP3",
          "TikTok Stories e vídeos longos",
          "Capa (thumbnail) em alta resolução",
          "Funciona com vídeos de qualquer região",
        ],
        faq: [
          { q: "O vídeo vem realmente sem marca d'água?", a: "Sim, removemos a marca d'água automaticamente para uso pessoal." },
          { q: "Funciona com vídeos de outros países?", a: "Sim, suportamos TikTok global, incluindo bloqueios regionais." },
          { q: "Posso baixar só o som do TikTok?", a: "Sim, oferecemos download em MP3 para usar a trilha em outros projetos pessoais." },
          { q: "Precisa de conta TikTok?", a: "Não, basta o link público do vídeo." },
          { q: "Funciona com TikTok Lite?", a: "Sim, qualquer link de tiktok.com ou vm.tiktok.com funciona." },
        ],
      }}
    />
  ),
});
