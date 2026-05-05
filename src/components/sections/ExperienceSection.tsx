import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/portfolio";

export function ExperienceSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative py-24 scroll-mt-24 sm:scroll-mt-28"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Timeline"
          headingId="experience-heading"
          title="Experience across product squads, health tech, and remote-first collaboration."
          description="Each chapter paired delivery with documentation, shared rituals, and measurable outcomes."
          align="center"
        />

        <ol className="relative border-l border-border/80 pl-10">
          {experience.map((item, index) => (
            <motion.li
              key={`${item.company}-${item.period}`}
              className="relative mb-16 last:mb-0"
              initial={reduceMotion ? false : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: reduceMotion ? 0 : 0.45,
                delay: reduceMotion ? 0 : index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span
                aria-hidden
                className="absolute -left-[11px] top-2 h-5 w-5 rounded-full border border-accent/80 bg-canvas-elevated shadow-[0_0_0_6px_hsl(var(--canvas)/0.9)] dark:bg-canvas"
              />
              <div className="space-y-4 rounded-[28px] border border-border/80 bg-gradient-to-br from-white/88 via-transparent to-transparent p-7 shadow-glass backdrop-blur-md dark:from-white/[0.08]">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground-muted">
                  <span className="rounded-full border border-accent/60 bg-accent/10 px-3 py-1 text-[11px] text-accent">
                    {item.period}
                  </span>
                  {item.location ? (
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden />
                      {item.location}
                    </span>
                  ) : null}
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-foreground-muted md:text-base">
                    {item.company}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-foreground-muted md:text-[15px] md:leading-relaxed">
                  {item.summary}
                </p>
                <ul className="space-y-2 text-sm text-foreground-muted md:text-[15px]">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
