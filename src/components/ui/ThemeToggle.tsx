import { motion, useReducedMotion } from "framer-motion";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/** Accessible theme switcher with icon micro-interactions. */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-canvas-elevated/55 text-foreground shadow-inner-soft backdrop-blur-md"
        disabled
        aria-hidden
      />
    );
  }

  const next = resolvedTheme === "dark" ? "light" : "dark";
  const label =
    resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <motion.button
      type="button"
      aria-label={label}
      aria-pressed={resolvedTheme === "dark"}
      onClick={() => setTheme(next)}
      whileTap={reduceMotion ? undefined : { scale: 0.94 }}
      whileHover={
        reduceMotion
          ? undefined
          : { scale: 1.04, boxShadow: "0 8px 32px hsl(var(--accent) / 0.18)" }
      }
      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-canvas-elevated/55 text-foreground shadow-inner-soft backdrop-blur-md transition-colors hover:border-accent/55 focus-visible:ring-2 focus-visible:ring-ring"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-[18px] w-[18px] text-accent transition group-hover:text-foreground" aria-hidden />
      ) : (
        <MoonStar className="h-[18px] w-[18px] text-accent transition group-hover:text-foreground" aria-hidden />
      )}
    </motion.button>
  );
}
