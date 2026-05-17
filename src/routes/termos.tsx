import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageContainer } from "@/components/AppShell";
import { PageHeader, SectionCard } from "@/components/ui-page";
import { FileText, Handshake, CheckCircle2, Ban, Copyright, ShieldAlert, RefreshCw, Scale, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/termos")({
  head: () => ({ meta: [{ title: "Termos de Uso — BaixarVideosFacebook" }] }),
  component: () => (
    <AppShell>
      <PageContainer>
        <PageHeader icon={FileText} title="Termos de" highlight="Uso" subtitle="Última atualização: Abril de 2026" />
        <div className="space-y-4">
          <SectionCard icon={Handshake} title="1. Aceitação dos Termos" borderTone="blue">
            <p>Ao acessar e utilizar o site <strong>baixarvideosfacebook.com</strong> ("Site"), você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso serviço.</p>
          </SectionCard>
          <SectionCard icon={FileText} title="2. Descrição do Serviço" borderTone="blue">
            <p>O baixarvideosfacebook.com é uma ferramenta online gratuita que permite baixar vídeos, reels, fotos e stories publicamente disponíveis no Facebook. Atua como intermediário técnico, permitindo o download de conteúdo público para uso pessoal.</p>
          </SectionCard>
          <SectionCard icon={CheckCircle2} title="3. Uso Permitido" borderTone="green">
            <p>Você concorda em utilizar o serviço apenas para:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Baixar conteúdo público do Facebook para uso pessoal e não comercial</li>
              <li>Baixar conteúdo do qual você é o autor ou possui autorização expressa</li>
              <li>Fins educacionais ou de backup pessoal</li>
            </ul>
          </SectionCard>
          <SectionCard icon={Ban} title="4. Uso Proibido" borderTone="red">
            <p>É estritamente proibido:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Baixar conteúdo protegido por direitos autorais sem autorização</li>
              <li>Redistribuir, vender ou comercializar conteúdo baixado</li>
              <li>Utilizar o serviço para fins ilegais ou que violem direitos de terceiros</li>
              <li>Tentar acessar áreas restritas do site ou interferir em seu funcionamento</li>
              <li>Utilizar bots, scrapers ou qualquer ferramenta automatizada no site</li>
            </ul>
          </SectionCard>
          <SectionCard icon={Copyright} title="5. Propriedade Intelectual" borderTone="blue">
            <p>Todo o conteúdo baixado através do nosso serviço pertence aos seus respectivos criadores e proprietários. O baixarvideosfacebook.com não reivindica direitos sobre o conteúdo baixado pelos usuários. A responsabilidade pelo uso adequado é exclusivamente do usuário.</p>
          </SectionCard>
          <SectionCard icon={ShieldAlert} title="6. Isenção de Responsabilidade" borderTone="amber">
            <p>O serviço é fornecido "como está", sem garantias de qualquer tipo. Não nos responsabilizamos por:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Indisponibilidade temporária do serviço</li>
              <li>Qualidade ou disponibilidade do conteúdo do Facebook</li>
              <li>Uso indevido do serviço por parte dos usuários</li>
              <li>Danos diretos ou indiretos resultantes do uso do serviço</li>
            </ul>
          </SectionCard>
          <SectionCard icon={RefreshCw} title="7. Modificações dos Termos" borderTone="blue">
            <p>Reservamo-nos o direito de modificar estes Termos a qualquer momento. As alterações entram em vigor após a publicação no site. O uso continuado constitui aceitação dos novos termos.</p>
          </SectionCard>
          <SectionCard icon={Scale} title="8. Lei Aplicável" borderTone="blue">
            <p>Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será submetida ao foro da comarca do domicílio do usuário.</p>
          </SectionCard>
          <div className="flex items-start gap-3 rounded-xl border border-[color:var(--warning)]/30 bg-[color:var(--warning)]/10 p-4 text-sm">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--warning)]" />
            <p>Ao continuar utilizando o serviço, você confirma ter lido, compreendido e concordado integralmente com estes Termos de Uso.</p>
          </div>
        </div>
      </PageContainer>
    </AppShell>
  ),
});
