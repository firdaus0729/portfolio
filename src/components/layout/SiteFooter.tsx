import { siteConfig, socialLinks } from "@/data/portfolio";
import { Github, Mail } from "lucide-react";

const iconMap = {
  github: Github,
  mail: Mail,
} as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-canvas-muted/40 py-10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm font-medium text-foreground">
            {siteConfig.name} · {siteConfig.title}
          </p>
          <p className="mt-1 text-xs text-foreground-muted">
            Built with Vite, TypeScript, Tailwind & Framer Motion.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground-muted">Social</p>
          <nav aria-label="Footer social links" className="flex gap-3">
            {socialLinks.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex rounded-full border border-border/70 bg-canvas-elevated/60 p-2 text-foreground-muted transition hover:border-accent/50 hover:text-foreground dark:bg-canvas-elevated/30"
                  aria-label={item.label}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              );
            })}
          </nav>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-foreground-muted/80">
        © {year} {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  );
}
