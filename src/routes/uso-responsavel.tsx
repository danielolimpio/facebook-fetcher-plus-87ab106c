import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageContainer } from "@/components/AppShell";
import { PageHeader, SectionCard } from "@/components/ui-page";
import { Scale, Info, BookOpen, Ban, ListChecks, ShieldAlert, Copyright, FileWarning, Sparkles, HelpCircle, RefreshCw, Mail, CheckCircle2, XCircle, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/uso-responsavel")({
  head: () => ({ meta: [{ title: "Uso Responsável — BaixarVideosFacebook" }] }),
  component: () => (
    <AppShell>
      <PageContainer>
        <PageHeader icon={Scale} title="Termos de Uso e Política de" highlight="Download Responsável" subtitle="Última atualização: Abril de 2026" />
        <div className="space-y-4">
          <SectionCard icon={Info} title="1. Aviso Legal Importante" borderTone="amber">
            <p>Esta ferramenta é fornecida exclusivamente para uso pessoal, privado, educacional e sem fins lucrativos. Ao utilizar nossos serviços, você declara estar ciente e concordar em cumprir as leis de direitos autorais vigentes e os termos das plataformas originais.</p>
          </SectionCard>
          <SectionCard icon={BookOpen} title="2. Finalidade Legítima da Ferramenta" borderTone="blue">
            <p>Nossa plataforma atende necessidades reais e legítimas: acessibilidade em áreas com conectividade limitada, economia de dados móveis, profissionais em trânsito, estudantes, necessidades terapêuticas e educacionais, preservação de memórias pessoais e privacidade.</p>
          </SectionCard>
          <SectionCard icon={Ban} title="3. O Que é Estritamente Proibido" borderTone="red">
            <ul className="ml-5 list-disc space-y-1">
              <li>Baixar conteúdo protegido por direitos autorais sem autorização</li>
              <li>Redistribuir, republicar ou compartilhar vídeos baixados</li>
              <li>Uso comercial, publicitário ou monetização do conteúdo</li>
              <li>Criação de deepfakes, manipulações ou usos difamatórios</li>
              <li>Burlar restrições de privacidade ou usar bots em massa</li>
            </ul>
          </SectionCard>
          <SectionCard icon={ListChecks} title="4. Suas Responsabilidades" borderTone="green">
            <ul className="ml-5 list-disc space-y-1">
              <li>Confirmar que possui direito legal de baixar o conteúdo</li>
              <li>Usar exclusivamente para fins pessoais e privados</li>
              <li>Não remover marcas d'água, créditos ou informações de autoria</li>
              <li>Cumprir Lei 9.610/98, Marco Civil (12.965/14) e LGPD (13.709/18)</li>
            </ul>
          </SectionCard>
          <SectionCard icon={ShieldAlert} title="5. Isenção de Responsabilidade" borderTone="amber">
            <p>Atuamos como meio técnico neutro. Não somos responsáveis por como você utiliza os vídeos após o download, por violações cometidas pelos usuários ou por consequências legais do uso inadequado.</p>
          </SectionCard>
          <SectionCard icon={Copyright} title="6. Direitos Autorais e Exceções Legais" borderTone="blue">
            <p>Conforme a Lei 9.610/98, obras audiovisuais, musicais, fotográficas, textos e software são protegidos. Exceções incluem citação para estudo, uso didático, cópia para uso privado e acesso para pessoas com deficiência.</p>
          </SectionCard>
          <SectionCard icon={FileWarning} title="7. Notificação e Remoção (DMCA)" borderTone="amber">
            <p>Envie notificações para <strong>dmca@baixarvideosfacebook.com</strong> com identificação da obra, URL infringente, prova de titularidade, declaração de boa-fé e seus dados de contato. Análise inicial em até 48 horas úteis.</p>
          </SectionCard>
          <SectionCard icon={AlertCircle} title="8. Sanções e Consequências" borderTone="red">
            <p>Violações podem resultar em suspensão de acesso, indenizações civis, responsabilização criminal (detenção de 3 meses a 1 ano, reclusão de 2 a 4 anos para fins lucrativos) e multas administrativas.</p>
          </SectionCard>
          <SectionCard icon={Sparkles} title="9. Boas Práticas Recomendadas" borderTone="green">
            <ul className="ml-5 list-disc space-y-1">
              <li>Verifique seu direito legal antes de baixar</li>
              <li>Armazene em dispositivo pessoal e protegido</li>
              <li>Apoie o criador — curta, inscreva-se, compartilhe oficialmente</li>
              <li>Prefira alternativas legais quando disponíveis</li>
            </ul>
          </SectionCard>
          <SectionCard icon={HelpCircle} title="10. Perguntas Frequentes" borderTone="blue">
            <details className="rounded-lg border border-border p-3"><summary className="cursor-pointer font-medium">Posso baixar vídeos para assistir offline?</summary><p className="mt-2 text-sm">Sim, desde que seja para uso estritamente pessoal e você tenha direito legal sobre o conteúdo.</p></details>
            <details className="rounded-lg border border-border p-3"><summary className="cursor-pointer font-medium">É permitido baixar meus próprios vídeos?</summary><p className="mt-2 text-sm">Sim, você pode baixar conteúdos de sua autoria para backup pessoal.</p></details>
            <details className="rounded-lg border border-border p-3"><summary className="cursor-pointer font-medium">É crime baixar vídeos do Facebook?</summary><p className="mt-2 text-sm">Para visualização pessoal de conteúdo público geralmente não. Redistribuir, lucrar ou violar direitos autorais é ilegal.</p></details>
          </SectionCard>
          <SectionCard icon={RefreshCw} title="11. Atualizações e Modificações" borderTone="blue">
            <p>Podemos modificar estes termos a qualquer momento. O uso continuado constitui aceitação dos novos termos.</p>
          </SectionCard>
          <SectionCard icon={Mail} title="12. Contato e Suporte" borderTone="blue">
            <p><strong>Dúvidas legais:</strong> legal@baixarvideosfacebook.com</p>
            <p><strong>DMCA:</strong> dmca@baixarvideosfacebook.com</p>
            <p><strong>Prazos:</strong> dúvidas em até 5 dias úteis · DMCA em até 48h úteis</p>
          </SectionCard>

          <h2 className="pt-4 text-center text-xl font-bold text-foreground">Resumo Prático</h2>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-[color:var(--success)]/30 bg-[color:var(--success)]/10 p-4">
              <div className="mb-2 flex items-center gap-2 font-semibold"><CheckCircle2 className="h-5 w-5 text-[color:var(--success)]" /> Pode Baixar</div>
              <ul className="ml-5 list-disc text-sm">
                <li>Seu próprio conteúdo</li>
                <li>Com autorização escrita</li>
                <li>Conteúdo em domínio público</li>
                <li>Licença Creative Commons</li>
                <li>Uso pessoal e privado</li>
              </ul>
            </div>
            <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-4">
              <div className="mb-2 flex items-center gap-2 font-semibold"><XCircle className="h-5 w-5 text-destructive" /> Não Pode Baixar</div>
              <ul className="ml-5 list-disc text-sm">
                <li>Conteúdo protegido sem autorização</li>
                <li>Para redistribuir ou compartilhar</li>
                <li>Para fins comerciais</li>
                <li>Conteúdo privado de terceiros</li>
                <li>Para exibição pública</li>
              </ul>
            </div>
            <div className="rounded-xl border border-[color:var(--warning)]/30 bg-[color:var(--warning)]/10 p-4">
              <div className="mb-2 flex items-center gap-2 font-semibold"><AlertCircle className="h-5 w-5 text-[color:var(--warning)]" /> Na Dúvida</div>
              <ul className="ml-5 list-disc text-sm">
                <li>Não baixe</li>
                <li>Consulte um advogado</li>
                <li>Entre em contato conosco</li>
                <li>Busque alternativas legais</li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-accent/40 p-4 text-center text-sm text-muted-foreground">
            Esta ferramenta é um recurso técnico para facilitar o acesso offline a conteúdos que você tem direito legal de acessar. O respeito aos criadores é fundamental para um ecossistema digital justo.
          </div>
        </div>
      </PageContainer>
    </AppShell>
  ),
});
