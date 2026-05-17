import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageContainer } from "@/components/AppShell";
import { PageHeader, SectionCard } from "@/components/ui-page";
import { ShieldCheck, Copyright, Handshake, AlertTriangle, Mail, ArrowLeft, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/dmca")({
  head: () => ({ meta: [{ title: "Política DMCA — BaixarVideosFacebook" }] }),
  component: () => (
    <AppShell>
      <PageContainer>
        <PageHeader icon={ShieldCheck} title="Política" highlight="DMCA" subtitle="Última atualização: Abril de 2026" />
        <div className="space-y-4">
          <SectionCard icon={Copyright} title="Digital Millennium Copyright Act (DMCA)" borderTone="blue">
            <p>O baixarvideosfacebook.com respeita os direitos de propriedade intelectual de terceiros e cumpre as disposições do Digital Millennium Copyright Act (DMCA) e legislações aplicáveis de direitos autorais.</p>
          </SectionCard>
          <SectionCard icon={Handshake} title="Nosso Compromisso" borderTone="green">
            <p>Nosso serviço é uma ferramenta técnica que permite o download de conteúdo <strong>publicamente acessível</strong> no Facebook. Não hospedamos, armazenamos ou distribuímos conteúdo protegido por direitos autorais.</p>
          </SectionCard>
          <SectionCard icon={AlertTriangle} title="Notificação de Violação de Direitos Autorais" borderTone="amber">
            <p>Se você acredita que seu conteúdo protegido está sendo utilizado de maneira que constitua violação, envie uma notificação DMCA contendo:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Identificação do trabalho protegido que alega ter sido violado</li>
              <li>Identificação do material infrator e sua localização no serviço</li>
              <li>Suas informações de contato (nome, endereço, telefone e e-mail)</li>
              <li>Declaração de boa-fé de que o uso não é autorizado pelo proprietário</li>
              <li>Declaração, sob pena de perjúrio, de que as informações são precisas e que você é o proprietário ou está autorizado a agir em nome dele</li>
              <li>Sua assinatura física ou eletrônica</li>
            </ul>
          </SectionCard>
          <SectionCard icon={Mail} title="Como Enviar uma Notificação DMCA" borderTone="blue">
            <div className="rounded-lg border border-border bg-accent/40 p-4 text-sm">
              <p>Envie sua notificação para:</p>
              <p className="mt-2">E-mail: <strong>dmca@baixarvideosfacebook.com</strong></p>
              <p>Assunto: <strong>Notificação DMCA - [Descrição breve]</strong></p>
            </div>
          </SectionCard>
          <SectionCard icon={ArrowLeft} title="Contra-Notificação" borderTone="blue">
            <p>Se você acredita que seu conteúdo foi removido erroneamente, pode enviar uma contra-notificação incluindo:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Identificação do conteúdo que foi removido</li>
              <li>Declaração sob pena de perjúrio de que a remoção foi resultado de erro</li>
              <li>Suas informações de contato</li>
              <li>Consentimento à jurisdição do tribunal federal do seu distrito</li>
            </ul>
          </SectionCard>
          <SectionCard icon={AlertCircle} title="Política de Reincidência" borderTone="red">
            <p>Em casos de violações repetidas, reservamo-nos o direito de tomar medidas adicionais, incluindo restrição de acesso ao serviço.</p>
          </SectionCard>
        </div>
      </PageContainer>
    </AppShell>
  ),
});
