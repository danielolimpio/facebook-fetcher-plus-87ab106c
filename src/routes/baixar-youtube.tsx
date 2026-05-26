import { createFileRoute } from "@tanstack/react-router";
import { Youtube } from "lucide-react";
import { SocialDownloaderPage } from "@/components/SocialDownloaderPage";

export const Route = createFileRoute("/baixar-youtube")({
  head: () => ({
    meta: [
      { title: "Baixar Vídeos do YouTube — HD, 1080p, 4K e MP3 Grátis" },
      { name: "description", content: "Baixar vídeos do YouTube online em HD, Full HD, 2K, 4K e MP3. Rápido, grátis, sem instalar nada." },
      { property: "og:title", content: "Baixar Vídeos do YouTube — HD, 1080p, 4K e MP3 Grátis" },
      { property: "og:description", content: "Baixar vídeos do YouTube online em HD, Full HD, 2K, 4K e MP3. Rápido, grátis, sem instalar nada." },
      { property: "og:url", content: "https://baixarvideosfacebook.com/baixar-youtube" },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Baixar Vídeos do YouTube",
          operatingSystem: "All",
          applicationCategory: "MultimediaApplication",
          url: "https://baixarvideosfacebook.com/baixar-youtube",
        }),
      },
    ],
  }),
  component: () => (
    <SocialDownloaderPage
      data={{
        icon: Youtube,
        brand: "YouTube",
        brandColor: "#FF0000",
        intro: "Baixe vídeos do YouTube em HD, Full HD, 2K e 4K, ou extraia o áudio em MP3. Grátis e sem instalar nada.",
        steps: [
          { title: "Copie o link do vídeo", desc: "Abra o vídeo no YouTube, toque em Compartilhar e copie o link." },
          { title: "Cole no campo acima", desc: "Cole o link e aguarde nosso baixador processar o vídeo em poucos segundos." },
          { title: "Escolha o formato", desc: "Selecione a qualidade do vídeo (até 4K) ou baixe apenas o áudio em MP3." },
        ],
        formats: [
          "Vídeos em SD, HD, Full HD, 2K e 4K",
          "Áudio MP3 de alta qualidade (até 320kbps)",
          "Shorts do YouTube em MP4 vertical",
          "Vídeos longos e lives gravadas",
          "Playlists públicas em lote",
          "Legendas e thumbnails dos vídeos",
        ],
        faq: [
          { q: "Posso baixar vídeos longos do YouTube?", a: "Sim, suportamos vídeos de qualquer duração, incluindo lives gravadas e documentários." },
          { q: "Funciona com YouTube Shorts?", a: "Sim, basta colar o link do Short e baixar normalmente em formato vertical." },
          { q: "Posso extrair só o áudio (MP3)?", a: "Sim, oferecemos extração de áudio em MP3 com qualidade até 320kbps." },
          { q: "É legal baixar vídeos do YouTube?", a: "Apenas para uso pessoal e conteúdo que você tenha direito de baixar. Veja nosso Uso Responsável." },
          { q: "Tem limite de downloads?", a: "Não, é totalmente ilimitado e gratuito." },
        ],
      }}
    />
  ),
});
