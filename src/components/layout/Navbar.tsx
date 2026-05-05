import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Github, Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { DiscordGlyph, TelegramGlyph } from "@/components/icons/MessagingBrandIcons";
import { messagingContacts, siteConfig, socialLinks } from "@/data/portfolio";
import { copyToClipboard } from "@/lib/clipboard";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

function navHref(sectionId: (typeof navItems)[number]["id"]) {
  if (sectionId === "hero") return "/";
  return `/#${sectionId}`;
}

function hashFor(sectionId: (typeof navItems)[number]["id"]) {
  return `#${sectionId}`;
}

function smoothScrollTo(sectionId: (typeof navItems)[number]["id"]) {
  const el = document.getElementById(sectionId);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const outreachPillClass =
  "items-center gap-2 rounded-full border border-border/70 px-3 py-2 text-xs font-medium text-foreground-muted transition hover:border-accent/60 hover:text-foreground";

export function Navbar() {
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const github = socialLinks.find((s) => s.icon === "github");
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent transition-colors duration-300",
        scrolled && "border-border/70 bg-canvas/72 shadow-glass backdrop-blur-xl supports-[backdrop-filter]:bg-canvas/55"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          to={navHref("hero")}
          className="group inline-flex items-center gap-3 rounded-xl focus-visible:outline-none"
          aria-label={`${siteConfig.name} — back to hero`}
          onClick={(e) => {
            if (pathname !== "/") return;
            e.preventDefault();
            smoothScrollTo("hero");
          }}
        >
          <span className="grid h-9 w-9 place-items-center rounded-2xl border border-border/80 bg-gradient-to-br from-accent/25 via-canvas-elevated to-canvas-muted text-[11px] font-semibold text-foreground shadow-inner-soft backdrop-blur-sm dark:from-accent/30">
            <span aria-hidden>
              {siteConfig.name
                .split(/\s+/)
                .map((part) => part[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </span>
            <span className="sr-only">{siteConfig.name}</span>
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold tracking-tight">{siteConfig.name}</span>
            <span className="text-[11px] text-foreground-muted">{siteConfig.title}</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={pathname === "/" ? hashFor(item.id) : navHref(item.id)}
              className="rounded-full px-3 py-2 text-xs font-medium text-foreground-muted transition hover:bg-canvas-elevated/70 hover:text-foreground"
              onClick={(e) => {
                if (pathname !== "/") return;
                e.preventDefault();
                smoothScrollTo(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {github ? (
            <motion.a
              href={github.href}
              aria-label={`${github.label} profile`}
              className={`${outreachPillClass} hidden md:inline-flex`}
              target="_blank"
              rel="noreferrer noopener"
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              <Github className="h-4 w-4" aria-hidden />
              GitHub
            </motion.a>
          ) : null}
          <motion.a
            href={messagingContacts.discordWebUrl}
            aria-label={`Discord — username ${messagingContacts.discordUsername} (copied to clipboard)`}
            title={`Copies “${messagingContacts.discordUsername}” then opens Discord in your browser`}
            className={`${outreachPillClass} hidden md:inline-flex`}
            target="_blank"
            rel="noreferrer noopener"
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            onClick={() => void copyToClipboard(messagingContacts.discordUsername)}
          >
            <DiscordGlyph className="h-4 w-4" />
            Discord
          </motion.a>
          <motion.a
            href={messagingContacts.telegramUrl}
            aria-label={`Message @${messagingContacts.telegramUsername} on Telegram`}
            title={`Opens Telegram for @${messagingContacts.telegramUsername}`}
            className={`${outreachPillClass} hidden md:inline-flex`}
            target="_blank"
            rel="noreferrer noopener"
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          >
            <TelegramGlyph className="h-4 w-4" />
            Telegram
          </motion.a>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-border/70 p-2 text-foreground md:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            role="dialog"
            aria-modal="true"
            initial={reduceMotion ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
            className="border-t border-border/70 bg-canvas/94 px-4 py-4 backdrop-blur-xl md:hidden"
          >
            <nav aria-label="Mobile primary" className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={pathname === "/" ? hashFor(item.id) : navHref(item.id)}
                  className="rounded-xl border border-transparent px-4 py-3 text-sm font-medium text-foreground transition hover:bg-canvas-muted"
                  onClick={(e) => {
                    if (pathname !== "/") {
                      setOpen(false);
                      return;
                    }
                    e.preventDefault();
                    smoothScrollTo(item.id);
                    setOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 flex flex-wrap gap-2 border-t border-border/70 pt-4 md:hidden">
                {github ? (
                  <motion.a
                    href={github.href}
                    aria-label={`${github.label} profile`}
                    className={`${outreachPillClass} inline-flex`}
                    target="_blank"
                    rel="noreferrer noopener"
                    whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                    onClick={() => setOpen(false)}
                  >
                    <Github className="h-4 w-4" aria-hidden />
                    GitHub
                  </motion.a>
                ) : null}
                <motion.a
                  href={messagingContacts.discordWebUrl}
                  aria-label={`Discord — username ${messagingContacts.discordUsername}`}
                  className={`${outreachPillClass} inline-flex`}
                  target="_blank"
                  rel="noreferrer noopener"
                  whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                  onClick={() => {
                    void copyToClipboard(messagingContacts.discordUsername);
                    setOpen(false);
                  }}
                >
                  <DiscordGlyph className="h-4 w-4" />
                  Discord
                </motion.a>
                <motion.a
                  href={messagingContacts.telegramUrl}
                  aria-label={`Telegram @${messagingContacts.telegramUsername}`}
                  className={`${outreachPillClass} inline-flex`}
                  target="_blank"
                  rel="noreferrer noopener"
                  whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                  onClick={() => setOpen(false)}
                >
                  <TelegramGlyph className="h-4 w-4" />
                  Telegram
                </motion.a>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
