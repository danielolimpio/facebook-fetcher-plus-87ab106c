import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageContainer } from "@/components/AppShell";
import { PageHeader, SectionCard } from "@/components/ui-page";
import { ShieldCheck, Database, ListChecks, HardDrive, Cookie, Share2, UserCheck, Lock, RefreshCw, Mail } from "lucide-react";

export const Route = createFileRoute("/privacidade")({
  head: () => ({ meta: [{ title: "Política de Privacidade — BaixarVideosFacebook" }] }),
  component: () => (
    <AppShell>
      <PageContainer>
        <PageHeader icon={ShieldCheck} title="Política de" highlight="Privacidade" subtitle="Última atualização: Abril de 2026" />
        <div className="space-y-4">
          <SectionCard icon={Database} title="1. Informações que Coletamos" borderTone="blue">
            <p>O baixarvideosfacebook.com valoriza sua privacidade. Nosso serviço foi projetado para funcionar com a mínima coleta de dados possível:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, idioma e páginas visitadas — usados para análise e melhoria do serviço.</li>
              <li><strong>URLs enviadas:</strong> as URLs do Facebook são processadas em tempo real e não são armazenadas em nossos servidores.</li>
              <li><strong>Cookies:</strong> utilizamos cookies essenciais e cookies de terceiros (como Google AdSense) para publicidade.</li>
            </ul>
          </SectionCard>
          <SectionCard icon={ListChecks} title="2. Como Usamos suas Informações" borderTone="blue">
            <ul className="ml-5 list-disc space-y-1">
              <li>Fornecer e melhorar nosso serviço de download</li>
              <li>Analisar tendências de uso e otimizar a experiência do usuário</li>
              <li>Exibir anúncios relevantes através do Google AdSense</li>
              <li>Garantir a segurança e prevenir abusos do serviço</li>
            </ul>
          </SectionCard>
          <SectionCard icon={HardDrive} title="3. Armazenamento de Dados" borderTone="green">
            <p><strong>Não armazenamos</strong> nenhum vídeo, foto, reel ou story baixado. O serviço atua como intermediário técnico — o conteúdo é processado em tempo real e enviado diretamente ao seu dispositivo.</p>
          </SectionCard>
          <SectionCard icon={Cookie} title="4. Cookies e Tecnologias de Rastreamento" borderTone="amber">
            <ul className="ml-5 list-disc space-y-1">
              <li>Cookies essenciais: necessários para o funcionamento básico do site</li>
              <li>Cookies analíticos: Google Analytics para entender o uso do site</li>
              <li>Cookies de publicidade: Google AdSense para exibir anúncios personalizados</li>
            </ul>
            <p>Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.</p>
          </SectionCard>
          <SectionCard icon={Share2} title="5. Compartilhamento de Dados" borderTone="blue">
            <p>Não vendemos, trocamos ou transferimos suas informações pessoais a terceiros, exceto:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Parceiros de publicidade (Google AdSense) conforme suas políticas</li>
              <li>Quando exigido por lei ou ordem judicial</li>
            </ul>
          </SectionCard>
          <SectionCard icon={UserCheck} title="6. Seus Direitos (LGPD)" borderTone="green">
            <ul className="ml-5 list-disc space-y-1">
              <li>Acessar seus dados pessoais</li>
              <li>Solicitar a correção de dados incompletos ou desatualizados</li>
              <li>Solicitar a exclusão de seus dados pessoais</li>
              <li>Revogar o consentimento para o tratamento de dados</li>
              <li>Solicitar a portabilidade dos dados</li>
            </ul>
            <p>Para exercer seus direitos, entre em contato através da página de Contato.</p>
          </SectionCard>
          <SectionCard icon={Lock} title="7. Segurança" borderTone="blue">
            <p>Implementamos medidas técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.</p>
          </SectionCard>
          <SectionCard icon={RefreshCw} title="8. Alterações nesta Política" borderTone="blue">
            <p>Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente.</p>
          </SectionCard>
          <div className="flex items-start gap-3 rounded-xl border border-border bg-accent/40 p-4 text-sm">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p>Dúvidas sobre privacidade? Entre em contato pelo e-mail <strong>privacidade@baixarvideosfacebook.com</strong></p>
          </div>
        </div>
      </PageContainer>
    </AppShell>
  ),
});
