import { Route, Routes } from "react-router-dom";

import { AppProviders } from "@/providers";
import { DocumentHead } from "@/seo/DocumentHead";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <AppProviders>
      <DocumentHead />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-canvas-elevated focus:px-4 focus:py-2 focus:text-sm focus:shadow-glass"
      >
        Skip to main content
      </a>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppProviders>
  );
}
