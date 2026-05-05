import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import RouteShell from "@/shell/RouteShell";

export default function NotFoundPage() {
  return (
    <RouteShell>
      <div className="flex min-h-dvh flex-col items-center justify-center bg-canvas px-6 py-24 text-center">
        <p className="font-mono text-sm text-foreground-muted" aria-hidden>
          404
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          This page wandered off the happy path.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-foreground-muted">
          The route you requested does not exist. Head back home to explore the portfolio.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-[hsl(222_24%_8%)] shadow-glass transition hover:brightness-110 focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back home
        </Link>
      </div>
    </RouteShell>
  );
}
