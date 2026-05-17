import { Menu, Moon, Sun, Bell, HelpCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

export function TopBar({ onMenu }: { onMenu: () => void }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur md:px-8">
      <button
        onClick={onMenu}
        className="rounded-lg p-2 text-foreground hover:bg-muted lg:hidden"
        aria-label="Abrir menu"
      >
        <Menu className="h-5 w-5" />
      </button>
      <div className="hidden lg:block" />
      <div className="flex items-center gap-2">
        <button
          onClick={toggle}
          className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 hover:bg-muted"
          aria-label="Alternar tema"
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 hover:bg-muted" aria-label="Notificações">
          <Bell className="h-4 w-4" />
        </button>
        <Link to="/faq" className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 hover:bg-muted" aria-label="Ajuda">
          <HelpCircle className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}
