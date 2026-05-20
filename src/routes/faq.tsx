import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageContainer } from "@/components/AppShell";
import { HelpCircle, Search } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Perguntas Frequentes — Baixar Vídeos do Facebook" },
      { name: "description", content: "Tire suas dúvidas sobre como baixar vídeos, Reels e Stories do Facebook em HD, 1080p, 2K e 4K. Compatibilidade, qualidades, limites e segurança." },
      { property: "og:title", content: "Perguntas Frequentes — Baixar Vídeos do Facebook" },
      { property: "og:description", content: "Tire suas dúvidas sobre como baixar vídeos, Reels e Stories do Facebook em HD, 1080p, 2K e 4K. Compatibilidade, qualidades, limites e segurança." },
      { property: "og:url", content: "https://baixarvideosfacebook.com/faq" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: FAQPage,
});

const FAQS: { q: string; a: string }[] = [
  { q: "O que é o BaixarVideosFacebook.com?", a: "É um baixador online gratuito que permite baixar vídeos, Reels, Stories e fotos públicas do Facebook em alta qualidade, direto no navegador." },
  { q: "Preciso pagar para baixar vídeos do Facebook?", a: "Não. O serviço é 100% gratuito e ilimitado." },
  { q: "É necessário instalar algum aplicativo para baixar vídeo do Facebook?", a: "Não. Funciona direto no navegador, sem instalar nada." },
  { q: "Preciso criar uma conta para usar o baixador de vídeo do Facebook?", a: "Não. Não pedimos cadastro nem login." },
  { q: "Quais tipos de conteúdo do Facebook posso baixar?", a: "Vídeos, Reels, Stories, fotos, álbuns, vídeos do Watch, replays de lives e áudio MP3 extraído de vídeos." },
  { q: "Posso baixar video privado do Facebook?", a: "Apenas conteúdo ao qual você tem acesso autorizado. Respeite a privacidade e os direitos de terceiros." },
  { q: "Qual a qualidade máxima dos vídeos baixados?", a: "Depende do vídeo original. Suportamos SD, HD 720p, Full HD 1080p, 2K e 4K quando disponíveis." },
  { q: "Em qual formato os vídeos são baixados?", a: "Vídeos em MP4 e áudio em MP3, formatos compatíveis com qualquer dispositivo." },
  { q: "Onde o vídeo do Facebook é salvo após o download?", a: "Na pasta de Downloads padrão do seu navegador/dispositivo." },
  { q: "Funciona no celular Android e iPhone para baixar vídeos do Facebook?", a: "Sim, funciona em Android, iPhone, iPad, tablets e qualquer navegador moderno." },
  { q: "Como baixar reel do Facebook?", a: "Abra o Reel no Facebook, toque nos três pontos, copie o link, cole aqui e clique em Baixar Agora." },
  { q: "Como baixar stories do face?", a: "Copie o link do Story público e cole no campo de download. O processamento leva poucos segundos." },
  { q: "Por que o download de um Story não funciona?", a: "Stories expiram em 24 horas. Se o Story já expirou ou é privado sem seu acesso, não será possível baixar." },
  { q: "Posso baixar todos os Stories de um perfil de uma vez?", a: "Atualmente o download é feito um por vez para garantir qualidade e estabilidade." },
  { q: "O site armazena os vídeos que eu baixo?", a: "Não. O processamento é em tempo real e nenhum conteúdo passa pelos nossos servidores de armazenamento." },
  { q: "Meus dados pessoais estão seguros ao baixar videos facebook?", a: "Sim. Não coletamos dados pessoais nem rastreamos os links que você baixa." },
  { q: "O histórico de downloads fica salvo?", a: "Sim, mas apenas localmente no seu navegador. Limpar os cookies remove o histórico." },
  { q: "Por que aparece a mensagem 'Link inválido'?", a: "O link precisa ser de uma URL do Facebook válida. Confira se copiou corretamente." },
  { q: "O download está demorando muito. O que fazer?", a: "Pode ser instabilidade temporária do Facebook. Aguarde alguns segundos e tente novamente." },
  { q: "Posso baixar vídeos ao vivo (lives) do Facebook?", a: "Sim, após a live terminar e o replay ficar disponível na página." },
  { q: "O site funciona em todos os navegadores?", a: "Sim — Chrome, Safari, Firefox, Edge, Opera e demais navegadores modernos." },
  { q: "Posso usar o baixador de vídeo do Facebook em um tablet?", a: "Sim, funciona perfeitamente em tablets Android e iPad." },
  { q: "O que significa HD, SD e Full HD nas opções de download?", a: "SD é definição padrão (480p), HD é 720p, Full HD é 1080p, 2K é 1440p e 4K é 2160p." },
  { q: "Posso extrair apenas o áudio de um vídeo do Facebook?", a: "Sim, escolha a opção Áudio MP3 ao baixar." },
  { q: "É legal baixar vídeos do Facebook?", a: "Para uso pessoal de conteúdo público geralmente sim. Redistribuir ou usar comercialmente sem autorização viola direitos autorais." },
  { q: "Posso usar os vídeos baixados em outros sites ou redes sociais?", a: "Não, sem autorização do autor. Isso pode violar direitos autorais." },
  { q: "O Facebook pode saber que eu baixei um vídeo usando este serviço?", a: "Não. O download passa pelo nosso processador, não pela sua conta do Facebook." },
  { q: "O site tem limite de downloads por dia?", a: "Não. Os downloads são ilimitados e gratuitos." },
  { q: "Por que alguns vídeos não mostram a opção Full HD?", a: "Porque o vídeo original foi publicado em qualidade menor pelo autor." },
  { q: "Como reportar um problema ao baixar videos do facebook?", a: "Pela página de Contato ou pelo e-mail suporte@baixarvideosfacebook.com." },
  { q: "What is the best facebook video downloader?", a: "BaixarVideosFacebook is a free, fast, no-install Facebook video downloader supporting HD, 2K and 4K." },
  { q: "How to use this facebook online video downloader?", a: "Copy the Facebook video link, paste it in the input field and click Download." },
  { q: "Does this facebook video link downloader support all types of posts?", a: "Yes — videos, Reels, Stories, photos, albums, Watch and Live replays." },
  { q: "Can I download Facebook videos in HD quality?", a: "Yes, up to 4K when the source video supports it." },
  { q: "Is this really a facebook free video downloader?", a: "Yes, 100% free with no registration and no daily limits." },
  { q: "How does the facebook stories downloader work?", a: "Paste the Story URL and the tool fetches the public Story media for download." },
  { q: "Can I extract audio from Facebook videos?", a: "Yes, choose the MP3 option to extract only the audio." },
  { q: "How to download videos from Facebook posts and pages?", a: "Open the post or page video, copy the URL and paste it in the downloader." },
  { q: "Is there a free facebook downloader online without registration?", a: "Yes — no registration, no install, fully free." },
  { q: "What makes this the best facebook video download tool?", a: "Speed, HD/2K/4K support, all-device compatibility and full privacy." },
  { q: "Can I download short videos and Reels from Facebook?", a: "Yes, Reels and short videos are fully supported." },
];

function FAQPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return FAQS;
    return FAQS.filter((f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
  }, [query]);

  return (
    <AppShell>
      <PageContainer>
        <div className="mb-6 flex items-start gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
            <HelpCircle className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Perguntas Frequentes — Baixar Vídeos do Facebook</h1>
            <p className="mt-1 text-sm text-muted-foreground">{FAQS.length} perguntas sobre como baixar videos facebook</p>
          </div>
        </div>

        <div className="relative mb-4">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar sobre baixar videos facebook..."
            className="h-12 w-full rounded-xl border border-input bg-card pl-11 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="space-y-2">
          {filtered.map((f, i) => (
            <details key={i} className="group rounded-xl border border-border bg-card p-4 shadow-sm">
              <summary className="cursor-pointer list-none font-medium text-foreground">{f.q}</summary>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </PageContainer>
    </AppShell>
  );
}
