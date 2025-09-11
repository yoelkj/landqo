// src/utils/contact.ts
type CtaIntent = "contacto" | "contratar" | "ventas" | "catalogo";

const BRAND  = (import.meta.env.PUBLIC_BRAND_NAME || "Landqo").trim();
const EMAIL  = (import.meta.env.PUBLIC_CONTACT_EMAIL || "hola@landqo.com").trim();
const PHONE  = (import.meta.env.PUBLIC_CONTACT_PHONE || "").trim();

const RAW_WA  = (import.meta.env.PUBLIC_WHATSAPP_NUMBER || "").trim();     // "51999999999"
const WA_MSG0 = (import.meta.env.PUBLIC_WHATSAPP_MSG || "Hola, quiero más información").trim();

const digits = (s: string) => s.replace(/[^\d]/g, "");
const WA_NUM = digits(RAW_WA);
const HAS_WA = WA_NUM.length >= 8;

function buildMsg(opts?: {
  intent?: CtaIntent;
  plan?: string;     // "Starter" | "Pro" | "Empresa"
  source?: string;   // "navbar" | "hero" | "pricing" | "footer" ...
  extra?: string;    // cualquier apéndice libre
}) {
  const intent = opts?.intent || "contacto";
  const lines: string[] = [];

  // Línea 1 (siempre)
  lines.push(WA_MSG0);

  // Línea 2: contexto
  if (intent === "ventas")     lines.push("Me gustaría hablar con ventas.");
  if (intent === "contratar")  lines.push("Quiero avanzar con la contratación.");
  if (intent === "catalogo")   lines.push("¿Pueden enviarme el catálogo de plantillas?");

  // Línea 3: plan (si aplica)
  if (opts?.plan) lines.push(`Plan de interés: ${opts.plan}`);

  // Línea 4: fuente
  if (opts?.source) lines.push(`Origen: ${BRAND} · ${opts.source}`);

  // Línea 5: extra libre
  if (opts?.extra) lines.push(opts.extra);

  return lines.join("\n");
}

function waUrl(msg?: string) {
  const text = msg?.trim() || WA_MSG0;
  return `https://wa.me/${WA_NUM}?text=${encodeURIComponent(text)}`;
}

/** Devuelve el mejor href posible para un CTA.
 *  Si hay WhatsApp configurado → link directo a WA. Si no → #cta.
 */
function ctaHref(opts?: { intent?: CtaIntent; plan?: string; source?: string; extra?: string; fallback?: string }) {
  const fallback = opts?.fallback || "#cta";
  if (!HAS_WA) return fallback;
  return waUrl(buildMsg(opts));
}

/** Detecta si un URL apunta a WhatsApp (wa.me o api.whatsapp.com). */
function isWhatsUrl(url: string) {
  try {
    const u = new URL(url);
    const h = u.hostname.replace(/^www\./, "");
    return h === "wa.me" || h === "api.whatsapp.com";
  } catch {
    return false;
  }
}

/** Retorna attrs listos para un <a>: href y (si aplica) target=_blank + rel. */
function ctaLink(opts?: { intent?: CtaIntent; plan?: string; source?: string; extra?: string; fallback?: string }) {
  const href = ctaHref(opts);
  const isWhats = isWhatsUrl(href);
  return {
    href,
    isWhats,
    ...(isWhats ? { target: "_blank" as const, rel: "noopener noreferrer" as const } : {}),
  };
}

export const CONTACT = {
  brand: BRAND,
  email: EMAIL,
  tel: PHONE,
  waNumber: WA_NUM,
  hasWhatsApp: HAS_WA,
  waDefaultMsg: WA_MSG0,
  waUrl,
  buildMsg,
  ctaHref,
  ctaLink,
  isWhatsUrl,
};
export type { CtaIntent };
