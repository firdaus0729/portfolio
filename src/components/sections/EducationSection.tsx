import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/portfolio";

export function EducationSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="education"
      className="border-t border-border/70 bg-canvas-muted/35 py-24 scroll-mt-24 backdrop-blur-md sm:scroll-mt-28"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Learning path"
          headingId="education-heading"
          title="Education that shaped how I learn in public and in production."
          description="Keep this lean — hiring teams scan for signal, not every semester."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={`${item.school}-${item.period}`}
              className="flex flex-col gap-4 rounded-[28px] border border-border/80 bg-canvas-elevated/70 p-7 shadow-inner-soft backdrop-blur-md dark:bg-canvas-elevated/25"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: reduceMotion ? 0 : 0.45,
                delay: reduceMotion ? 0 : index * 0.05,
              }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/45 bg-accent/12 text-accent">
                <GraduationCap className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted">
                  {item.period}
                </p>
                <h3 className="mt-2 text-lg font-semibold md:text-xl">{item.school}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{item.degree}</p>
              </div>
              {item.detail ? (
                <p className="text-sm leading-relaxed text-foreground-muted">{item.detail}</p>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
