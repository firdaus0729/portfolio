import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      layout
      className="group relative flex flex-col overflow-hidden rounded-[28px] border border-border/80 bg-gradient-to-b from-canvas-elevated/92 via-canvas-elevated to-canvas-elevated shadow-glass dark:from-canvas-elevated/28 dark:to-canvas/90"
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        reduceMotion
          ? undefined
          : { y: -6, rotateX: 2, rotateY: -3, translateZ: 10 }
      }
      style={{ transformPerspective: "1200px" }}
    >
      <div className="relative isolate aspect-[16/10] w-full overflow-hidden">
        <motion.div
          className="absolute inset-4 rounded-[26px] border border-white/44 bg-black/42 shadow-inner-soft dark:border-white/[0.12]"
          aria-hidden
        />
        <img
          src={project.image}
          alt={project.imageAlt}
          className="absolute inset-0 h-full w-full object-cover opacity-94 transition-all duration-[480ms] group-hover:scale-[1.04] group-hover:opacity-[1]"
          loading={index < 2 ? "eager" : "lazy"}
          decoding="async"
        />

        <div className="absolute inset-x-8 bottom-5 flex gap-4">
          <a
            href={project.liveUrl}
            aria-label={`Open ${project.title} live demo`}
            className={cn(
              "inline-flex items-center gap-1 rounded-full border border-accent/80 bg-accent px-3 py-[6px] text-[11px] font-semibold text-slate-950 shadow-xl backdrop-blur-md transition",
              "hover:translate-y-[1px] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            )}
            target="_blank"
            rel="noreferrer noopener"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            aria-label={`View ${project.title} on GitHub`}
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-[6px] text-[11px] font-semibold text-slate-900 shadow-xl transition hover:translate-y-[1px] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub <ArrowUpRight className="h-3 w-3" aria-hidden />
          </a>
        </div>

        {project.highlight ? (
          <div className="pointer-events-none absolute left-8 top-6 inline-flex rounded-full bg-white/92 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-800 shadow-xl dark:bg-black/74 dark:text-slate-100">
            Spotlight
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 px-6 pb-6 pt-4">
        <div className="flex items-start gap-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold tracking-tight md:text-xl">
              {project.title}
            </h3>
            {project.highlight ? (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {project.highlight}
              </p>
            ) : (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground-muted">
                Featured build
              </p>
            )}
          </div>
        </div>
        <p className="text-sm leading-relaxed text-foreground-muted md:text-[15px] md:leading-relaxed">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2 pt-1" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li key={tag}>
              <motion.span
                whileHover={
                  reduceMotion ? undefined : { translateY: -2, rotate: -2 }
                }
                className="relative inline-flex rounded-full border border-accent/55 bg-accent/10 px-[12px] py-[5px] text-[11px] font-semibold uppercase tracking-[0.12em] text-accent shadow-inner-soft"
              >
                {tag}
              </motion.span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
