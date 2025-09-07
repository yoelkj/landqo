import type { APIRoute } from "astro";

/**
 * Sitemap estático y tipado.
 * - Usa astro.config.site si está; si no, PUBLIC_SITE_URL.
 * - Respeta PUBLIC_INDEXING=false (útil para previews): devuelve urlset vacío.
 * - Incluye <lastmod>, <changefreq> y <priority>.
 * - EXCLUYE /legales/*, /gracias/ y 404 por defecto.
 */

type ChangeFreq =
  | "always" | "hourly" | "daily" | "weekly"
  | "monthly" | "yearly" | "never";

type Entry = {
  path: string;           // Debe empezar con "/" (usa trailing slash si tu routing lo hace)
  changefreq?: ChangeFreq;
  priority?: number;      // 0.0 – 1.0
  lastmod?: string;       // ISO string; si no se da, se usa la fecha actual
};

// ✅ SOLO páginas indexables aquí
const PAGES: Entry[] = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
];

function absoluteURL(path: string, base: URL): string {
  return new URL(path, base).toString();
}

function xmlEscape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const GET: APIRoute = ({ site }) => {
  // Sitemap vacío en previews/staging si PUBLIC_INDEXING="false"
  const allowIndex = import.meta.env.PROD && import.meta.env.PUBLIC_INDEXING !== "false";

  // Base URL: astro.config.site > PUBLIC_SITE_URL > localhost
  const envBase = (import.meta.env.PUBLIC_SITE_URL || "http://localhost:4321")
    .replace(/\/+$/, "") + "/";
  const base = site ?? new URL(envBase);

  const nowISO = new Date().toISOString();

  const urls = allowIndex
    ? PAGES.map((e) => {
        const loc = absoluteURL(e.path, base);
        const lastmod = e.lastmod ?? nowISO;
        const changefreq = e.changefreq ?? "weekly";
        const priority = e.priority ?? 0.5;

        return [
          "  <url>",
          `    <loc>${xmlEscape(loc)}</loc>`,
          `    <lastmod>${xmlEscape(lastmod)}</lastmod>`,
          `    <changefreq>${changefreq}</changefreq>`,
          `    <priority>${priority.toFixed(1)}</priority>`,
          "  </url>",
        ].join("\n");
      }).join("\n")
    : ""; // sitemap vacío si no permitimos indexación

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
