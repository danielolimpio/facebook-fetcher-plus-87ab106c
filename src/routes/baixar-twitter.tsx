import { createFileRoute } from "@tanstack/react-router";
import { Twitter } from "lucide-react";
import { SocialDownloaderPage } from "@/components/SocialDownloaderPage";

export const Route = createFileRoute("/baixar-twitter")({
  head: () => ({
    meta: [
      { title: "Baixar Vídeos do Twitter / X — HD, MP4 e GIFs Grátis" },
      { name: "description", content: "Baixar vídeos e GIFs do Twitter (X) em HD, MP4 e MP3. Online, grátis e sem instalar nada." },
      { property: "og:title", content: "Baixar Vídeos do Twitter / X — HD, MP4 e GIFs Grátis" },
      { property: "og:description", content: "Baixar vídeos e GIFs do Twitter (X) em HD, MP4 e MP3. Online, grátis e sem instalar nada." },
      { property: "og:url", content: "https://baixarvideosfacebook.com/baixar-twitter" },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Baixar Vídeos do Twitter / X",
          operatingSystem: "All",
          applicationCategory: "MultimediaApplication",
          url: "https://baixarvideosfacebook.com/baixar-twitter",
        }),
      },
    ],
  }),
  component: () => (
    <SocialDownloaderPage
      data={{
        icon: Twitter,
        brand: "Twitter / X",
        brandColor: "#000000",
        intro: "Baixe vídeos, GIFs e áudios do Twitter (X) em alta qualidade. Grátis, rápido e sem aplicativos.",
        steps: [
          { title: "Copie o link do tweet", desc: "Abra o tweet com o vídeo, toque em Compartilhar e selecione 'Copiar link do tweet'." },
          { title: "Cole o link aqui", desc: "Funciona com URLs do twitter.com e x.com." },
          { title: "Baixe o vídeo", desc: "Escolha a qualidade e salve o arquivo MP4, GIF ou MP3 no seu dispositivo." },
        ],
        formats: [
          "Vídeos do Twitter em MP4 HD",
          "GIFs animados em alta qualidade",
          "Áudio dos tweets em MP3",
          "Vídeos longos do X (Spaces gravados)",
          "Funciona com links x.com e twitter.com",
          "Thumbnails dos vídeos",
        ],
        faq: [
          { q: "Funciona com o novo domínio x.com?", a: "Sim, aceitamos tanto twitter.com quanto x.com." },
          { q: "Posso baixar GIFs do Twitter?", a: "Sim, salvamos o arquivo em MP4 (formato real dos 'GIFs' do Twitter) ou em GIF animado." },
          { q: "Precisa estar logado no X?", a: "Não, basta o link público do tweet." },
          { q: "Tem marca d'água?", a: "Não, o vídeo é baixado em sua qualidade original, sem marcas." },
          { q: "Posso baixar de contas privadas?", a: "Não, apenas conteúdo público." },
        ],
      }}
    />
  ),
});
