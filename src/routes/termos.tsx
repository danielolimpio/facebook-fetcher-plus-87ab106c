import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageContainer } from "@/components/AppShell";
import { PageHeader, SectionCard } from "@/components/ui-page";
import { FileText, Handshake, CheckCircle2, Ban, Copyright, ShieldAlert, RefreshCw, Scale, AlertTriangle, UserCheck, Cpu, Mail, Gavel, FileWarning } from "lucide-react";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — BaixarVideosFacebook" },
      { name: "description", content: "Termos de uso do serviço BaixarVideosFacebook: regras, responsabilidades, direitos autorais e condições gerais." },
      { property: "og:title", content: "Termos de Uso — BaixarVideosFacebook" },
      { property: "og:description", content: "Termos de uso do serviço BaixarVideosFacebook: regras, responsabilidades, direitos autorais e condições gerais." },
      { property: "og:url", content: "https://baixarvideosfacebook.com/termos" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => (
    <AppShell>
      <PageContainer>
        <PageHeader icon={FileText} title="Termos de" highlight="Uso" subtitle="Última atualização: Abril de 2026" />
        <div className="space-y-4">
          <SectionCard icon={Handshake} title="1. Aceitação dos Termos" borderTone="blue">
            <p>Ao acessar ou utilizar o site <strong>baixarvideosfacebook.com</strong> ("Site", "Serviço" ou "Plataforma"), você ("Usuário") declara ter lido, compreendido e aceito integralmente estes Termos de Uso, formando um contrato vinculante entre você e a equipe responsável pelo Site.</p>
            <p>Se você não concorda com qualquer disposição destes Termos, você deve interromper imediatamente o uso do Serviço. A simples utilização do Site, ainda que parcial, configura aceitação tácita destas condições.</p>
          </SectionCard>

          <SectionCard icon={FileText} title="2. Descrição do Serviço" borderTone="blue">
            <p>O baixarvideosfacebook.com é uma ferramenta online gratuita que atua como <strong>intermediário técnico</strong> para auxiliar o download de vídeos, reels, fotos e stories publicamente disponíveis no Facebook, processando o link fornecido pelo Usuário em tempo real.</p>
            <p>O Serviço não hospeda, não armazena e não distribui conteúdo de terceiros. Todo o material baixado é transmitido diretamente do Facebook para o dispositivo do Usuário sem cópias persistentes em nossos servidores.</p>
          </SectionCard>

          <SectionCard icon={UserCheck} title="3. Capacidade e Elegibilidade" borderTone="blue">
            <ul className="ml-5 list-disc space-y-1">
              <li>O Usuário deve ter pelo menos 18 anos ou possuir autorização legal de pais/responsáveis</li>
              <li>O Usuário declara possuir capacidade civil plena para aceitar estes Termos</li>
              <li>Em caso de uso corporativo, o representante declara ter poderes para vincular a empresa</li>
            </ul>
          </SectionCard>

          <SectionCard icon={CheckCircle2} title="4. Uso Permitido" borderTone="green">
            <p>Você concorda em utilizar o Serviço exclusivamente para:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Baixar conteúdo público do Facebook para uso pessoal e não comercial</li>
              <li>Baixar conteúdo do qual você é o autor ou possui autorização expressa</li>
              <li>Fins educacionais, acadêmicos, jornalísticos ou de backup pessoal</li>
              <li>Acessibilidade — assistir offline em áreas com conectividade limitada</li>
              <li>Economia de dados móveis e preservação de memórias pessoais</li>
            </ul>
          </SectionCard>

          <SectionCard icon={Ban} title="5. Uso Proibido" borderTone="red">
            <p>É estritamente proibido utilizar o Serviço para:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Baixar conteúdo protegido por direitos autorais sem autorização do titular</li>
              <li>Redistribuir, republicar, vender, licenciar ou monetizar o conteúdo baixado</li>
              <li>Fins comerciais, publicitários ou qualquer tipo de exploração econômica</li>
              <li>Criação de deepfakes, montagens difamatórias ou manipulação enganosa</li>
              <li>Violar a privacidade de terceiros ou burlar restrições do Facebook</li>
              <li>Usar bots, scrapers, crawlers ou automações de qualquer natureza</li>
              <li>Tentar invadir, sobrecarregar ou interferir na infraestrutura do Site</li>
              <li>Qualquer atividade ilegal, fraudulenta ou contrária à moral e bons costumes</li>
            </ul>
          </SectionCard>

          <SectionCard icon={Copyright} title="6. Propriedade Intelectual" borderTone="blue">
            <p>Todo conteúdo acessado através do Serviço pertence aos seus respectivos criadores e detentores de direitos autorais. O baixarvideosfacebook.com <strong>não reivindica qualquer titularidade</strong> sobre o conteúdo de terceiros.</p>
            <p>A marca, layout, código-fonte, textos institucionais e elementos visuais do próprio Site são protegidos por direitos autorais e não podem ser copiados ou reproduzidos sem autorização escrita.</p>
          </SectionCard>

          <SectionCard icon={ShieldAlert} title="7. Isenção de Responsabilidade" borderTone="amber">
            <p>O Serviço é fornecido <em>"como está"</em> e <em>"conforme disponível"</em>, sem garantias expressas ou implícitas. Não nos responsabilizamos por:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Indisponibilidade temporária, falhas técnicas ou interrupções de serviço</li>
              <li>Qualidade, disponibilidade ou veracidade do conteúdo do Facebook</li>
              <li>Uso indevido, ilegal ou negligente do Serviço pelo Usuário</li>
              <li>Danos diretos, indiretos, lucros cessantes ou perdas consequenciais</li>
              <li>Conteúdo de anúncios de terceiros exibidos no Site</li>
              <li>Atualizações ou mudanças nas APIs e termos do Facebook que afetem o serviço</li>
            </ul>
          </SectionCard>

          <SectionCard icon={Cpu} title="8. Disponibilidade e Modificações no Serviço" borderTone="blue">
            <p>Reservamo-nos o direito de modificar, suspender ou descontinuar, total ou parcialmente, o Serviço a qualquer momento, com ou sem aviso prévio. Podemos também limitar o uso para determinadas regiões ou Usuários sem necessidade de justificativa.</p>
          </SectionCard>

          <SectionCard icon={FileWarning} title="9. Indenização" borderTone="red">
            <p>O Usuário concorda em isentar, defender e indenizar o baixarvideosfacebook.com, seus mantenedores e parceiros contra quaisquer reclamações, perdas, danos, responsabilidades, custos e despesas (incluindo honorários advocatícios) decorrentes do uso indevido do Serviço ou violação destes Termos.</p>
          </SectionCard>

          <SectionCard icon={RefreshCw} title="10. Modificações dos Termos" borderTone="blue">
            <p>Podemos alterar estes Termos a qualquer momento. A versão atualizada será publicada nesta página com nova data de "última atualização". O uso continuado após as mudanças constitui aceitação dos novos Termos.</p>
          </SectionCard>

          <SectionCard icon={Scale} title="11. Lei Aplicável e Foro" borderTone="blue">
            <p>Estes Termos são regidos pelas leis da República Federativa do Brasil, em especial pela Lei 9.610/98 (Direitos Autorais), Lei 12.965/14 (Marco Civil da Internet) e Lei 13.709/18 (LGPD). Fica eleito o foro do domicílio do Usuário consumidor para dirimir qualquer controvérsia.</p>
          </SectionCard>

          <SectionCard icon={Gavel} title="12. Disposições Gerais" borderTone="blue">
            <ul className="ml-5 list-disc space-y-1">
              <li>A invalidade de qualquer cláusula não afeta a validade das demais</li>
              <li>A tolerância a uma infração não constitui renúncia a direitos</li>
              <li>Estes Termos compõem o acordo integral entre as partes</li>
            </ul>
          </SectionCard>

          <SectionCard icon={Mail} title="13. Contato" borderTone="blue">
            <p>Dúvidas, sugestões ou reclamações sobre estes Termos:</p>
            <p><strong>E-mail:</strong> contato@baixarvideosfacebook.com</p>
            <p><strong>DMCA:</strong> dmca@baixarvideosfacebook.com</p>
          </SectionCard>

          <div className="flex items-start gap-3 rounded-xl border border-[color:var(--warning)]/30 bg-[color:var(--warning)]/10 p-4 text-sm">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--warning)]" />
            <p>Ao continuar utilizando o Serviço, você confirma ter lido, compreendido e concordado integralmente com estes Termos de Uso.</p>
          </div>
        </div>
      </PageContainer>
    </AppShell>
  ),
});
