import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site, request }) => {
  // Permite indexar solo en prod y cuando PUBLIC_INDEXING != "false"
  const allowIndex = import.meta.env.PROD && import.meta.env.PUBLIC_INDEXING !== "false";

  // Base origin: astro.config.site > PUBLIC_SITE_URL > request.origin
  const envOrigin = (import.meta.env.PUBLIC_SITE_URL || "").replace(/\/+$/, "");
  const origin =
    (site ? String(site).replace(/\/+$/, "") : "") ||
    envOrigin ||
    new URL(request.url).origin.replace(/\/+$/, "");

  const lines = allowIndex
    ? [
        "User-agent: *",
        "Allow: /",
        "",
        `Sitemap: ${origin}/sitemap.xml`,
        "",
      ]
    : [
        "User-agent: *",
        "Disallow: /",
        "",
      ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
