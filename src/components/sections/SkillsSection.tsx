import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Layers3 } from "lucide-react";
import { useMemo, useState } from "react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills, type Skill } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const lens = ["All", "Web & Mobile", "Backend · AI data", "Platform"] as const;
type Lens = (typeof lens)[number];

const categoryLabel: Record<Skill["category"], string> = {
  frontend: "Web · mobile UX",
  backend: "Backend · AI · services",
  devops: "Platform · delivery",
  other: "Breadth · leadership",
};

export function SkillsSection() {
  const reduceMotion = useReducedMotion();
  const [focus, setFocus] = useState<Lens>("All");

  const visible = useMemo<Skill[]>(() => {
    if (focus === "All") return skills;
    /** UI clients + mobile-heavy rows share the `frontend` bucket in data */
    if (focus === "Web & Mobile") return skills.filter((s) => s.category === "frontend");
    if (focus === "Backend · AI data")
      return skills.filter((s) => s.category === "backend");
    return skills.filter((s) => s.category === "devops");
  }, [focus]);

  return (
    <section
      id="skills"
      className="relative border-y border-border/65 bg-gradient-to-b from-transparent via-white/42 to-transparent py-28 dark:via-white/[0.05] scroll-mt-24 sm:scroll-mt-28"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:gap-16 sm:px-6 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:items-start lg:gap-24 lg:px-8">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Toolbox"
            headingId="skills-heading"
            title="Skills & stack fluency calibrated for multidisciplinary squads."
            description="Confidence bars are subjective — tweak values in portfolio.ts alongside your recruiter story."
            className="text-left lg:max-w-xl"
          />
          <motion.div
            aria-label="Lens filters"
            className="relative flex flex-wrap gap-3 rounded-[30px] border border-border/80 bg-canvas-muted/52 p-[6px] shadow-inner-soft backdrop-blur-md dark:bg-canvas-elevated/30"
          >
            {lens.map((item) => {
              const pressed = focus === item;
              return (
                <motion.button
                  key={item}
                  type="button"
                  onClick={() => setFocus(item)}
                  aria-pressed={pressed}
                  className={cn(
                    "relative rounded-full px-5 py-[9px] text-xs font-semibold uppercase tracking-[0.18em] transition",
                    pressed
                      ? "text-slate-950 shadow-glass bg-gradient-to-br from-accent via-accent-muted to-accent"
                      : "text-foreground-muted hover:text-foreground"
                  )}
                  whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                >
                  <span>{item}</span>
                </motion.button>
              );
            })}
          </motion.div>
          <motion.p
            className="rounded-[22px] border border-dashed border-border/85 bg-gradient-to-br from-accent/10 via-transparent to-transparent p-6 text-[13px] leading-relaxed text-foreground-muted"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.42 }}
          >
            <Layers3 className="mb-4 inline-flex h-5 w-5 text-accent" aria-hidden />
            <strong className="font-semibold text-foreground">
              Story tip:
            </strong>{" "}
            Pair high proficiency items with anecdotes in interviews — recruiters remember narrative, not bar charts alone.
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute right-[-6%] top-[-45px] hidden h-72 w-72 rounded-[40px] bg-accent/21 blur-[100px] md:block dark:bg-accent/18" aria-hidden />

          <ul className="relative grid gap-4">
            <AnimatePresence initial={false} mode="sync">
              {visible.map((skill, index) => (
                <motion.li
                  key={skill.name}
                  layout
                  initial={{
                    opacity: reduceMotion ? 1 : 0,
                    scale: reduceMotion ? 1 : 0.95,
                  }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{
                    opacity: reduceMotion ? 1 : 0,
                    scale: reduceMotion ? 1 : 0.95,
                  }}
                  transition={{ duration: reduceMotion ? 0 : 0.28, delay: reduceMotion ? 0 : index * 0.04 }}
                  className="rounded-[22px] border border-border/80 bg-gradient-to-br from-white/92 via-transparent to-transparent p-[1px] shadow-glass backdrop-blur-sm dark:from-white/8"
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                >
                  <div className="flex flex-col gap-5 rounded-[20px] bg-canvas-elevated px-7 py-5 dark:bg-canvas-elevated/30">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-foreground md:text-base">
                        {skill.name}
                      </p>
                      <span className="rounded-full border border-accent/65 bg-accent/10 px-[12px] py-[6px] text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div
                      aria-hidden="true"
                      className="relative h-2 rounded-full bg-canvas-muted/90 dark:bg-canvas-muted/40"
                      title={`Estimated proficiency ${skill.proficiency}%`}
                    >
                      <motion.span
                        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent via-accent-muted to-accent-glow shadow-[0_0_18px_rgba(45,212,191,0.35)] dark:shadow-[0_0_26px_rgba(45,212,191,0.45)]"
                        initial={{
                          width: reduceMotion ? `${skill.proficiency}%` : "0%",
                        }}
                        whileInView={{
                          width: `${skill.proficiency}%`,
                        }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.76,
                          delay: reduceMotion ? 0 : 0.1 + index * 0.04,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                      <span className="pointer-events-none absolute inset-[1px] rounded-full bg-white/42 mix-blend-screen dark:bg-transparent" aria-hidden />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground-muted">
                      {categoryLabel[skill.category]}
                    </span>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </section>
  );
}
