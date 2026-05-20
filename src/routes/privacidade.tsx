import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageContainer } from "@/components/AppShell";
import { PageHeader, SectionCard } from "@/components/ui-page";
import { ShieldCheck, Database, ListChecks, HardDrive, Cookie, Share2, UserCheck, Lock, RefreshCw, Mail, Globe, Baby, FileCheck2 } from "lucide-react";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — BaixarVideosFacebook" },
      { name: "description", content: "Política de Privacidade do BaixarVideosFacebook: como coletamos, usamos e protegemos seus dados em conformidade com a LGPD." },
      { property: "og:title", content: "Política de Privacidade — BaixarVideosFacebook" },
      { property: "og:description", content: "Política de Privacidade do BaixarVideosFacebook: como coletamos, usamos e protegemos seus dados em conformidade com a LGPD." },
      { property: "og:url", content: "https://baixarvideosfacebook.com/privacidade" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => (
    <AppShell>
      <PageContainer>
        <PageHeader icon={ShieldCheck} title="Política de" highlight="Privacidade" subtitle="Última atualização: Abril de 2026 — Em conformidade com a LGPD (Lei 13.709/18)" />
        <div className="space-y-4">
          <SectionCard icon={ShieldCheck} title="1. Nosso Compromisso com a Privacidade" borderTone="green">
            <p>O <strong>baixarvideosfacebook.com</strong> valoriza profundamente sua privacidade. Projetamos o Serviço com o princípio de <em>"privacidade por padrão"</em>: coletamos o mínimo de dados necessários, não armazenamos o conteúdo baixado e nunca vendemos informações pessoais.</p>
          </SectionCard>

          <SectionCard icon={Database} title="2. Dados que Coletamos" borderTone="blue">
            <p>Para operar o Serviço, podemos coletar:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li><strong>Dados técnicos:</strong> endereço IP anonimizado, tipo de navegador, sistema operacional, idioma, resolução de tela</li>
              <li><strong>Dados de uso:</strong> páginas visitadas, tempo de permanência, origem do tráfego, ações realizadas</li>
              <li><strong>URLs enviadas:</strong> processadas em tempo real, NÃO armazenadas após o download</li>
              <li><strong>Cookies:</strong> essenciais (funcionamento), analíticos (Google Analytics) e publicitários (AdSense)</li>
              <li><strong>Dados de contato:</strong> apenas quando você nos escreve voluntariamente (formulário, e-mail)</li>
            </ul>
          </SectionCard>

          <SectionCard icon={ListChecks} title="3. Como Usamos suas Informações" borderTone="blue">
            <ul className="ml-5 list-disc space-y-1">
              <li>Operar, manter e melhorar o serviço de download</li>
              <li>Analisar tendências de uso para otimizar a experiência</li>
              <li>Exibir anúncios relevantes através de parceiros como Google AdSense</li>
              <li>Detectar fraudes, abusos e proteger a segurança do Site</li>
              <li>Cumprir obrigações legais e responder a solicitações de autoridades competentes</li>
              <li>Responder dúvidas e prestar suporte aos usuários</li>
            </ul>
          </SectionCard>

          <SectionCard icon={HardDrive} title="4. O Que NÃO Fazemos com seus Dados" borderTone="green">
            <ul className="ml-5 list-disc space-y-1">
              <li><strong>Não armazenamos</strong> os vídeos, fotos, reels ou stories baixados</li>
              <li><strong>Não vendemos</strong> seus dados pessoais a terceiros</li>
              <li><strong>Não criamos perfis</strong> identificáveis para fins de marketing direto</li>
              <li><strong>Não compartilhamos</strong> URLs processadas com o Facebook ou outras redes</li>
              <li><strong>Não exigimos cadastro</strong> — você usa o serviço de forma anônima</li>
            </ul>
          </SectionCard>

          <SectionCard icon={Cookie} title="5. Cookies e Tecnologias de Rastreamento" borderTone="amber">
            <p>Utilizamos três categorias de cookies:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li><strong>Essenciais:</strong> indispensáveis para funcionamento básico (sessão, idioma, tema)</li>
              <li><strong>Analíticos:</strong> Google Analytics, com IP anonimizado, para entender padrões de uso</li>
              <li><strong>Publicitários:</strong> Google AdSense exibe anúncios baseados em interesses agregados</li>
            </ul>
            <p>Você pode gerenciar ou desativar cookies nas configurações do seu navegador a qualquer momento.</p>
          </SectionCard>

          <SectionCard icon={Share2} title="6. Compartilhamento de Dados com Terceiros" borderTone="blue">
            <p>Compartilhamos dados apenas com:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li><strong>Provedores de infraestrutura:</strong> servidores, CDN e proteção contra DDoS</li>
              <li><strong>Parceiros publicitários:</strong> Google AdSense, conforme suas próprias políticas</li>
              <li><strong>Ferramentas analíticas:</strong> Google Analytics com dados agregados</li>
              <li><strong>Autoridades legais:</strong> quando exigido por ordem judicial ou lei aplicável</li>
            </ul>
          </SectionCard>

          <SectionCard icon={UserCheck} title="7. Seus Direitos como Titular (LGPD)" borderTone="green">
            <p>Em conformidade com a Lei Geral de Proteção de Dados, você tem direito a:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Confirmar a existência de tratamento de seus dados</li>
              <li>Acessar os dados que mantemos sobre você</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
              <li>Solicitar a portabilidade dos dados</li>
              <li>Revogar consentimento previamente concedido</li>
              <li>Ser informado sobre compartilhamentos com entidades públicas e privadas</li>
              <li>Opor-se a tratamentos realizados em desconformidade com a LGPD</li>
            </ul>
            <p>Para exercer qualquer direito, escreva para <strong>privacidade@baixarvideosfacebook.com</strong>.</p>
          </SectionCard>

          <SectionCard icon={Lock} title="8. Segurança da Informação" borderTone="blue">
            <p>Adotamos medidas técnicas e organizacionais para proteger seus dados:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Conexão criptografada HTTPS/TLS em todo o site</li>
              <li>Proteção contra ataques DDoS e injeção</li>
              <li>Monitoramento contínuo e atualização de dependências</li>
              <li>Princípio do menor privilégio no acesso aos sistemas</li>
            </ul>
            <p>Embora façamos o máximo para proteger seus dados, nenhum sistema é 100% inviolável. Recomendamos boas práticas de segurança também do seu lado.</p>
          </SectionCard>

          <SectionCard icon={Globe} title="9. Transferência Internacional de Dados" borderTone="blue">
            <p>Alguns provedores parceiros (CDN, analytics, publicidade) podem processar dados fora do Brasil. Garantimos que essas transferências ocorrem apenas para países com nível adequado de proteção ou mediante cláusulas contratuais padrão.</p>
          </SectionCard>

          <SectionCard icon={Baby} title="10. Privacidade de Crianças e Adolescentes" borderTone="amber">
            <p>O Serviço não é direcionado a menores de 13 anos. Não coletamos intencionalmente dados de crianças. Caso identifiquemos tal coleta, removeremos imediatamente os dados. Pais ou responsáveis podem nos contatar para reportar qualquer situação.</p>
          </SectionCard>

          <SectionCard icon={FileCheck2} title="11. Retenção de Dados" borderTone="blue">
            <ul className="ml-5 list-disc space-y-1">
              <li>URLs enviadas: descartadas imediatamente após o processamento</li>
              <li>Logs técnicos: mantidos por até 6 meses para auditoria e segurança</li>
              <li>Dados analíticos agregados: até 26 meses (padrão Google Analytics)</li>
              <li>Comunicações de suporte: até 2 anos após o último contato</li>
            </ul>
          </SectionCard>

          <SectionCard icon={RefreshCw} title="12. Alterações nesta Política" borderTone="blue">
            <p>Esta Política pode ser atualizada periodicamente. Mudanças significativas serão destacadas no Site. Recomendamos a revisão regular desta página.</p>
          </SectionCard>

          <div className="flex items-start gap-3 rounded-xl border border-border bg-accent/40 p-4 text-sm">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <div>
              <p><strong>Encarregado de Dados (DPO):</strong> dpo@baixarvideosfacebook.com</p>
              <p><strong>Privacidade geral:</strong> privacidade@baixarvideosfacebook.com</p>
              <p className="mt-1 text-muted-foreground">Respondemos em até 15 dias úteis, conforme prazos da LGPD.</p>
            </div>
          </div>
        </div>
      </PageContainer>
    </AppShell>
  ),
});
