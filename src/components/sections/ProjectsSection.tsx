import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectPortfolioGroup, projects } from "@/data/portfolio";
import { useMemo, useState } from "react";

const filters = [
  "All projects",
  "Product & business",
  "Interactive & visual",
] as const;

function matchesGroup(githubUrl: string, slugs: readonly string[]) {
  return slugs.some((slug) => githubUrl.includes(`/${slug}`));
}

export function ProjectsSection() {
  const reduceMotion = useReducedMotion();
  const [pending, setPending] = useState(false);

  const [active, setActive] = useState<(typeof filters)[number]>("All projects");

  const filtered = useMemo(() => {
    if (active === "All projects") return projects;

    switch (active) {
      case "Product & business":
        return projects.filter((p) =>
          matchesGroup(p.githubUrl, projectPortfolioGroup.product)
        );
      case "Interactive & visual":
        return projects.filter((p) =>
          matchesGroup(p.githubUrl, projectPortfolioGroup.interactive)
        );
      default:
        return projects;
    }
  }, [active]);

  return (
    <section id="projects" className="py-24 scroll-mt-24 sm:scroll-mt-28" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Selected launches"
            headingId="projects-heading"
            title="Featured projects that ship with narratives you can reuse."
            description="Each card snapshots product context, tooling, and tangible outcomes recruiters can skim in seconds."
            align="center"
          />
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {filters.map((label) => {
              const pressed = active === label;
              return (
                <motion.button
                  key={label}
                  type="button"
                  onClick={() => {
                    if (pressed) return;
                    setPending(true);
                    setActive(label);
                    window.requestAnimationFrame(() => {
                      window.setTimeout(() => setPending(false), reduceMotion ? 0 : 180);
                    });
                  }}
                  aria-pressed={pressed}
                  className={`relative overflow-hidden rounded-full border px-[18px] py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                    pressed
                      ? "border-accent bg-accent/15 text-foreground shadow-inner-soft"
                      : "border-border/85 text-foreground-muted hover:border-accent/45 hover:bg-canvas-elevated"
                  }`}
                  whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                >
                  {label}
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className={`relative transition-opacity ${pending ? "opacity-60" : "opacity-100"}`}>
          <AnimatePresence mode="popLayout">
            <motion.ul
              key={`${active}-${filtered.length}`}
              layout
              className="grid gap-10 md:grid-cols-2"
              aria-busy={pending}
            >
              {filtered.map((project, index) => (
                <motion.li key={`${project.title}-${active}`} layout>
                  <ProjectCard project={project} index={index} />
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>

          {!filtered.length ? (
            <p className="text-center text-sm text-foreground-muted">
              Nothing matches that lens yet — wire real tags inside `src/data/portfolio.ts`.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
