import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell, PageContainer } from "@/components/AppShell";
import { Settings, Info, Globe, ShieldCheck, FileText, Scale, AlertTriangle, HelpCircle, Mail } from "lucide-react";

export const Route = createFileRoute("/configuracoes")({
  head: () => ({ meta: [{ title: "Configurações — BaixarVideosFacebook" }] }),
  component: ConfigPage,
});

const ITEMS = [
  { icon: Info, t: "Sobre o Site", d: "O BaixarVideosFacebook.com é o melhor baixador de video facebook — 100% gratuito para baixar videos do facebook, reels e stories em alta qualidade. Facebook video downloader online sem instalar software." },
  { icon: Globe, t: "Idioma e Acessibilidade", d: "Site disponível em Português (Brasil). Botões, mensagens e instruções em PT-BR. Também suportamos buscas internacionais como facebook video download." },
  { icon: ShieldCheck, t: "Privacidade e Segurança", d: "Não armazenamos dados pessoais, vídeos ou links nos servidores. Processamento em tempo real. Histórico salvo apenas no navegador.", link: { href: "/privacidade", label: "Ver Política de Privacidade →" } },
  { icon: FileText, t: "Termos de Uso", d: "Ao usar nossa ferramenta, você concorda em respeitar os direitos autorais dos criadores. Baixe apenas conteúdos públicos para uso pessoal.", link: { href: "/termos", label: "Ver Termos de Uso →" } },
  { icon: Scale, t: "Uso Responsável", d: "Respeite os direitos autorais. Não redistribua conteúdo de terceiros. Use o baixador apenas para fins pessoais e não comerciais.", link: { href: "/uso-responsavel", label: "Ver Política de Uso Responsável →" } },
  { icon: AlertTriangle, t: "DMCA", d: "Se você é criador de conteúdo e encontrou seu material sendo baixado indevidamente, entre em contato para solicitar a remoção.", link: { href: "/dmca", label: "Ver Política DMCA →" } },
  { icon: HelpCircle, t: "Perguntas Frequentes", d: "Dúvidas sobre como baixar videos facebook, reels ou stories? Acesse nosso FAQ completo com mais de 30 perguntas.", link: { href: "/faq", label: "Ver FAQ Completo →" } },
  { icon: Mail, t: "Contato e Suporte", d: "Precisa de ajuda ou quer reportar um problema? Entre em contato. Responderemos o mais breve possível.", link: { href: "/contato", label: "Fale Conosco →" } },
];

function ConfigPage() {
  return (
    <AppShell>
      <PageContainer>
        <div className="mb-8 flex items-start gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
            <Settings className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Configurações — BaixarVideosFacebook</h1>
            <p className="mt-1 text-sm text-muted-foreground">Informações e orientações sobre o baixador de vídeos do Facebook</p>
          </div>
        </div>

        <div className="space-y-3">
          {ITEMS.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.t} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-semibold text-foreground">{it.t}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{it.d}</p>
                    {it.link && (
                      <Link to={it.link.href} className="mt-2 inline-block text-sm font-medium text-primary hover:underline">
                        {it.link.label}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-xl border border-border bg-card p-4 text-center text-sm text-muted-foreground">
          BaixarVideosFacebook.com v2.0 · Português (Brasil) · © 2026 Todos os direitos reservados.
        </div>
      </PageContainer>
    </AppShell>
  );
}
