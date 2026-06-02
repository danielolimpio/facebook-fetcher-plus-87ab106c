import { Link, useLocation } from "@tanstack/react-router";
import { Home, Download, Settings, HelpCircle, ExternalLink } from "lucide-react";
import { OTHER_DOWNLOADERS, SITE } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import logoFb from "@/assets/logo-facebook-download.png";
import batePapoLogo from "@/assets/bate-papo-logo.png.asset.json";
import batePapoGif from "@/assets/bate-papo-chat.gif.asset.json";

const NAV = [
  { label: "Home", href: "/", icon: Home },
  { label: "Downloads", href: "/downloads", icon: Download },
  { label: "Configurações", href: "/configuracoes", icon: Settings },
  { label: "FAQ", href: "/faq", icon: HelpCircle },
];

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <aside className="flex w-64 flex-col self-start border-r border-sidebar-border bg-sidebar">
      <div className="flex items-center gap-3 border-b border-sidebar-border px-5 py-5">
        <img src={logoFb} alt="Baixar Vídeos Facebook" width={44} height={44} className="h-11 w-11 shrink-0 rounded-xl shadow-sm" />
        <div>
          <div className="font-bold leading-tight text-foreground">{SITE.brand}</div>
          <div className="text-xs text-muted-foreground">{SITE.brandSub}</div>
        </div>
      </div>

      <nav className="px-3 py-4">
        <ul className="space-y-1">
          {NAV.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={onNavigate}
                  className={cn(
                    "flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-accent text-primary"
                      : "text-foreground/80 hover:bg-muted hover:text-foreground",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-[18px] w-[18px]" />
                    {item.label}
                  </span>
                  {active && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Outros baixadores
        </div>
        <ul className="mt-2 space-y-1">
          {OTHER_DOWNLOADERS.map((item) => (
            <li key={item.href}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onNavigate}
                className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              >
                <img
                  src={item.logo}
                  alt={`Logo ${item.label}`}
                  width={28}
                  height={28}
                  loading="lazy"
                  className="h-7 w-7 shrink-0 rounded-md object-cover"
                />
                <span className="flex-1 truncate">{item.label}</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-60" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a
        href="https://batepapogratis.com/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        aria-label="Bate Papo Grátis"
        className="flex flex-col items-center gap-2 border-t border-sidebar-border px-5 py-4 transition-opacity hover:opacity-90"
      >
        <img
          src={batePapoLogo.url}
          alt="Bate Papo"
          width={160}
          height={160}
          className="h-auto w-32"
        />
        <img
          src={batePapoGif.url}
          alt="Bate Papo chat"
          width={80}
          height={80}
          className="h-auto w-16"
        />
      </a>

      <div className="border-t border-sidebar-border px-5 py-3 text-xs text-muted-foreground">
        {SITE.version} · {SITE.locale}
      </div>
    </aside>
  );
}
