import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

export function PageHeader({
  icon: Icon,
  title,
  highlight,
  subtitle,
  iconClass = "bg-accent text-primary",
}: {
  icon: LucideIcon;
  title: string;
  highlight?: string;
  subtitle?: string;
  iconClass?: string;
}) {
  return (
    <div className="mb-8 text-center">
      <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${iconClass}`}>
        <Icon className="h-7 w-7" />
      </div>
      <h1 className="text-3xl font-bold text-foreground md:text-4xl">
        {title} {highlight && <span className="text-primary">{highlight}</span>}
      </h1>
      {subtitle && <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-border bg-card p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function SectionCard({
  icon: Icon,
  iconBg = "bg-accent text-primary",
  title,
  children,
  borderTone,
}: {
  icon: LucideIcon;
  iconBg?: string;
  title: string;
  children: ReactNode;
  borderTone?: "blue" | "green" | "amber" | "red" | "violet";
}) {
  const toneClass = {
    blue: "border-l-4 border-l-primary",
    green: "border-l-4 border-l-[color:var(--success)]",
    amber: "border-l-4 border-l-[color:var(--warning)]",
    red: "border-l-4 border-l-destructive",
    violet: "border-l-4 border-l-[oklch(0.62_0.20_300)]",
  }[borderTone ?? "blue"];

  return (
    <Card className={`${toneClass}`}>
      <div className="mb-3 flex items-center gap-3">
        <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconBg}`}>
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="space-y-3 text-foreground/80">{children}</div>
    </Card>
  );
}
