import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Mirrors the former `app/template.tsx` fade for SPA route changes. */
export default function RouteShell({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
