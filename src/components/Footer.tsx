import { Link } from "@tanstack/react-router";
import { FOOTER_LINKS, OTHER_DOWNLOADERS, SITE } from "@/lib/site-data";
import logoFb from "@/assets/logo-facebook-download.png";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-border bg-card">
      <div className="mx-auto max-w-5xl px-6 py-10 text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <img src={logoFb} alt="Baixar Vídeos Facebook" width={32} height={32} className="h-8 w-8 rounded-lg" />
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

        <div className="mt-8 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Outros Baixadores
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {OTHER_DOWNLOADERS.map((d) => (
            <a
              key={d.href}
              href={d.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground/80 transition hover:border-primary hover:text-primary"
            >
              <img
                src={d.logo}
                alt={`Logo ${d.label}`}
                width={24}
                height={24}
                loading="lazy"
                className="h-6 w-6 rounded-md object-cover"
              />
              <span className="font-medium">{d.label}</span>
              <span className="hidden text-xs text-muted-foreground sm:inline">
                {d.url.replace("https://", "")}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 text-xs text-muted-foreground">
          © {SITE.year} BaixarVideosFacebook.com. Todos os direitos reservados.
        </div>
        <div className="mt-1 text-xs text-muted-foreground">
          Este site não é afiliado, endossado ou patrocinado pelo Facebook ou Meta Platforms, Inc.
        </div>
      </div>
    </footer>
  );
}
