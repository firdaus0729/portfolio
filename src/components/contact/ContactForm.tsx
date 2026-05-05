import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { siteConfig } from "@/data/portfolio";
import { buildMailtoHref, openMailto } from "@/lib/mailto";

type FieldState = {
  name: string;
  email: string;
  message: string;
};

const initial: FieldState = { name: "", email: "", message: "" };

export function ContactForm() {
  const reduceMotion = useReducedMotion();
  const [values, setValues] = useState<FieldState>(initial);
  const [status, setStatus] = useState<"idle" | "opening-mail">("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const href = buildMailtoHref({
      to: siteConfig.email,
      subject: `Portfolio inquiry from ${values.name}`,
      body: [
        `Name: ${values.name}`,
        `Reply-to: ${values.email}`,
        "",
        values.message,
      ].join("\n"),
    });
    openMailto(href);
    setValues(initial);
    setStatus("opening-mail");
    window.setTimeout(() => setStatus("idle"), 8000);
  };

  return (
    <motion.form
      className="space-y-5 rounded-[28px] border border-border/80 bg-canvas-elevated/70 p-7 shadow-glass backdrop-blur-md dark:bg-canvas-elevated/25"
      onSubmit={onSubmit}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: reduceMotion ? 0 : 0.45 }}
      aria-describedby="contact-form-hint"
    >
      <p id="contact-form-hint" className="text-xs text-foreground-muted">
        Submitting opens your default mail app with this message addressed to{" "}
        <span className="font-medium text-foreground">{siteConfig.email}</span>. If nothing opens,
        check that a mail program is configured, or tap the email card on the left.
      </p>

      <div className="space-y-2">
        <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          className="w-full rounded-2xl border border-border/80 bg-canvas/80 px-4 py-3 text-sm text-foreground shadow-inner-soft outline-none transition focus:border-accent/70 focus:ring-2 focus:ring-ring dark:bg-canvas-muted/40"
          placeholder="Jordan Lee"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          className="w-full rounded-2xl border border-border/80 bg-canvas/80 px-4 py-3 text-sm text-foreground shadow-inner-soft outline-none transition focus:border-accent/70 focus:ring-2 focus:ring-ring dark:bg-canvas-muted/40"
          placeholder="you@domain.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
          Project details
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          className="w-full resize-y rounded-2xl border border-border/80 bg-canvas/80 px-4 py-3 text-sm text-foreground shadow-inner-soft outline-none transition focus:border-accent/70 focus:ring-2 focus:ring-ring dark:bg-canvas-muted/40"
          placeholder="Share goals, timelines, and links — I respond within two business days."
        />
      </div>

      <motion.button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-slate-950 shadow-glass transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      >
        <Send className="h-4 w-4" aria-hidden />
        Send message
      </motion.button>

      {status === "opening-mail" ? (
        <motion.p
          role="status"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-2xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-foreground"
        >
          <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden />
          Your mail app should open now. If it didn&apos;t, use the email address in the contact
          panel or your system mail settings.
        </motion.p>
      ) : null}
    </motion.form>
  );
}
