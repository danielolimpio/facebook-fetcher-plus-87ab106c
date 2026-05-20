import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { SocialDownloaderPage } from "@/components/SocialDownloaderPage";

export const Route = createFileRoute("/baixar-instagram")({
  head: () => ({
    meta: [
      { title: "Baixar Vídeos do Instagram — Reels, Stories e IGTV em HD" },
      { name: "description", content: "Baixar vídeos do Instagram grátis: Reels, Stories, IGTV e fotos em alta qualidade. Online, rápido e sem instalar apps." },
      { property: "og:title", content: "Baixar Vídeos do Instagram — Reels, Stories e IGTV em HD" },
      { property: "og:description", content: "Baixar vídeos do Instagram grátis: Reels, Stories, IGTV e fotos em alta qualidade. Online, rápido e sem instalar apps." },
      { property: "og:url", content: "https://baixarvideosfacebook.com/baixar-instagram" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => (
    <SocialDownloaderPage
      data={{
        icon: Instagram,
        brand: "Instagram",
        brandColor: "#E1306C",
        intro: "Baixe vídeos, Reels, Stories e IGTV do Instagram em alta qualidade. Rápido, grátis e direto pelo navegador.",
        steps: [
          { title: "Copie o link do Instagram", desc: "Abra o Reel, Story ou publicação, toque nos três pontos e selecione 'Copiar link'." },
          { title: "Cole no nosso baixador", desc: "Cole a URL do Instagram no campo acima — detectamos automaticamente o tipo de conteúdo." },
          { title: "Escolha a qualidade e baixe", desc: "Selecione HD ou Full HD e o arquivo será salvo direto no seu dispositivo." },
        ],
        formats: [
          "Reels do Instagram em MP4 sem marca d'água",
          "Stories públicos em alta resolução",
          "Vídeos IGTV de longa duração",
          "Fotos e carrosséis em qualidade original",
          "Áudio em MP3 extraído dos Reels",
          "Conteúdo público de qualquer perfil",
        ],
        faq: [
          { q: "Preciso instalar algum aplicativo?", a: "Não. O download é 100% online, direto no navegador do celular ou computador." },
          { q: "Posso baixar Stories de perfis privados?", a: "Não. Apenas conteúdo público ou do qual você tenha autorização do autor." },
          { q: "Tem marca d'água nos Reels baixados?", a: "Não, entregamos o vídeo original em MP4 sem marca d'água." },
          { q: "Há limite diário de downloads?", a: "Não, o serviço é ilimitado e gratuito." },
          { q: "Funciona no iPhone?", a: "Sim, funciona perfeitamente no Safari e em qualquer navegador iOS." },
        ],
      }}
    />
  ),
});
