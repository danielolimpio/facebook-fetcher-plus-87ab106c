import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageContainer } from "@/components/AppShell";
import { Mail, MessageSquare, Clock, Send, HelpCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — BaixarVideosFacebook" },
      { name: "description", content: "Fale com a equipe do BaixarVideosFacebook: suporte técnico, sugestões, parcerias, privacidade e notificações de direitos autorais (DMCA)." },
      { property: "og:title", content: "Contato — BaixarVideosFacebook" },
      { property: "og:description", content: "Fale com a equipe do BaixarVideosFacebook: suporte técnico, sugestões, parcerias, privacidade e notificações de direitos autorais (DMCA)." },
      { property: "og:url", content: "https://baixarvideosfacebook.com/contato" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.mensagem) {
      toast.error("Preencha nome, e-mail e mensagem.");
      return;
    }
    toast.success("Mensagem enviada! Responderemos em até 48 horas úteis.");
    setForm({ nome: "", email: "", assunto: "", mensagem: "" });
  };

  return (
    <AppShell>
      <PageContainer>
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-primary">
            <MessageSquare className="h-7 w-7" />
          </div>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">Fale com a <span className="text-primary">Nossa Equipe</span></h1>
          <p className="mt-2 text-sm text-muted-foreground">Tire suas dúvidas sobre baixar videos facebook — respondemos em até 48 horas úteis</p>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {[
            { icon: Mail, t: "E-mail Geral", d: "contato@baixarvideosfacebook.com" },
            { icon: MessageSquare, t: "Suporte Técnico", d: "suporte@baixarvideosfacebook.com" },
            { icon: Clock, t: "Tempo de Resposta", d: "Até 48 horas úteis" },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.t} className="rounded-xl border border-border bg-card p-5 text-center shadow-sm">
                <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="font-semibold text-foreground">{c.t}</div>
                <div className="mt-1 text-sm text-muted-foreground break-all">{c.d}</div>
              </div>
            );
          })}
        </div>

        <form onSubmit={submit} className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Send className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl font-bold text-foreground">Envie sua Mensagem</h2>
              <p className="text-sm text-muted-foreground">Preencha o formulário abaixo e responderemos o mais breve possível.</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Nome" value={form.nome} onChange={(v) => setForm({ ...form, nome: v })} placeholder="Seu nome completo" />
            <Field label="E-mail" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="seu@email.com" />
          </div>
          <Field label="Assunto" value={form.assunto} onChange={(v) => setForm({ ...form, assunto: v })} placeholder="Ex: Problema ao baixar videos do facebook" />
          <div className="mt-4">
            <label className="mb-1 block text-sm font-medium text-foreground">Mensagem</label>
            <textarea
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              rows={5}
              placeholder="Descreva sua dúvida sobre baixar videos facebook, baixar reels ou stories..."
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-95">
            <Send className="h-4 w-4" /> Enviar Mensagem
          </button>
        </form>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-accent/40 p-4 text-sm">
          <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <p className="text-muted-foreground">Antes de enviar, confira nossa página de <strong>FAQ</strong> — muitas dúvidas frequentes sobre <strong>baixar videos do facebook</strong> já estão respondidas por lá.</p>
        </div>
      </PageContainer>
    </AppShell>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-foreground">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
