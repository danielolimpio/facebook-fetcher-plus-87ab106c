import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageContainer } from "@/components/AppShell";
import { PageHeader, SectionCard } from "@/components/ui-page";
import { ShieldCheck, Copyright, Handshake, AlertTriangle, Mail, ArrowLeft, AlertCircle, FileText, Clock, ListChecks, Scale } from "lucide-react";

export const Route = createFileRoute("/dmca")({
  head: () => ({
    meta: [
      { title: "Política DMCA — BaixarVideosFacebook" },
      { name: "description", content: "Política DMCA do BaixarVideosFacebook: como reportar violações de direitos autorais e solicitar a remoção de conteúdo." },
      { property: "og:title", content: "Política DMCA — BaixarVideosFacebook" },
      { property: "og:description", content: "Política DMCA do BaixarVideosFacebook: como reportar violações de direitos autorais e solicitar a remoção de conteúdo." },
      { property: "og:url", content: "https://baixarvideosfacebook.com/dmca" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => (
    <AppShell>
      <PageContainer>
        <PageHeader icon={ShieldCheck} title="Política" highlight="DMCA" subtitle="Última atualização: Abril de 2026" />
        <div className="space-y-4">
          <SectionCard icon={Copyright} title="1. Sobre o Digital Millennium Copyright Act (DMCA)" borderTone="blue">
            <p>O <strong>baixarvideosfacebook.com</strong> respeita os direitos de propriedade intelectual e cumpre integralmente as disposições do Digital Millennium Copyright Act (DMCA), bem como a Lei Brasileira de Direitos Autorais (Lei 9.610/98) e o Marco Civil da Internet (Lei 12.965/14).</p>
          </SectionCard>

          <SectionCard icon={Handshake} title="2. Nosso Compromisso" borderTone="green">
            <p>Nosso serviço é uma <strong>ferramenta técnica neutra</strong> que processa links de conteúdo publicamente acessível no Facebook. Não hospedamos, armazenamos, indexamos ou distribuímos arquivos protegidos por direitos autorais.</p>
            <p>Ainda assim, levamos a sério qualquer alegação de violação e adotamos um processo formal de análise e resposta a notificações DMCA.</p>
          </SectionCard>

          <SectionCard icon={AlertTriangle} title="3. Como Enviar uma Notificação DMCA" borderTone="amber">
            <p>Se você é titular de direitos autorais e acredita que seu conteúdo está sendo utilizado de forma indevida através do nosso Serviço, envie uma notificação contendo obrigatoriamente:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Identificação clara do trabalho protegido alegadamente violado</li>
              <li>URL específica do conteúdo infrator ou descrição detalhada</li>
              <li>Suas informações completas: nome, endereço, telefone e e-mail</li>
              <li>Prova de titularidade dos direitos (registro, link original, etc.)</li>
              <li>Declaração de boa-fé de que o uso não é autorizado</li>
              <li>Declaração, sob pena de perjúrio, de que as informações são verdadeiras e que você é o titular ou está autorizado a agir em seu nome</li>
              <li>Assinatura física ou eletrônica do titular ou representante legal</li>
            </ul>
          </SectionCard>

          <SectionCard icon={Mail} title="4. Para Onde Enviar" borderTone="blue">
            <div className="rounded-lg border border-border bg-accent/40 p-4 text-sm">
              <p><strong>E-mail principal:</strong> dmca@baixarvideosfacebook.com</p>
              <p><strong>Assunto sugerido:</strong> "Notificação DMCA — [Título da obra]"</p>
              <p className="mt-2">Notificações incompletas ou genéricas podem não ser processadas. Forneça o máximo de informações possível para acelerar a análise.</p>
            </div>
          </SectionCard>

          <SectionCard icon={Clock} title="5. Prazos de Resposta" borderTone="blue">
            <ul className="ml-5 list-disc space-y-1">
              <li><strong>Confirmação de recebimento:</strong> até 48 horas úteis</li>
              <li><strong>Análise inicial:</strong> até 5 dias úteis</li>
              <li><strong>Ação ou resposta final:</strong> até 10 dias úteis</li>
              <li>Casos complexos podem requerer prazo adicional, comunicado por e-mail</li>
            </ul>
          </SectionCard>

          <SectionCard icon={ArrowLeft} title="6. Contra-Notificação" borderTone="blue">
            <p>Se você acredita que seu conteúdo foi removido por engano ou identificação incorreta, pode enviar contra-notificação contendo:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Identificação do conteúdo removido e onde ele aparecia</li>
              <li>Declaração, sob pena de perjúrio, de boa-fé de que a remoção foi indevida</li>
              <li>Suas informações de contato completas</li>
              <li>Consentimento à jurisdição do tribunal federal do seu distrito</li>
              <li>Assinatura física ou eletrônica</li>
            </ul>
          </SectionCard>

          <SectionCard icon={ListChecks} title="7. O Que Acontece Após Sua Notificação" borderTone="blue">
            <ul className="ml-5 list-disc space-y-1">
              <li>Recebemos e protocolamos sua notificação</li>
              <li>Verificamos a completude e legitimidade dos dados</li>
              <li>Bloqueamos ou removemos o conteúdo identificado quando aplicável</li>
              <li>Notificamos as partes envolvidas sobre as ações tomadas</li>
              <li>Mantemos registro do processo para auditoria</li>
            </ul>
          </SectionCard>

          <SectionCard icon={AlertCircle} title="8. Política de Reincidência" borderTone="red">
            <p>Em casos de violações repetidas envolvendo o mesmo Usuário ou conteúdo, reservamo-nos o direito de adotar medidas mais severas, incluindo bloqueio permanente de acesso, restrições por região e cooperação com autoridades competentes.</p>
          </SectionCard>

          <SectionCard icon={FileText} title="9. Notificações Falsas ou Fraudulentas" borderTone="red">
            <p>Notificações DMCA falsas, abusivas ou maliciosas podem caracterizar crime e gerar responsabilidade civil e criminal ao denunciante, incluindo indenização por danos morais e materiais à parte afetada. Pense bem antes de enviar.</p>
          </SectionCard>

          <SectionCard icon={Scale} title="10. Legislação Aplicável" borderTone="blue">
            <p>Esta política observa o DMCA (17 U.S.C. § 512), a Lei 9.610/98 (Direitos Autorais), o Marco Civil da Internet e a LGPD. Disputas serão dirimidas no foro do domicílio do Usuário consumidor no Brasil.</p>
          </SectionCard>

          <div className="rounded-xl border border-border bg-accent/40 p-4 text-center text-sm text-muted-foreground">
            Acreditamos que respeitar direitos autorais é fundamental para um ecossistema digital justo. Se você é criador de conteúdo, conte conosco para proteger sua obra.
          </div>
        </div>
      </PageContainer>
    </AppShell>
  ),
});
