// src/utils/seo.ts
export type SEOInput = {
  title?: string;
  description?: string;
  image?: string;               // og:image (absoluto o relativo)
  imageAlt?: string;            // alt og/twitter
  type?: "website" | "article";
  noindex?: boolean;
  lang?: string;
  alternates?: Array<{ href: string; hreflang: string }>;
  canonical?: string;
  schema?: Record<string, any>;
  siteName?: string;            // override
};

type MetaTag =
  | { name: string; content: string }
  | { property: string; content: string }
  | { "http-equiv": string; content: string };

type LinkTag =
  | { rel: "canonical"; href: string }
  | { rel: "alternate"; href: string; hrefLang: string };

type ScriptTag = { type: "application/ld+json"; innerHTML: string };

// ── ENV (con defaults sensatos)
const ENV = {
  SITE_URL: (import.meta.env.PUBLIC_SITE_URL || "").trim(),          // ej. https://pages.velcodi.com
  BRAND: (import.meta.env.PUBLIC_BRAND_NAME || "Landqo").trim(),
  DEFAULT_LANG: (import.meta.env.PUBLIC_DEFAULT_LANG || "es").trim(),
  INDEXING: String(import.meta.env.PUBLIC_INDEXING ?? "true").toLowerCase() !== "false",
};

// ── Defaults “brand safe”
const DEFAULT_TITLE = "Tu landing lista en días, no en semanas.";
const DEFAULT_DESC =
  "Creamos landings enfocadas en conversión: copy claro, SEO técnico, velocidad y analítica listas desde el día uno.";
const DEFAULT_OG = "/assets/icons/og-landqo.png";

function stripTracking(u: URL) {
  const noisy = ["utm_source","utm_medium","utm_campaign","utm_term","utm_content","gclid","fbclid","_hsmi","_hsenc","ref"];
  noisy.forEach(k => u.searchParams.delete(k));
  return u;
}

export function absoluteUrl(pathOrUrl: string, site?: URL) {
  try {
    if (!site) return pathOrUrl;
    return new URL(pathOrUrl, site).toString();
  } catch { return pathOrUrl; }
}

export function buildSeo(input: SEOInput, ctx: { site?: URL; url?: URL }) {
  // Preferir PUBLIC_SITE_URL si viene en .env
  const site = ENV.SITE_URL ? new URL(ENV.SITE_URL) : ctx.site;
  const url  = ctx.url;

  const title = input.title ?? DEFAULT_TITLE;
  const description = input.description ?? DEFAULT_DESC;
  const type = input.type ?? "website";
  const siteName = input.siteName ?? ENV.BRAND;

  // Honrar noindex si PUBLIC_INDEXING=false
  const noindexEnv = !ENV.INDEXING;
  const effectiveNoindex = noindexEnv || Boolean(input.noindex);

  // Canonical robusto (sin UTM)
  let canonical: string | undefined;
  if (input.canonical) {
    canonical = site ? absoluteUrl(input.canonical, site) : input.canonical;
  } else if (site && url) {
    canonical = stripTracking(new URL(url.pathname + url.search, site)).toString();
  }

  // OG image absoluta
  const ogImage = site
    ? absoluteUrl(input.image ?? DEFAULT_OG, site)
    : (input.image ?? DEFAULT_OG);
  const imageAlt = input.imageAlt ?? title;

  const meta: MetaTag[] = [
    { name: "description", content: description },
    { name: "robots", content: effectiveNoindex ? "noindex, nofollow" : "index, follow" },

    { property: "og:site_name", content: siteName },
    { property: "og:type", content: type },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    { property: "og:image:alt", content: imageAlt },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
    { name: "twitter:image:alt", content: imageAlt },

    // se complementa en BaseLayout con variantes por media
    { name: "theme-color", content: "#ffffff" },
  ];
  if (canonical) meta.push({ property: "og:url", content: canonical });
  if (input.lang ?? ENV.DEFAULT_LANG) {
    meta.push({ "http-equiv": "content-language", content: (input.lang ?? ENV.DEFAULT_LANG) });
  }

  const link: LinkTag[] = [];
  if (canonical) link.push({ rel: "canonical", href: canonical });
  (input.alternates ?? []).forEach((a) =>
    link.push({ rel: "alternate", hrefLang: a.hreflang, href: a.href })
  );

  const script: ScriptTag[] = input.schema
    ? [{ type: "application/ld+json", innerHTML: JSON.stringify(input.schema) }]
    : [];

  return { title, tags: { meta, link, script } };
}
