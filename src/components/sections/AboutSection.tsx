import { motion, useReducedMotion } from "framer-motion";
import { Compass, Cpu, Feather } from "lucide-react";

import { about } from "@/data/portfolio";

const highlightsIcons = [Compass, Cpu, Feather] as const;

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative border-y border-border/60 bg-canvas-muted/35 py-24 scroll-mt-24 backdrop-blur-md sm:scroll-mt-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              About me
            </p>
            <h2 id="about-heading" className="text-balance text-3xl font-semibold md:text-[2.375rem]">
              Calibrated for craft, calibrated for throughput.
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-foreground-muted md:text-base md:leading-relaxed">
              {about.paragraphs.map((text) => (
                <motion.p
                  key={text}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: reduceMotion ? 0 : 0.4 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </div>

          <motion.ul className="grid gap-4 sm:grid-cols-3">
            {about.highlights.map((highlight, idx) => {
              const Icon = highlightsIcons[idx] ?? Feather;
              return (
                <motion.li
                  key={highlight}
                  className="group relative overflow-hidden rounded-2xl border border-border/80 bg-canvas-elevated/52 p-[1px] backdrop-blur-md dark:bg-canvas/80"
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.45,
                    delay: reduceMotion ? 0 : idx * 0.05,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -4, rotateX: 3, rotateY: -2, scale: 1.01 }
                  }
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="rounded-2xl bg-gradient-to-br from-white/42 via-transparent to-transparent p-[1px] dark:from-white/8">
                    <div className="flex h-full flex-col gap-2 rounded-[15px] bg-canvas-elevated px-5 py-4 shadow-inner-soft dark:bg-canvas-elevated/30">
                      <Icon className="h-6 w-6 text-accent" aria-hidden />
                      <p className="text-[13px] font-medium leading-relaxed text-foreground">
                        {highlight}
                      </p>
                      <span className="pointer-events-none absolute inset-x-10 top-[-30%] h-16 rounded-full bg-accent/35 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:bg-accent/25" aria-hidden />
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
