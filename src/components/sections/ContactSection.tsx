import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Mail } from "lucide-react";

import { DiscordGlyph, TelegramGlyph } from "@/components/icons/MessagingBrandIcons";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { messagingContacts, siteConfig, socialLinks } from "@/data/portfolio";
import { buildMailtoHref } from "@/lib/mailto";
import { copyToClipboard } from "@/lib/clipboard";

const iconPick = {
  github: Github,
  mail: Mail,
} as const;

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative pb-28 pt-20 scroll-mt-24 sm:scroll-mt-28"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-x-0 top-[12%] -z-[1] h-80 bg-accent/17 blur-[120px]" aria-hidden />
      <div className="mx-auto grid max-w-6xl gap-16 px-4 sm:gap-24 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-start lg:px-8">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Let’s collaborate"
            headingId="contact-heading"
            title="Tell me what you’re building — I answer with timelines, tradeoffs, and next steps."
            description="Prefer async? Drop a concise note via email or DM. I tailor proposals after a short discovery sync."
          />
          <motion.div
            className="space-y-4 rounded-[30px] border border-border/80 bg-gradient-to-br from-white/90 via-transparent to-transparent p-[1px] shadow-glass dark:from-white/10"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.42 }}
          >
            <div className="rounded-[29px] bg-canvas-elevated px-8 py-7 backdrop-blur-md dark:bg-canvas-elevated/25">
              <p className="text-xs uppercase tracking-[0.24em] text-foreground-muted">Direct</p>
              <div className="mt-6 space-y-3">
                <a
                  href={buildMailtoHref({
                    to: siteConfig.email,
                    subject: "Hello from portfolio",
                  })}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-border/80 bg-canvas/80 px-5 py-4 text-sm font-medium text-foreground transition hover:border-accent/60 dark:bg-canvas-muted/50"
                >
                  <span className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-accent" aria-hidden />
                    {siteConfig.email}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-foreground-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </a>
                <ul className="flex flex-wrap gap-3">
                  {socialLinks.map((item) => {
                    const Icon = iconPick[item.icon];
                    return (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-canvas/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground-muted transition hover:border-accent/60 hover:text-foreground dark:bg-canvas-muted/40"
                          aria-label={item.label}
                        >
                          <Icon className="h-3.5 w-3.5 text-accent" aria-hidden />
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                  <li>
                    <a
                      href={messagingContacts.discordWebUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-canvas/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground-muted transition hover:border-accent/60 hover:text-foreground dark:bg-canvas-muted/40"
                      aria-label={`Open Discord — username ${messagingContacts.discordUsername} (copied to clipboard)`}
                      title={`Copies “${messagingContacts.discordUsername}” then opens Discord in your browser.`}
                      onClick={() => void copyToClipboard(messagingContacts.discordUsername)}
                    >
                      <DiscordGlyph className="h-3.5 w-3.5 text-accent" />
                      Discord
                    </a>
                  </li>
                  <li>
                    <a
                      href={messagingContacts.telegramUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-canvas/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground-muted transition hover:border-accent/60 hover:text-foreground dark:bg-canvas-muted/40"
                      aria-label={`Message ${messagingContacts.telegramUsername} on Telegram`}
                      title={`Opens Telegram chat with @${messagingContacts.telegramUsername}`}
                    >
                      <TelegramGlyph className="h-3.5 w-3.5 text-accent" />
                      Telegram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
