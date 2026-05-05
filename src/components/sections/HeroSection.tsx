import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Mail, Sparkles } from "lucide-react";
import { siteConfig, socialLinks, type SocialLink } from "@/data/portfolio";
import { buildMailtoHref } from "@/lib/mailto";

function pickSocialIcon(icon: SocialLink["icon"]) {
  return icon === "mail" ? Mail : Github;
}

function scrollToProjectsSection() {
  document.getElementById("projects")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pb-28 pt-14 sm:pt-20 lg:pb-36 lg:pt-24 scroll-mt-24"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-[18%] top-[-20%] h-[460px] w-[460px] rounded-full bg-accent/18 blur-[100px]"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 40, -10], y: [0, 30, -20], opacity: [0.5, 0.72, 0.55] }
        }
        transition={{ duration: 18, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-[10%] top-[10%] h-[520px] w-[520px] rounded-full bg-accent-glow/16 blur-[120px]"
        animate={
          reduceMotion
            ? undefined
            : { rotate: [0, 24, -8], opacity: [0.35, 0.62, 0.45] }
        }
        transition={{ duration: 22, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] left-[15%] h-[440px] w-[440px] rounded-full bg-accent-muted/17 blur-[90px]"
        animate={
          reduceMotion
            ? undefined
            : { scale: [1, 1.08, 0.94], opacity: [0.4, 0.55, 0.38] }
        }
        transition={{ duration: 16, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="absolute inset-x-6 top-[18%] -z-[1] h-56 rounded-[38px] border border-white/11 bg-[linear-gradient(to_bottom_right,hsl(var(--canvas-elevated)/0.5),transparent)] backdrop-blur-2xl dark:border-white/[0.045] dark:bg-[linear-gradient(to_bottom_right,hsl(var(--canvas-elevated)/0.3),transparent)]" />

      <div className="mx-auto grid max-w-6xl gap-16 px-4 sm:gap-24 sm:px-6 lg:grid-cols-[minmax(0,3fr)_minmax(260px,1.2fr)] lg:items-start lg:px-8">
        <div className="space-y-8">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-[11px] font-medium text-accent backdrop-blur-sm"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.45 }}
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            13+ years · web · mobile · AI — open to impactful teams
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              id="hero-heading"
              className="max-w-xl text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl lg:leading-[1.02]"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                delay: reduceMotion ? 0 : 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {siteConfig.name}
              <span className="mt-4 block bg-gradient-to-r from-foreground via-foreground-muted to-accent bg-clip-text text-3xl font-medium text-transparent md:text-[2.125rem]">
                {siteConfig.title}
              </span>
            </motion.h1>
            <motion.p
              className="max-w-xl text-balance text-base text-foreground-muted md:text-lg"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.52,
                delay: reduceMotion ? 0 : 0.08,
              }}
            >
              {siteConfig.tagline}
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
              delay: reduceMotion ? 0 : 0.14,
            }}
          >
            <button
              type="button"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 shadow-glass transition hover:brightness-[1.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:justify-start"
              aria-describedby="hero-cta-hint"
            >
              View projects
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
            <span id="hero-cta-hint" className="sr-only">
              Scrolls smoothly to featured work.
            </span>
            <button
              type="button"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border/85 bg-canvas-elevated/45 px-6 py-3 text-sm font-semibold backdrop-blur-md transition hover:border-accent/45 hover:bg-canvas-elevated/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Let&apos;s talk
              <Mail className="h-4 w-4 opacity-85" aria-hidden />
            </button>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-3 pt-6"
            aria-label="Social profiles"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
              delay: reduceMotion ? 0 : 0.22,
            }}
          >
            {socialLinks.map((item, index) => {
              const Icon = pickSocialIcon(item.icon);
              return (
                <motion.div
                  key={item.href}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.75 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: reduceMotion ? 0 : 0.22 + index * 0.04,
                  }}
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={item.label}
                    className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-canvas-elevated/65 px-3 py-1.5 text-xs font-medium text-foreground-muted shadow-inner-soft backdrop-blur-md transition hover:border-accent/50 hover:text-foreground dark:bg-canvas-elevated/30"
                  >
                    <Icon className="h-3.5 w-3.5 text-accent transition group-hover:scale-[1.05]" aria-hidden />
                    {item.label}
                  </a>
                </motion.div>
              );
            })}
            <motion.div whileHover={reduceMotion ? undefined : { y: -2 }}>
              <a
                href={buildMailtoHref({
                  to: siteConfig.email,
                  subject: "Hello from your portfolio",
                })}
                className="inline-flex items-center gap-2 rounded-full border border-dashed border-border/80 px-3 py-1.5 text-xs font-medium text-foreground-muted transition hover:border-accent/60 hover:text-foreground"
                aria-label={`Email ${siteConfig.email}`}
              >
                <Mail className="h-3.5 w-3.5 text-accent" aria-hidden />
                {siteConfig.email}
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.aside
          className="relative mt-10 space-y-4 rounded-[30px] border border-border/70 bg-canvas-elevated/45 p-6 shadow-glass backdrop-blur-2xl dark:bg-canvas-elevated/18 lg:mt-0"
          initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            delay: reduceMotion ? 0 : 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground-muted">
            Pulse check
          </p>
          <ul className="space-y-3 text-sm leading-relaxed text-foreground-muted">
            <li>
              <strong className="font-semibold text-foreground">
                Beyond “just web”.
              </strong>{" "}
              Mobile constraints and AI guardrails woven into UX—not last-minute overlays.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Full ownership mindset.
              </strong>{" "}
              Comfortable jumping stacks when the roadmap calls for breadth, not excuses.
            </li>
          </ul>
          <motion.div
            className="mt-7 grid gap-2 rounded-[20px] border border-border/60 bg-gradient-to-br from-accent/12 via-transparent to-transparent p-[1px] shadow-inner-soft"
            whileHover={
              reduceMotion
                ? undefined
                : {
                    translateY: -3,
                    boxShadow: "0 18px 60px hsl(var(--accent) / 0.15)",
                  }
            }
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <button
              type="button"
              onClick={() => scrollToProjectsSection()}
              className="flex w-full items-center justify-between rounded-[18px] bg-canvas-elevated/80 px-4 py-3 text-left transition hover:bg-canvas-elevated dark:bg-canvas/90 dark:hover:bg-canvas-muted/95"
              aria-label="Jump to featured projects"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-muted">
                  Jump to work
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  Peek at curated case studies →
                </p>
              </div>
              <motion.span layout className="grid h-9 w-9 place-items-center rounded-2xl bg-accent/85 text-lg text-slate-950 shadow-inner-soft" aria-hidden>
                ↘
              </motion.span>
            </button>
          </motion.div>
        </motion.aside>
      </div>
    </section>
  );
}
