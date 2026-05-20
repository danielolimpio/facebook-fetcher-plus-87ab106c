import { createFileRoute } from "@tanstack/react-router";
import { Waves } from "lucide-react";
import { SocialDownloaderPage } from "@/components/SocialDownloaderPage";

export const Route = createFileRoute("/baixar-kwai")({
  head: () => ({
    meta: [
      { title: "Baixar Vídeos do Kwai sem Marca d'Água — Grátis e HD" },
      { name: "description", content: "Baixar vídeos do Kwai em alta qualidade, sem marca d'água. Grátis, online e sem instalar aplicativos." },
      { property: "og:title", content: "Baixar Vídeos do Kwai sem Marca d'Água — Grátis e HD" },
      { property: "og:description", content: "Baixar vídeos do Kwai em alta qualidade, sem marca d'água. Grátis, online e sem instalar aplicativos." },
      { property: "og:url", content: "https://baixarvideosfacebook.com/baixar-kwai" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => (
    <SocialDownloaderPage
      data={{
        icon: Waves,
        brand: "Kwai",
        brandColor: "#FF6A00",
        intro: "Baixe vídeos do Kwai em HD, sem marca d'água, direto no seu celular ou PC. Grátis e ilimitado.",
        steps: [
          { title: "Copie o link no Kwai", desc: "No app Kwai, toque em Compartilhar e selecione 'Copiar link' do vídeo." },
          { title: "Cole no nosso baixador", desc: "Cole o link no campo acima — funciona com kwai.com e kw.ai." },
          { title: "Baixe em alta qualidade", desc: "Escolha o formato e salve no seu dispositivo em segundos." },
        ],
        formats: [
          "Vídeos do Kwai em MP4 sem marca d'água",
          "Alta qualidade HD original",
          "Áudio dos vídeos em MP3",
          "Funciona com lives gravadas e vídeos curtos",
          "Capa em alta resolução",
          "Compatível com Kwai Brasil e internacional",
        ],
        faq: [
          { q: "É realmente sem marca d'água?", a: "Sim, baixamos a versão limpa do vídeo, sem o logo do Kwai." },
          { q: "Precisa instalar app?", a: "Não, tudo é feito online no navegador." },
          { q: "Tem limite de downloads?", a: "Não, baixe quantos vídeos quiser, grátis." },
          { q: "Funciona com vídeos privados?", a: "Apenas conteúdo público ou que você tenha permissão para baixar." },
          { q: "Posso baixar pelo celular?", a: "Sim, funciona em Android e iPhone direto no navegador." },
        ],
      }}
    />
  ),
});
