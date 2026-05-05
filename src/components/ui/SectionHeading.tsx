import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  /** Optional id linking `aria-labelledby` from parent sections */
  headingId?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  headingId,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-2xl space-y-3",
        align === "center" && "text-center",
        align === "center" && description && "mx-auto max-w-3xl",
        className
      )}
    >
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={headingId} className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base text-foreground-muted md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
