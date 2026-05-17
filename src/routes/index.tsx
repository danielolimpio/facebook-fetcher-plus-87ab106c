import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageContainer } from "@/components/AppShell";
import { Downloader } from "@/components/Downloader";
import { Link } from "@tanstack/react-router";
import {
  ShieldCheck, Star, Infinity as InfinityIcon, Gift, Zap, Sparkles,
  Video, Film, Image as ImageIcon, Images, Camera, MonitorPlay, Radio, Music,
} from "lucide-react";
import heroImg from "@/assets/hero-devices.png";
import pasteImg from "@/assets/paste-url.png";
import copyImg from "@/assets/copy-link.png";
import dlImg from "@/assets/download-videos.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Baixar Vídeos do Facebook Grátis e Ilimitado — Full HD, 2K, 4K" },
      { name: "description", content: "O melhor baixador de vídeo do Facebook online. Baixar Reels, Stories e vídeos do Facebook em Full HD, 1080p, 2K e 4K. Grátis e sem instalar." },
    ],
  }),
  component: Index,
});

const FEATURES = [
  { icon: ShieldCheck, title: "Sem Marca d'Água", desc: "Baixar videos facebook limpos" },
  { icon: Star, title: "Alta Qualidade HD", desc: "Full HD, 1080p, 2K, 4K" },
  { icon: InfinityIcon, title: "Download Ilimitado", desc: "Baixar videos do facebook sem limites" },
  { icon: Gift, title: "100% Grátis", desc: "Facebook video download gratuito" },
  { icon: Zap, title: "Ultra Rápido", desc: "Baixar video do facebook em segundos" },
];

const CONTENT_TYPES = [
  { icon: Video, title: "Vídeos", desc: "Baixar videos do facebook em HD" },
  { icon: Film, title: "Reels", desc: "Baixar reels facebook facilmente" },
  { icon: ImageIcon, title: "Fotos", desc: "Baixar fotos em alta resolução" },
  { icon: Images, title: "Álbuns", desc: "Download de múltiplas fotos" },
  { icon: Camera, title: "Stories", desc: "Baixar stories do facebook" },
  { icon: MonitorPlay, title: "Watch", desc: "Baixar vídeos longos e séries" },
  { icon: Radio, title: "Ao Vivo", desc: "Replays de transmissões" },
  { icon: Music, title: "Áudio/MP3", desc: "Extrair áudio de vídeos do Facebook" },
];

const FAQ_HOME = [
  { q: "Como baixar vídeos do Facebook grátis?", a: "Cole o link do vídeo, Reel ou Story no campo acima, clique em Baixar Agora e escolha a qualidade. O download é gratuito e ilimitado." },
  { q: "Por que usar o BaixarVideosFacebook como seu baixador de vídeo do Facebook?", a: "Somos rápidos, gratuitos, não exigimos cadastro e suportamos Full HD, 2K e 4K. Funciona em qualquer dispositivo sem instalar aplicativo." },
  { q: "Como baixar Reels do Facebook?", a: "Abra o Reel no Facebook, toque nos três pontos, copie o link e cole aqui. Em segundos seu Reel está pronto para baixar." },
  { q: "Posso baixar Stories do Facebook?", a: "Sim. Suportamos download de Stories públicos do Facebook em alta qualidade." },
  { q: "Posso baixar vídeo privado do Facebook?", a: "Você só pode baixar conteúdos aos quais tem acesso autorizado. Respeite a privacidade e os direitos de terceiros." },
  { q: "Posso baixar vídeos do Facebook pelo link?", a: "Sim, este é o método principal: copie o link do vídeo e cole no campo de download." },
  { q: "É possível baixar vídeos do Facebook online sem instalar nada?", a: "Sim, o BaixarVideosFacebook funciona 100% online — não precisa instalar software, app ou extensão." },
  { q: "Funciona no Android e iPhone para baixar vídeos do Facebook?", a: "Sim. Funciona em qualquer navegador moderno — Android, iPhone, tablet, PC e Mac." },
];

