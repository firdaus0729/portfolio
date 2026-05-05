import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

type AppProvidersProps = {
  children: ReactNode;
};

/** persists active theme under `portfolio-theme` (localStorage) */
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      storageKey="portfolio-theme"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
