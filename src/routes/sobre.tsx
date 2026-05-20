import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageContainer } from "@/components/AppShell";
import { PageHeader, SectionCard, Card } from "@/components/ui-page";
import { Users, Zap, Download, ShieldCheck, Target, Info, Heart, Globe, Smartphone, Award, Sparkles, Mail } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre o BaixarVideosFacebook — Nossa missão e valores" },
      { name: "description", content: "Conheça o BaixarVideosFacebook: o baixador de vídeos do Facebook gratuito, rápido e seguro. Nossa missão, valores e equipe." },
      { property: "og:title", content: "Sobre o BaixarVideosFacebook — Nossa missão e valores" },
      { property: "og:description", content: "Conheça o BaixarVideosFacebook: o baixador de vídeos do Facebook gratuito, rápido e seguro. Nossa missão, valores e equipe." },
      { property: "og:url", content: "https://baixarvideosfacebook.com/sobre" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => (
    <AppShell>
      <PageContainer>
        <PageHeader icon={Download} title="Sobre o" highlight="BaixarVideosFacebook" subtitle="O baixador de vídeos do Facebook gratuito, rápido e seguro — feito para quem precisa salvar conteúdos com simplicidade." />

        <div className="space-y-4">
          <SectionCard icon={Users} title="Quem Somos" borderTone="blue">
            <p>O <strong>baixarvideosfacebook.com</strong> nasceu para resolver um problema simples: salvar vídeos do Facebook não deveria exigir aplicativos suspeitos, cadastros longos ou pagamentos. Construímos uma ferramenta direta, transparente e gratuita.</p>
            <p>Desde o lançamento, ajudamos milhares de pessoas a baixar reels, stories, vídeos públicos e fotos, em qualquer dispositivo, com poucos cliques.</p>
          </SectionCard>

          <SectionCard icon={Target} title="Nossa Missão" borderTone="green">
            <p>Tornar o acesso offline a conteúdos do Facebook simples, seguro e respeitoso. Acreditamos que tecnologia útil deve ser <strong>gratuita, privada por padrão e acessível a todos</strong>, independentemente de plataforma, idade ou conhecimento técnico.</p>
          </SectionCard>

          <h2 className="pt-2 text-center text-xl font-bold text-foreground">Nossos Valores</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <SectionCard icon={ShieldCheck} title="Privacidade em Primeiro Lugar" borderTone="green">
              <p>Não armazenamos os vídeos processados, não exigimos cadastro e respeitamos integralmente a LGPD. Sua identidade e seus dados continuam seus.</p>
            </SectionCard>
            <SectionCard icon={Heart} title="Gratuito de Verdade" borderTone="blue">
              <p>Sem planos pagos escondidos, sem limites artificiais e sem paywalls. Mantemos o serviço com publicidade leve e respeitosa.</p>
            </SectionCard>
            <SectionCard icon={Zap} title="Rápido e Eficiente" borderTone="blue">
              <p>Otimizamos cada etapa do processo: do parser ao download, tudo acontece em segundos, mesmo em conexões móveis.</p>
            </SectionCard>
            <SectionCard icon={Sparkles} title="Transparência Total" borderTone="blue">
              <p>Políticas claras, uso responsável bem explicado e DMCA aberto a qualquer titular de direitos. Sem letras miúdas.</p>
            </SectionCard>
          </div>

          <h2 className="pt-2 text-center text-xl font-bold text-foreground">Por que escolher nosso baixador</h2>
          <div className="grid gap-3 md:grid-cols-3">
            <Card>
              <Download className="mb-2 h-6 w-6 text-primary" />
              <h3 className="font-semibold">Downloads ilimitados</h3>
              <p className="mt-1 text-sm text-muted-foreground">Sem cotas diárias nem CAPTCHAs intrusivos.</p>
            </Card>
            <Card>
              <Smartphone className="mb-2 h-6 w-6 text-primary" />
              <h3 className="font-semibold">Funciona em tudo</h3>
              <p className="mt-1 text-sm text-muted-foreground">PC, Mac, Android, iPhone, tablet — qualquer navegador moderno.</p>
            </Card>
            <Card>
              <Globe className="mb-2 h-6 w-6 text-primary" />
              <h3 className="font-semibold">Disponível 24/7</h3>
              <p className="mt-1 text-sm text-muted-foreground">Infraestrutura distribuída para alta disponibilidade global.</p>
            </Card>
            <Card>
              <Award className="mb-2 h-6 w-6 text-primary" />
              <h3 className="font-semibold">Qualidade original</h3>
              <p className="mt-1 text-sm text-muted-foreground">HD, Full HD, 2K e 4K conforme a fonte permitir.</p>
            </Card>
            <Card>
              <ShieldCheck className="mb-2 h-6 w-6 text-primary" />
              <h3 className="font-semibold">Seguro e limpo</h3>
              <p className="mt-1 text-sm text-muted-foreground">Sem malware, sem instaladores, sem extensões obrigatórias.</p>
            </Card>
            <Card>
              <Heart className="mb-2 h-6 w-6 text-primary" />
              <h3 className="font-semibold">Feito com cuidado</h3>
              <p className="mt-1 text-sm text-muted-foreground">Interface pensada para quem nunca usou um baixador antes.</p>
            </Card>
          </div>

          <SectionCard icon={Info} title="Aviso Legal" borderTone="amber">
            <p>O baixarvideosfacebook.com <strong>não é afiliado, endossado ou patrocinado pelo Facebook ou pela Meta Platforms, Inc.</strong> Todas as marcas registradas pertencem a seus respectivos titulares. O Usuário é o único responsável pelo cumprimento das leis de direitos autorais e dos Termos do Facebook ao utilizar o serviço.</p>
          </SectionCard>

          <SectionCard icon={Mail} title="Fale Conosco" borderTone="blue">
            <p>Tem sugestões, elogios ou quer reportar um problema? Adoramos ouvir nossa comunidade.</p>
            <p><strong>Geral:</strong> contato@baixarvideosfacebook.com</p>
            <p><strong>Privacidade:</strong> privacidade@baixarvideosfacebook.com</p>
            <p><strong>DMCA:</strong> dmca@baixarvideosfacebook.com</p>
          </SectionCard>
        </div>
      </PageContainer>
    </AppShell>
  ),
});