function Index() {
  return (
    <AppShell>
      <PageContainer>
        <section className="text-center">
          <h1 className="text-3xl font-bold text-foreground md:text-5xl">
            Baixar Vídeos do Facebook <span className="text-primary">Gratuito e Ilimitado</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            O melhor <strong>baixador de vídeo do Facebook</strong> online. Baixar Reels do Facebook, baixar Stories do Facebook e baixar vídeos do Facebook em Full HD, 1080p, 2K, 4K. Rápido, fácil e 100% grátis!
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
            Também disponível como <em>Facebook video download</em> — funciona em computador, celular e tablet sem instalar nenhum aplicativo.
          </p>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-card p-4 shadow-sm">
            <img src={heroImg} alt="Baixar vídeos do Facebook no computador, celular e tablet" width={1024} height={768} className="mx-auto w-full max-w-2xl rounded-xl" />
          </div>

          <div className="mx-auto mt-8 max-w-2xl">
            <Downloader />
            <p className="mt-3 text-xs text-muted-foreground">
              <ShieldCheck className="-mt-1 mr-1 inline h-3.5 w-3.5 text-primary" />
              Certifique-se de não violar direitos de terceiros. Conteúdos protegidos por direitos autorais não podem ser baixados.{" "}
              <Link to="/uso-responsavel" className="text-primary underline">Saiba mais</Link>
            </p>
          </div>
        </section>

        <section className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
                <span className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="text-sm font-semibold text-foreground">{f.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">{f.desc}</div>
              </div>
            );
          })}
        </section>

        <section className="mt-12">
          <h2 className="text-center text-2xl font-bold text-foreground">Por que usar o BaixarVideosFacebook para baixar vídeos?</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-muted-foreground">
            O BaixarVideosFacebook.com é o principal baixador de video facebook online. Baixe videos, reels, stories e até video privado do facebook — grátis, sem registro e sem instalar nada.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { t: "Simples e Rápido para Baixar Vídeos do Facebook", d: "Cole o link, escolha a qualidade e baixe. Funciona como facebook video download instantâneo em 3 passos simples." },
              { t: "Baixar Vídeos do Facebook em Alta Qualidade HD", d: "Suporte para Full HD 1080p, 2K e 4K. Baixar reels e stories do facebook na melhor qualidade." },
              { t: "Baixar Videos Facebook 100% Grátis", d: "Ferramenta gratuita e ilimitada. Não precisa instalar aplicativo. Funciona direto no navegador." },
            ].map((c, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <Sparkles className="mb-3 h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-center text-2xl font-bold text-foreground">Como baixar vídeos do Facebook pelo link?</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-muted-foreground">
            Aprenda em 3 passos simples. Funciona para baixar reels facebook, baixar stories do face e qualquer vídeo público.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { n: 1, t: "Copie o link do Facebook", d: "Abra o Facebook, encontre o Reel ou Story. Toque nos três pontos e selecione 'Copiar link'." },
              { n: 2, t: "Cole no baixador de vídeo", d: "Cole o link no campo de pesquisa. Nosso baixador detecta automaticamente o formato." },
              { n: 3, t: "Baixe o vídeo grátis", d: "Selecione a qualidade (HD, 1080p, 2K, 4K) e clique em Baixar. O download é salvo no seu dispositivo." },
            ].map((s) => (
              <div key={s.n} className="rounded-xl border border-border bg-card p-5 text-center shadow-sm">
                <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground">{s.n}</span>
                <h3 className="font-semibold text-foreground">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <figure className="rounded-xl border border-border bg-card p-3 text-center text-xs text-muted-foreground">
              <img src={pasteImg} alt="Cole o link para baixar vídeo do Facebook online grátis" width={768} height={512} loading="lazy" className="rounded-lg" />
              <figcaption className="mt-2">Cole o link do Facebook e clique em Baixar</figcaption>
            </figure>
            <figure className="rounded-xl border border-border bg-card p-3 text-center text-xs text-muted-foreground">
              <img src={copyImg} alt="Como copiar link do vídeo no Facebook para download grátis" width={768} height={512} loading="lazy" className="rounded-lg" />
              <figcaption className="mt-2">Como copiar o link do vídeo no Facebook</figcaption>
            </figure>
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-primary p-6 text-primary-foreground md:p-8">
          <h2 className="text-center text-2xl font-bold">Recursos do Baixador de Vídeos do Facebook</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm opacity-90">
            Tudo que você precisa para baixar videos facebook online de forma rápida e segura
          </p>
          <ul className="mt-6 grid gap-2 text-sm md:grid-cols-2">
            {[
              "Baixar videos do facebook em alta qualidade Full HD, 1080p, 2K e 4K.",
              "Baixar reels facebook em fotos e vídeos.",
              "Baixar reels facebook e baixar reel do facebook em segundos.",
              "Baixar stories do facebook e baixar story facebook com fotos e vídeos.",
              "Baixar video privado do facebook de forma rápida e segura.",
              "Facebook video download 100% gratuito, sem registro e sem limites.",
              "Funciona em todos os dispositivos — sem instalar aplicativo ou software.",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-foreground">BaixarVideosFacebook.com — Melhor Baixador de Vídeos do Facebook</h2>
            <div className="mt-3 space-y-3 text-sm text-foreground/80">
              <p>O <strong>baixador de vídeos do Facebook</strong> é a ferramenta ideal para quem precisa baixar videos facebook em alta qualidade. Suporta download em Full HD, 1080p, 2K e 4K. Baixe videos, reels e stories com apenas um clique.</p>
              <p>Reconhecido como o melhor abaixador de video do facebook disponível. Funciona como facebook video downloader e facebook online video downloader, suportando o download de Reels, Stories e vídeos públicos. Basta colar o link.</p>
              <p>Nosso serviço é totalmente gratuito, sem necessidade de criar conta ou instalar software. Compatível com todos os dispositivos: PC, tablet e celular (Android e iOS).</p>
            </div>
          </div>
          <img src={dlImg} alt="Baixar vídeos do Facebook grátis - Baixador de video facebook online HD" width={1024} height={640} loading="lazy" className="rounded-xl border border-border bg-card" />
        </section>

        <section className="mt-12">
          <h2 className="text-center text-2xl font-bold text-foreground">O Que Você Pode Baixar do Facebook</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted-foreground">
            Nossa ferramenta para baixar videos facebook suporta diversos formatos de conteúdo do Facebook
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {CONTENT_TYPES.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
                  <span className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="text-sm font-semibold text-foreground">{c.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{c.desc}</div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-center text-2xl font-bold text-foreground">Explore Nossas Páginas</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {[
              { href: "/uso-responsavel", t: "Uso Responsável", d: "Diretrizes para usar a ferramenta com responsabilidade." },
              { href: "/termos", t: "Termos de Uso", d: "Leia os termos antes de usar o serviço." },
              { href: "/sobre", t: "Sobre Nós", d: "Conheça o BaixarVideosFacebook." },
            ].map((l) => (
              <Link key={l.href} to={l.href} className="rounded-xl border border-border bg-card p-5 shadow-sm hover:border-primary">
                <div className="font-semibold text-foreground">{l.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{l.d}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-center text-2xl font-bold text-foreground">Perguntas Frequentes sobre Baixar Vídeos do Facebook</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted-foreground">
            Tire suas dúvidas sobre como baixar videos facebook, baixar Reels e baixar Stories.
          </p>
          <div className="mx-auto mt-6 max-w-3xl space-y-2">
            {FAQ_HOME.map((f, i) => (
              <details key={i} className="group rounded-xl border border-border bg-card p-4 shadow-sm">
                <summary className="cursor-pointer list-none font-medium text-foreground">{f.q}</summary>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </PageContainer>
    </AppShell>
  );
}
