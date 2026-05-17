import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageContainer } from "@/components/AppShell";
import { PageHeader, SectionCard } from "@/components/ui-page";
import { Users, Zap, Download, ShieldCheck, Target, Info } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({ meta: [{ title: "Sobre o BaixarVideosFacebook" }] }),
  component: () => (
    <AppShell>
      <PageContainer>
        <PageHeader icon={Download} title="Sobre o" highlight="BaixarVideosFacebook" subtitle="O baixador de vídeos do Facebook gratuito, rápido e seguro" />
        <div className="space-y-4">
          <SectionCard icon={Users} title="Quem Somos" borderTone="blue">
            <p>O <strong>baixarvideosfacebook.com</strong> é um baixador de vídeo do Facebook online, criado para ajudar usuários a baixar videos do facebook de forma rápida, segura e gratuita. A ferramenta funciona como um facebook video downloader completo e confiável.</p>
            <p>Desde o lançamento, já ajudamos milhares de usuários a baixar reels facebook, baixar stories do facebook e outros conteúdos diretamente em seus dispositivos, sem precisar instalar aplicativos ou criar contas.</p>
          </SectionCard>

          <h2 className="pt-2 text-center text-xl font-bold text-foreground">Por que escolher nosso baixador</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <SectionCard icon={Download} title="Downloads Ilimitados" borderTone="blue">
              <p>Sem limites para baixar videos facebook. Baixe quantos vídeos, reels e stories quiser do Facebook, totalmente grátis.</p>
            </SectionCard>
            <SectionCard icon={Zap} title="Rápido e Simples" borderTone="blue">
              <p>Basta colar o link para baixar video do facebook pelo link. Sem etapas desnecessárias, sem cadastro. Processa em segundos.</p>
            </SectionCard>
            <SectionCard icon={ShieldCheck} title="Seguro e Privado" borderTone="green">
              <p>Não armazenamos nenhum conteúdo. Sua privacidade e segurança são garantidas. Sem malware, sem vírus.</p>
            </SectionCard>
            <SectionCard icon={Info} title="Compatível com Tudo" borderTone="blue">
              <p>Funciona em qualquer dispositivo. Compatível com todos os navegadores modernos para baixar facebook videos.</p>
            </SectionCard>
          </div>

          <SectionCard icon={Target} title="Nossa Missão" borderTone="green">
            <p>Acreditamos que conteúdo público do Facebook deve ser acessível offline. Nossa missão é oferecer a melhor experiência de facebook video download, combinando simplicidade, velocidade e segurança.</p>
            <p>Trabalhamos constantemente para melhorar o serviço e garantir compatibilidade com os mais diversos formatos.</p>
          </SectionCard>

          <SectionCard icon={Info} title="Aviso Legal" borderTone="amber">
            <p>O baixarvideosfacebook.com <strong>não é afiliado, endossado ou patrocinado pelo Facebook ou Meta Platforms, Inc.</strong> Todas as marcas comerciais pertencem aos seus respectivos proprietários. O uso deste serviço é de responsabilidade do usuário, que deve respeitar os direitos autorais e os termos de uso do Facebook.</p>
          </SectionCard>
        </div>
      </PageContainer>
    </AppShell>
  ),
});
