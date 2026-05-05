import { useEffect } from "react";

import { siteConfig } from "@/data/portfolio";

function setMeta(kv: { name?: string; property?: string; content: string }) {
  const key = kv.name ? "name" : "property";
  const val = kv.name ?? kv.property;
  if (!val) return;
  let el = document.querySelector(`meta[${key}="${val.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(key, val);
    document.head.appendChild(el);
  }
  el.setAttribute("content", kv.content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/** SPA-friendly baseline meta synced from `siteConfig`. */
export function DocumentHead() {
  useEffect(() => {
    const siteUrl = siteConfig.url.replace(/\/$/, "");
    const title = `${siteConfig.name} — ${siteConfig.title}`;
    const description = siteConfig.tagline;

    document.title = title;

    setMeta({ name: "description", content: description });
    setCanonical(siteUrl);

    setMeta({ property: "og:type", content: "website" });
    setMeta({ property: "og:locale", content: siteConfig.locale });
    setMeta({ property: "og:url", content: siteUrl });
    setMeta({ property: "og:site_name", content: `${siteConfig.name} · Portfolio` });
    setMeta({ property: "og:title", content: title });
    setMeta({ property: "og:description", content: description });

    setMeta({ name: "twitter:card", content: "summary_large_image" });
    setMeta({ name: "twitter:title", content: title });
    setMeta({ name: "twitter:description", content: description });
    setMeta({ name: "twitter:creator", content: siteConfig.twitterHandle });
  }, []);

  return null;
}
