import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageContainer } from "@/components/AppShell";
import { PageHeader, SectionCard, Card } from "@/components/ui-page";
import {
  Scale, AlertTriangle, BookOpen, Wifi, HeartHandshake, GraduationCap, Save, Lock,
  Ban, Copy, ShoppingCart, ShieldAlert, KeyRound, ListChecks, CheckCircle2, FileCheck2,
  Gavel, Copyright, FileWarning, AlertCircle, Sparkles, HelpCircle, RefreshCw, Mail,
  XCircle, FileText, UserCheck, ScrollText,
} from "lucide-react";

export const Route = createFileRoute("/uso-responsavel")({
  head: () => ({
    meta: [
      { title: "Uso Responsável — Termos de Download | BaixarVideosFacebook" },
      { name: "description", content: "Termos de Uso e Política de Download Responsável: finalidade legítima, proibições, responsabilidades, DMCA, sanções e boas práticas." },
      { property: "og:title", content: "Uso Responsável — Termos de Download | BaixarVideosFacebook" },
      { property: "og:description", content: "Termos de Uso e Política de Download Responsável: finalidade legítima, proibições, responsabilidades, DMCA, sanções e boas práticas." },
      { property: "og:url", content: "https://baixarvideosfacebook.com/uso-responsavel" },
      { property: "og:type", content: "article" },
    ],
  }),
  component: () => (
    <AppShell>
      <PageContainer>
        <PageHeader
          icon={Scale}
          title="Termos de Uso e Política de"
          highlight="Download Responsável"
          subtitle="Última atualização: Abril de 2026"
        />

        <div className="space-y-4">
          {/* 1 */}
          <SectionCard icon={AlertTriangle} title="1. Aviso Legal Importante" borderTone="amber">
            <p>Esta ferramenta é fornecida exclusivamente para uso pessoal, privado, educacional e sem fins lucrativos. Ao acessar e utilizar nossos serviços, você declara estar ciente e concordar em cumprir integralmente as leis de direitos autorais vigentes, os termos de serviço das plataformas originais e todas as disposições aqui estabelecidas.</p>
            <p>O descumprimento destas diretrizes pode resultar em <strong>responsabilização civil e criminal</strong> conforme a legislação brasileira e internacional aplicável.</p>
          </SectionCard>

          {/* 2 */}
          <SectionCard icon={BookOpen} title="2. Finalidade Legítima da Ferramenta" borderTone="blue">
            <p>Nossa plataforma foi desenvolvida para atender a necessidades reais e legítimas de usuários que enfrentam limitações técnicas, geográficas ou pessoais no acesso a conteúdo online. Entendemos e respeitamos as seguintes situações:</p>
          </SectionCard>

          <div className="grid gap-3 md:grid-cols-2">
            <SectionCard icon={Wifi} title="2.1. Acessibilidade e Conectividade Limitada" borderTone="blue">
              <ul className="ml-5 list-disc space-y-1">
                <li><strong>Áreas com infraestrutura precária:</strong> regiões com internet instável, lenta ou intermitente, onde o streaming não é viável</li>
                <li><strong>Economia de dados móveis:</strong> planos 3G/4G/5G limitados que exigem otimização do consumo</li>
                <li><strong>Profissionais em trânsito:</strong> motoristas, consultores, técnicos de campo sem conexão adequada</li>
                <li><strong>Estudantes de zonas rurais:</strong> alunos que precisam de material educacional offline</li>
                <li><strong>Transporte público:</strong> metrôs, ônibus ou aviões com conexão indisponível</li>
              </ul>
            </SectionCard>

            <SectionCard icon={HeartHandshake} title="2.2. Necessidades Especiais e Terapêuticas" borderTone="blue">
              <ul className="ml-5 list-disc space-y-1">
                <li><strong>Crianças e adultos com necessidades especiais:</strong> vídeos educativos, lúdicos e terapêuticos no desenvolvimento e tratamento</li>
                <li><strong>Terapias e reabilitação:</strong> exercícios, relaxamento ou estimulação cognitiva</li>
                <li><strong>Consultórios:</strong> profissionais da saúde em locais com conectividade limitada</li>
                <li><strong>Inclusão digital:</strong> revisão de conteúdos múltiplas vezes sem depender de conexão constante</li>
              </ul>
            </SectionCard>

            <SectionCard icon={GraduationCap} title="2.3. Educação e Desenvolvimento Pessoal" borderTone="blue">
              <ul className="ml-5 list-disc space-y-1">
                <li><strong>Estudo e pesquisa:</strong> material para revisão, trabalhos e provas</li>
                <li><strong>Capacitação profissional:</strong> tutoriais, cursos e treinamentos offline</li>
                <li><strong>Aprendizado de idiomas:</strong> prática repetitiva de línguas estrangeiras</li>
                <li><strong>Hobbies e habilidades manuais:</strong> culinária, artesanato, música, etc.</li>
                <li><strong>Preparação de aulas:</strong> educadores em locais sem internet</li>
              </ul>
            </SectionCard>

            <SectionCard icon={Save} title="2.4. Preservação de Memórias e Conteúdo Pessoal" borderTone="blue">
              <ul className="ml-5 list-disc space-y-1">
                <li><strong>Backup de momentos especiais:</strong> família, casamentos, aniversários, formaturas</li>
                <li><strong>Conteúdo próprio:</strong> cópia de segurança dos próprios vídeos publicados</li>
                <li><strong>Documentação histórica:</strong> registros que podem ser removidos das plataformas</li>
                <li><strong>Arquivo pessoal:</strong> conteúdos com valor sentimental ou histórico</li>
              </ul>
            </SectionCard>

            <SectionCard icon={Lock} title="2.5. Privacidade e Segurança" borderTone="blue">
              <ul className="ml-5 list-disc space-y-1">
                <li><strong>Proteção de dados pessoais:</strong> evitar rastreamento excessivo de hábitos de visualização</li>
                <li><strong>Controle de privacidade:</strong> assistir conteúdos sensíveis sem histórico online</li>
                <li><strong>Segurança da informação:</strong> profissionais com dados confidenciais preferem offline</li>
                <li><strong>Evitar algoritmos:</strong> não ter interesses mapeados por sistemas de recomendação</li>
              </ul>
            </SectionCard>
          </div>

          {/* 3 */}
          <SectionCard icon={Ban} title="3. O Que é Estritamente Proibido" borderTone="red">
            <p>Os itens a seguir descrevem usos vedados desta ferramenta. Sua violação acarreta as sanções previstas na seção 8.</p>
          </SectionCard>

          <div className="grid gap-3 md:grid-cols-2">
            <SectionCard icon={Copyright} title="3.1. Violação de Direitos Autorais" borderTone="red">
              <p>É <strong>expressamente vedado</strong>:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Baixar músicas, filmes, séries, documentários ou qualquer conteúdo protegido sem autorização dos titulares</li>
                <li>Contornar sistemas de proteção contra cópia (DRM)</li>
                <li>Acessar conteúdo pago ou restrito sem a devida licença ou assinatura</li>
                <li>Violar marcas registradas, direitos de imagem, voz ou propriedade intelectual</li>
              </ul>
            </SectionCard>

            <SectionCard icon={Copy} title="3.2. Redistribuição e Compartilhamento" borderTone="red">
              <p><strong>Não permitimos</strong>:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Republicar vídeos em YouTube, TikTok, Instagram, Facebook, Kwai, Vimeo, etc.</li>
                <li>Compartilhar arquivos em redes sociais, WhatsApp, Telegram, fóruns ou sites</li>
                <li>Upload em Google Drive, Dropbox, Mega para distribuição</li>
                <li>Incorporar em sites, blogs ou aplicações sem autorização</li>
                <li>Transmitir ou exibir publicamente em eventos ou estabelecimentos comerciais</li>
              </ul>
            </SectionCard>

            <SectionCard icon={ShoppingCart} title="3.3. Uso Comercial e Lucrativo" borderTone="red">
              <p>É <strong>proibido</strong>:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Utilizar vídeos para fins comerciais, publicitários ou promocionais</li>
                <li>Lucrar direta ou indiretamente com conteúdo de terceiros</li>
                <li>Incluir vídeos em produtos vendidos (DVDs, cursos pagos, etc.)</li>
                <li>Usar em campanhas de marketing, anúncios ou material corporativo</li>
                <li>Monetizar em plataformas como AdSense, programas de afiliados, etc.</li>
              </ul>
            </SectionCard>

            <SectionCard icon={ShieldAlert} title="3.4. Usos Ilícitos e Danosos" borderTone="red">
              <p><strong>Não toleramos</strong>:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Assédio, perseguição, difamação, calúnia ou injúria</li>
                <li>Violar privacidade, intimidade ou honra de terceiros</li>
                <li>Criar deepfakes, manipulações ou edições enganosas</li>
                <li>Discurso de ódio, discriminação ou apologia à violência</li>
                <li>Qualquer atividade ilegal, fraudulenta ou que viole direitos fundamentais</li>
              </ul>
            </SectionCard>

            <SectionCard icon={KeyRound} title="3.5. Contorno de Medidas de Proteção" borderTone="red">
              <p>É <strong>vedado</strong>:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Burlar restrições de privacidade (vídeos privados sem autorização)</li>
                <li>Acessar contas de terceiros para realizar downloads</li>
                <li>Utilizar bots, scrapers ou automações que sobrecarreguem plataformas</li>
                <li>Violar medidas tecnológicas de proteção das plataformas originais</li>
              </ul>
            </SectionCard>
          </div>

          {/* 4 */}
          <SectionCard icon={ListChecks} title="4. Suas Responsabilidades e Obrigações" borderTone="green">
            <p>Ao utilizar esta ferramenta, você assume integral responsabilidade por:</p>
          </SectionCard>

          <div className="grid gap-3 md:grid-cols-2">
            <SectionCard icon={CheckCircle2} title="4.1. Verificação Prévia" borderTone="green">
              <ul className="ml-5 list-disc space-y-1">
                <li>Confirmar se possui direito legal de baixar o conteúdo (autor, autorização ou domínio público)</li>
                <li>Verificar restrições de uso ou licenciamento específico</li>
                <li>Assegurar-se de que o download não viola os termos da plataforma de origem</li>
                <li>Confirmar conformidade com a legislação aplicável</li>
              </ul>
            </SectionCard>

            <SectionCard icon={UserCheck} title="4.2. Uso Adequado" borderTone="green">
              <ul className="ml-5 list-disc space-y-1">
                <li>Utilizar exclusivamente para fins pessoais e privados</li>
                <li>Manter o conteúdo em dispositivos de acesso restrito e seguro</li>
                <li>Não remover marcas d'água, créditos ou informações de autoria</li>
                <li>Respeitar a integridade do conteúdo original</li>
                <li>Apoiar criadores através de interações positivas (likes, inscrições, compartilhamentos oficiais)</li>
              </ul>
            </SectionCard>

            <SectionCard icon={Lock} title="4.3. Armazenamento Seguro" borderTone="green">
              <ul className="ml-5 list-disc space-y-1">
                <li>Guardar os arquivos em local seguro e de acesso controlado</li>
                <li>Não compartilhar senhas ou acesso aos dispositivos de armazenamento</li>
                <li>Excluir conteúdos quando solicitado pelos titulares</li>
                <li>Manter registro de autorizações quando aplicável</li>
              </ul>
            </SectionCard>

            <SectionCard icon={FileCheck2} title="4.4. Conformidade Legal" borderTone="green">
              <ul className="ml-5 list-disc space-y-1">
                <li>Cumprir a Lei de Direitos Autorais (Lei 9.610/98)</li>
                <li>Observar o Marco Civil da Internet (Lei 12.965/14)</li>
                <li>Respeitar a LGPD (Lei 13.709/18)</li>
                <li>Atender à legislação penal e civil aplicável</li>
                <li>Seguir os termos das plataformas (YouTube, TikTok, Instagram, Facebook, Kwai)</li>
              </ul>
            </SectionCard>
          </div>

          {/* 5 */}
          <SectionCard icon={ShieldAlert} title="5. Isenção de Responsabilidade da Plataforma" borderTone="amber">
            <p><strong>5.1. Natureza da Ferramenta:</strong> nossa plataforma funciona como um <em>meio técnico neutro</em> — similar a um navegador web, player de vídeo ou ferramenta de busca. Não criamos, hospedamos, distribuímos ou controlamos o conteúdo original das plataformas de terceiros.</p>

            <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm">
              <p className="font-semibold">5.2. Não somos responsáveis por:</p>
              <ul className="ml-5 mt-1 list-disc space-y-1">
                <li>Como você utiliza os vídeos após o download</li>
                <li>Violações de direitos autorais cometidas pelos usuários</li>
                <li>Consequências legais, civis ou criminais do uso inadequado</li>
                <li>Conteúdo original das plataformas de origem</li>
                <li>Precisão, qualidade, legalidade ou adequação do conteúdo baixado</li>
                <li>Danos diretos, indiretos, incidentais ou consequenciais</li>
                <li>Perda de dados, vírus ou malware presentes nos arquivos originais</li>
              </ul>
            </div>

            <p><strong>5.3. Ausência de endosso:</strong> a disponibilidade da ferramenta não constitui endosso ao conteúdo de terceiros, autorização para violar direitos, permissão para uso comercial nem garantia de legalidade em todas as jurisdições.</p>
            <p><strong>5.4. Variações jurídicas:</strong> as leis variam entre países. Verifique a legalidade na sua jurisdição e consulte um advogado em caso de dúvidas.</p>
          </SectionCard>

          {/* 6 */}
          <SectionCard icon={Copyright} title="6. Direitos Autorais e Exceções Legais" borderTone="blue">
            <p><strong>6.1. O que é protegido</strong> (Lei 9.610/98): obras audiovisuais, composições musicais e gravações sonoras, fotografias, textos e roteiros, coreografias, programas de computador e qualquer criação expressa por qualquer meio.</p>

            <div className="rounded-lg border border-[color:var(--success)]/30 bg-[color:var(--success)]/10 p-3 text-sm">
              <p className="font-semibold">6.2. Exceções e limitações (Uso Justo)</p>
              <ul className="ml-5 mt-1 list-disc space-y-1">
                <li>Citação para estudo, crítica ou polêmica (com indicação do autor e origem)</li>
                <li>Uso em estabelecimentos de ensino para fins didáticos</li>
                <li>Reprodução de pequenos trechos para uso privado do copista</li>
                <li>Acesso para deficientes visuais ou auditivos</li>
                <li>Cópia de segurança de programas de computador</li>
              </ul>
              <p className="mt-2 text-xs"><strong>Importante:</strong> estas exceções são restritas e específicas — não constituem autorização geral para download indiscriminado.</p>
            </div>

            <p><strong>6.3. Domínio público e licenças livres — você PODE baixar quando:</strong></p>
            <ul className="ml-5 list-disc space-y-1">
              <li>O conteúdo estiver em domínio público (geralmente 70 anos após morte do autor)</li>
              <li>Possuir licença Creative Commons compatível</li>
              <li>O autor tiver autorizado explicitamente o download e redistribuição</li>
              <li>For conteúdo de sua própria autoria</li>
            </ul>
          </SectionCard>

          {/* 7 */}
          <SectionCard icon={FileWarning} title="7. Política de Notificação e Remoção (DMCA)" borderTone="amber">
            <p><strong>7.1.</strong> Respeitamos integralmente os direitos dos titulares de propriedade intelectual e agimos prontamente mediante notificação válida.</p>
            <p><strong>7.2. Como enviar uma notificação</strong> — inclua obrigatoriamente:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Destinatário: <strong>dmca@baixarvideosfacebook.com</strong></li>
              <li>Identificação detalhada da obra protegida</li>
              <li>URL específica do conteúdo infringente</li>
              <li>Prova de titularidade ou representação legal</li>
              <li>Declaração de boa-fé de que o uso não foi autorizado</li>
              <li>Nome completo, endereço, telefone e e-mail</li>
              <li>Assinatura física ou eletrônica do titular ou representante</li>
            </ul>
            <p><strong>7.3. Prazos e procedimentos:</strong> análise inicial em até 48 horas úteis · ação de remoção imediata após confirmação · notificação ao usuário quando aplicável · contranotificação em até 10 dias úteis.</p>
            <p><strong>7.4. Notificações falsas</strong> podem gerar responsabilização civil, ações por abuso de direito e indenização por perdas e danos.</p>
          </SectionCard>

          {/* 8 */}
          <SectionCard icon={Gavel} title="8. Sanções e Consequências do Descumprimento" borderTone="red">
            <p><strong>8.1. Medidas da plataforma:</strong> suspensão ou encerramento de contas reincidentes, bloqueio de IPs, remoção de links mediante notificação válida, cooperação com autoridades mediante ordem judicial e manutenção de registros de atividade.</p>

            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm">
                <div className="mb-1 font-semibold">Civil</div>
                <ul className="ml-4 list-disc space-y-1 text-xs">
                  <li>Indenização por danos materiais (lucros cessantes, danos emergentes)</li>
                  <li>Compensação por danos morais</li>
                  <li>Perda de equipamentos utilizados na violação</li>
                </ul>
              </div>
              <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm">
                <div className="mb-1 font-semibold">Criminal (Art. 184 CP)</div>
                <ul className="ml-4 list-disc space-y-1 text-xs">
                  <li>Detenção de 3 meses a 1 ano (violação simples)</li>
                  <li>Reclusão de 2 a 4 anos (com fins lucrativos)</li>
                  <li>Multa proporcional ao dano causado</li>
                </ul>
              </div>
              <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm">
                <div className="mb-1 font-semibold">Administrativa</div>
                <ul className="ml-4 list-disc space-y-1 text-xs">
                  <li>Multas de órgãos de fiscalização</li>
                  <li>Bloqueio de sites e aplicações</li>
                  <li>Inclusão em cadastros restritivos</li>
                </ul>
              </div>
            </div>
          </SectionCard>

          {/* 9 */}
          <SectionCard icon={Sparkles} title="9. Recomendações de Boas Práticas" borderTone="green">
            <p><strong>9.1. Antes de baixar — pergunte-se:</strong></p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Eu tenho direito legal de baixar este conteúdo?</li>
              <li>O vídeo é de minha autoria? Tenho autorização por escrito?</li>
              <li>O criador oferece download oficial? Há opção de compra?</li>
              <li>Meu uso se enquadra em exceções legais específicas?</li>
            </ul>

            <p><strong>9.2. Após o download:</strong></p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Armazene com segurança em dispositivo pessoal e protegido</li>
              <li>Não compartilhe — mantenha o arquivo em uso estritamente pessoal</li>
              <li>Dê créditos quando for pertinente e autorizado</li>
              <li>Apoie o criador — curta, inscreva-se, compartilhe oficialmente</li>
              <li>Exclua quando necessário (notificação ou perda de autorização)</li>
            </ul>

            <p><strong>9.3. Alternativas legais a considerar:</strong></p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Assinaturas oficiais: YouTube Premium, Netflix, Spotify, etc.</li>
              <li>Download oficial dentro do app da plataforma</li>
              <li>Conteúdo gratuito legal: Creative Commons, domínio público</li>
              <li>Bibliotecas e instituições com acervos educacionais</li>
              <li>Contato direto com criadores para solicitar autorização</li>
            </ul>
          </SectionCard>

          {/* 10 */}
          <SectionCard icon={HelpCircle} title="10. Perguntas Frequentes (FAQ)" borderTone="blue">
            {[
              { q: "10.1. Posso baixar vídeos para assistir offline?", a: "Sim, desde que seja para uso estritamente pessoal, você tenha direito legal sobre o conteúdo ou esteja amparado por exceções legais específicas." },
              { q: "10.2. É permitido baixar meus próprios vídeos?", a: "Sim, você pode baixar vídeos de sua própria autoria para backup e uso pessoal." },
              { q: "10.3. Posso usar vídeos baixados em trabalhos escolares?", a: "A legislação permite citação para fins didáticos, mas com limitações. Consulte seu educador sobre as regras específicas da instituição." },
              { q: "10.4. É crime baixar vídeos do YouTube/TikTok/Instagram?", a: "Depende do uso. Para visualização pessoal de conteúdo público, geralmente não há crime. Porém, redistribuir, lucrar ou violar direitos autorais é ilegal." },
              { q: "10.5. O que acontece se eu republicar um vídeo baixado?", a: "Você pode receber notificação de remoção, ter sua conta suspensa na plataforma, e ser responsabilizado civil e criminalmente por violação de direitos autorais." },
              { q: "10.6. Como sei se um vídeo está protegido por direitos autorais?", a: "Praticamente todo conteúdo criativo está automaticamente protegido. A ausência do símbolo © não significa que é livre. Na dúvida, presuma que está protegido." },
              { q: "10.7. Posso baixar se o vídeo não tem marca d'água?", a: "A ausência de marca d'água não indica ausência de direitos autorais. A proteção é automática pela criação da obra." },
              { q: "10.8. E se o criador não se manifestar contra?", a: "A tolerância não significa autorização. O titular pode exercer seus direitos a qualquer momento, mesmo que tenha permitido anteriormente." },
            ].map((f, i) => (
              <details key={i} className="rounded-lg border border-border p-3">
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="mt-2 text-sm">{f.a}</p>
              </details>
            ))}
          </SectionCard>

          {/* 11 */}
          <SectionCard icon={RefreshCw} title="11. Atualizações e Modificações" borderTone="blue">
            <p><strong>11.1. Direito de alteração:</strong> reservamo-nos o direito de modificar estes termos a qualquer momento, sem aviso prévio, para adequação a mudanças legais, tecnológicas ou operacionais.</p>
            <p><strong>11.2. Publicação de alterações:</strong> versões atualizadas serão publicadas nesta página com data de vigência. O uso continuado após alterações constitui aceitação dos novos termos.</p>
            <p><strong>11.3. Acompanhamento:</strong> recomendamos que você revise periodicamente esta página para se manter informado sobre suas responsabilidades e direitos.</p>
          </SectionCard>

          {/* 12 */}
          <SectionCard icon={Mail} title="12. Contato e Suporte" borderTone="blue">
            <p><strong>12.1. Dúvidas sobre uso legítimo</strong> — legalidade de download, interpretação dos termos, exceções legais ou DMCA:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>E-mail: <strong>legal@baixarvideosfacebook.com</strong></li>
              <li>Formulário: <a href="/contato" className="text-primary underline">página de contato</a></li>
            </ul>
            <p><strong>12.2. Notificações DMCA:</strong> <strong>dmca@baixarvideosfacebook.com</strong></p>
            <p><strong>12.3. Prazos de resposta:</strong></p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Dúvidas gerais: até 5 dias úteis</li>
              <li>Notificações DMCA: até 48 horas úteis</li>
              <li>Urgências legais: imediatamente</li>
            </ul>
          </SectionCard>

          {/* 13 */}
          <SectionCard icon={ScrollText} title="13. Disposições Finais" borderTone="blue">
            <p><strong>13.1. Legislação aplicável:</strong> Lei de Direitos Autorais (9.610/98), Marco Civil da Internet (12.965/14), Código Civil (10.406/02) e Código Penal (Decreto-Lei 2.848/40).</p>
            <p><strong>13.2. Foro competente:</strong> fica eleito o foro do domicílio do usuário consumidor, com renúncia expressa a qualquer outro, por mais privilegiado que seja.</p>
            <p><strong>13.3. Divisibilidade:</strong> se qualquer disposição for considerada inválida, as demais permanecerão em pleno vigor.</p>
            <p><strong>13.4. Renúncia:</strong> a falta de exigência do cumprimento de qualquer disposição não constitui renúncia a tal direito.</p>
            <p><strong>13.5. Integralidade:</strong> estes termos constituem o acordo completo entre você e nossa plataforma quanto ao uso da ferramenta de download.</p>
          </SectionCard>

          {/* 14 */}
          <SectionCard icon={FileText} title="14. Aceite dos Termos" borderTone="green">
            <p><strong>14.1. Manifestação de concordância:</strong> ao clicar no botão "BAIXAR" ou utilizar qualquer funcionalidade desta plataforma, você declara que:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Leu e compreendeu integralmente estes termos</li>
              <li>Concorda em cumprir todas as disposições aqui estabelecidas</li>
              <li>Assume total responsabilidade pelo uso da ferramenta</li>
              <li>Está ciente das consequências do descumprimento</li>
              <li>Possui capacidade legal para celebrar este acordo</li>
            </ul>
            <p><strong>14.2. Menores de idade:</strong> menores de 18 anos devem obter consentimento dos pais ou responsáveis legais antes de utilizar esta ferramenta.</p>
            <p><strong>14.3. Uso profissional:</strong> profissionais (advogados, educadores, empresas) devem consultar assessoria jurídica especializada antes de utilizar a ferramenta em contextos institucionais.</p>
          </SectionCard>

          {/* Resumo Prático */}
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

          <Card className="text-center text-sm text-muted-foreground">
            Esta ferramenta é um recurso técnico para facilitar o acesso offline a conteúdos que você tem direito legal de acessar. O respeito aos criadores é fundamental para um ecossistema digital justo.
          </Card>
        </div>
      </PageContainer>
    </AppShell>
  ),
});
