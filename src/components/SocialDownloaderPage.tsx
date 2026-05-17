import { LucideIcon, CheckCircle2, Zap, ShieldCheck, Smartphone, Gift, Star, Sparkles, HelpCircle } from "lucide-react";
import { AppShell, PageContainer } from "@/components/AppShell";
import { PageHeader, SectionCard, Card } from "@/components/ui-page";
import { Downloader } from "@/components/Downloader";

export interface SocialPageData {
  icon: LucideIcon;
  brand: string;
  brandColor: string;
  intro: string;
  steps: { title: string; desc: string }[];
  formats: string[];
  faq: { q: string; a: string }[];
}

export function SocialDownloaderPage({ data }: { data: SocialPageData }) {
  const { icon: Icon, brand, intro, steps, formats, faq, brandColor } = data;
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          icon={Icon}
          title="Baixar Vídeos do"
          highlight={brand}
          subtitle={intro}
          iconClass="text-white"
        />
        <div className="mx-auto -mt-6 mb-6 h-1 w-24 rounded-full" style={{ backgroundColor: brandColor }} />

        <div className="mx-auto max-w-2xl">
          <Downloader />
          <p className="mt-3 text-center text-xs text-muted-foreground">
            <ShieldCheck className="-mt-1 mr-1 inline h-3.5 w-3.5 text-primary" />
            Use apenas com conteúdo público ou do qual você possui direitos. Veja nosso{" "}
            <a href="/uso-responsavel" className="text-primary underline">Uso Responsável</a>.
          </p>
        </div>

        <section className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { icon: Star, t: "Alta Qualidade", d: `HD, Full HD e 4K do ${brand}` },
            { icon: Gift, t: "100% Grátis", d: "Sem cadastro nem assinatura" },
            { icon: Zap, t: "Ultra Rápido", d: "Processa em segundos" },
            { icon: Smartphone, t: "Multi-dispositivo", d: "PC, Android e iPhone" },
          ].map((f) => (
            <div key={f.t} className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
              <span className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
                <f.icon className="h-5 w-5" />
              </span>
              <div className="text-sm font-semibold text-foreground">{f.t}</div>
              <div className="mt-1 text-xs text-muted-foreground">{f.d}</div>
            </div>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="text-center text-2xl font-bold text-foreground">Como baixar vídeos do {brand} em 3 passos</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5 text-center shadow-sm">
                <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">{i + 1}</span>
                <h3 className="font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-center text-2xl font-bold text-foreground">O que você pode baixar do {brand}</h2>
          <div className="mx-auto mt-5 grid max-w-3xl gap-2 sm:grid-cols-2">
            {formats.map((f) => (
              <div key={f} className="flex items-start gap-2 rounded-lg border border-border bg-card p-3 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--success)]" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </section>

        <SectionCard icon={Sparkles} title={`Por que usar nosso baixador de ${brand}?`} borderTone="blue">
          <p>
            Nosso baixador online é a forma mais simples e segura de salvar vídeos do {brand} no seu dispositivo. Sem instalar aplicativos, sem cadastros e sem anúncios invasivos. Funciona direto no navegador, processando o link em segundos e entregando o arquivo em alta qualidade.
          </p>
          <p>
            Use para arquivar suas próprias publicações, salvar conteúdos para assistir offline em viagens, áreas com pouca internet ou para fins educacionais. Lembre-se sempre de respeitar os direitos autorais dos criadores.
          </p>
        </SectionCard>

        <section className="mt-10">
          <div className="mb-3 flex items-center justify-center gap-2">
            <HelpCircle className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Perguntas frequentes sobre baixar {brand}</h2>
          </div>
          <Card>
            <div className="space-y-2">
              {faq.map((f, i) => (
                <details key={i} className="rounded-lg border border-border p-3">
                  <summary className="cursor-pointer font-medium">{f.q}</summary>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </Card>
        </section>
      </PageContainer>
    </AppShell>
  );
}
