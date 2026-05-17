import { Link } from "@tanstack/react-router";
import { ArrowDownToLine } from "lucide-react";
import { FOOTER_LINKS, OTHER_DOWNLOADERS, SITE } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-border bg-card">
      <div className="mx-auto max-w-5xl px-6 py-10 text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <ArrowDownToLine className="h-4 w-4" />
          </span>
          <span className="font-bold">BaixarVideosFacebook</span>
        </div>
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
          <strong>Baixar videos facebook</strong> grátis em alta qualidade. O melhor baixador de video facebook para baixar reels facebook, baixar stories do facebook e baixar video do facebook pelo link. Facebook video download online, rápido e ilimitado.
        </p>

        <nav className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
          {FOOTER_LINKS.map((l) => (
            <Link key={l.href} to={l.href} className="text-foreground/70 hover:text-primary">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="mt-6 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Outros Baixadores
        </div>
        <div className="mt-3 flex flex-wrap justify-center gap-4 text-sm">
          {OTHER_DOWNLOADERS.map((d) => {
            const Icon = d.icon;
            return (
              <Link key={d.href} to={d.href} className="flex items-center gap-2 text-foreground/80 hover:text-primary">
                <span className="flex h-5 w-5 items-center justify-center rounded-md text-white" style={{ backgroundColor: d.color }}>
                  <Icon className="h-3 w-3" />
                </span>
                {d.label}
              </Link>
            );
          })}
        </div>

        <div className="mt-6 text-xs text-muted-foreground">
          © {SITE.year} BaixarVideosFacebook.com. Todos os direitos reservados.
        </div>
        <div className="mt-1 text-xs text-muted-foreground">
          Este site não é afiliado, endossado ou patrocinado pelo Facebook ou Meta Platforms, Inc.
        </div>
      </div>
    </footer>
  );
}
