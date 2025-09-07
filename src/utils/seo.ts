// src/utils/seo.ts
export type SEOInput = {
  title?: string;
  description?: string;
  image?: string;               // og:image, absoluto o relativo
  type?: "website" | "article";
  noindex?: boolean;
  lang?: string;                // p.ej. "es"
  alternates?: Array<{ href: string; hreflang: string }>;
  canonical?: string;           // si quieres forzar
  schema?: Record<string, any>; // JSON-LD opcional
};

type MetaTag =
  | { name: string; content: string }
  | { property: string; content: string }
  | { "http-equiv": string; content: string };

type LinkTag =
  | { rel: "canonical"; href: string }
  | { rel: "alternate"; href: string; hrefLang: string };

type ScriptTag = { type: "application/ld+json"; innerHTML: string };

const SITE_NAME = "Ultra Landing";
const DEFAULT_TITLE = "Construye landings ultra-rápidas";
const DEFAULT_DESC  = "Boilerplate profesional con Astro + Tailwind.";
const DEFAULT_OG    = "/assets/og-hero.png";

export function absoluteUrl(pathOrUrl: string, site: URL) {
  try {
    return new URL(pathOrUrl, site).toString();
  } catch {
    return pathOrUrl;
  }
}

export function buildSeo(input: SEOInput, ctx: { site?: URL; url?: URL }) {
  const { site, url } = ctx;
  const title = input.title ?? DEFAULT_TITLE;
  const description = input.description ?? DEFAULT_DESC;
  const type = input.type ?? "website";

  const canonical =
    input.canonical ?? (url && site ? new URL(url.pathname, site).toString() : undefined);

  const ogImage = site
    ? absoluteUrl(input.image ?? DEFAULT_OG, site)
    : (input.image ?? DEFAULT_OG);

  // META
  const meta: MetaTag[] = [
    { name: "description", content: description },
    { name: "robots", content: input.noindex ? "noindex, nofollow" : "index, follow" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:type", content: type },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
    { name: "theme-color", content: "hsl(var(--neutral-0, 0 0% 100%))" },
  ];
  if (canonical) meta.push({ property: "og:url", content: canonical });
  if (input.lang) meta.push({ "http-equiv": "content-language", content: input.lang });

  // LINK
  const link: LinkTag[] = [];
  if (canonical) link.push({ rel: "canonical", href: canonical });
  (input.alternates ?? []).forEach((a) =>
    link.push({ rel: "alternate", hrefLang: a.hreflang, href: a.href })
  );

  // SCRIPT (JSON-LD)
  const script: ScriptTag[] = input.schema
    ? [{ type: "application/ld+json", innerHTML: JSON.stringify(input.schema) }]
    : [];

  return {
    title,
    tags: { meta, link, script },
  };
}
