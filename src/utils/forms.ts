// src/utils/forms.ts

/**
 * Helpers de formularios reutilizables
 * - Normaliza payloads (FormData → objeto)
 * - Validaciones mínimas de email / phone (+ normalización opcional)
 * - Honeypot configurable para bots
 * - Recolección de metadatos (UTM, referrer, page)
 * - POST con timeout y parseo robusto de respuesta
 */

export type Primitive = string | number | boolean | null;
export type FormValues = Record<string, Primitive | Primitive[]>;

export interface PostResult<T = unknown> {
  ok: boolean;
  status: number;
  json?: T;
  text?: string;
}

/* ──────────────────────────────────────────────────────────────────────────
 * FormData → Objeto
 * - Une múltiples valores por key en arrays (checkboxes, multi-select)
 * - Trimea strings y evita valores vacíos innecesarios
 * ------------------------------------------------------------------------ */

/**
 * Convierte un FormData a objeto plano. Si una key aparece varias veces,
 * el valor resultante será un array (mantiene orden de aparición).
 */
export function formDataToObject(fd: FormData): FormValues {
  const out: FormValues = {};
  for (const [rawKey, rawVal] of fd.entries()) {
    const key = String(rawKey).trim();
    const val = typeof rawVal === "string" ? rawVal.trim() : String(rawVal).trim();
    if (key in out) {
      const prev = out[key];
      if (Array.isArray(prev)) prev.push(val);
      else out[key] = [prev as Primitive, val];
    } else {
      out[key] = val;
    }
  }
  return out;
}

/* ──────────────────────────────────────────────────────────────────────────
 * Validaciones
 * ------------------------------------------------------------------------ */

/**
 * Valida si un string es un email razonable (sin ser demasiado restrictivo).
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false;
  const s = email.trim();
  // Simple y robusto; evita lookaheads costosos
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
}

/**
 * Normaliza teléfonos (elimina espacios, guiones, paréntesis).
 * Si `keepPlus` es true, preserva el '+' inicial para E.164-like.
 */
export function normalizePhone(phone: string, keepPlus = true): string {
  const t = (phone || "").trim();
  if (!t) return "";
  const plus = keepPlus && t.startsWith("+") ? "+" : "";
  return plus + t.replace(/[^\d]/g, "");
}

/**
 * Valida si un string parece un teléfono. Por defecto 6–15 dígitos.
 * Si `e164` es true, exige '+' seguido de 8–15 dígitos.
 */
export function isValidPhone(phone: string, opts?: { e164?: boolean }): boolean {
  const e164 = opts?.e164 ?? false;
  const s = normalizePhone(phone, true);
  if (e164) return /^\+\d{8,15}$/.test(s);
  // Acepta 6–15 dígitos, con o sin '+'
  return /^(\+)?\d{6,15}$/.test(s);
}

/* ──────────────────────────────────────────────────────────────────────────
 * Honeypot
 * ------------------------------------------------------------------------ */

/**
 * Chequea si se rellenó el honeypot (campo oculto para bots).
 */
export function isHoneypot(values: FormValues, field: string = "hp"): boolean {
  const v = values[field];
  if (Array.isArray(v)) return v.some(Boolean);
  return Boolean(v);
}

/* ──────────────────────────────────────────────────────────────────────────
 * Metadatos (UTM, referrer, page) + consentimiento
 * ------------------------------------------------------------------------ */

export interface MetaOptions {
  includeUTM?: boolean;            // default: true
  includeReferrer?: boolean;       // default: true
  includePage?: boolean;           // default: true
  includeConsent?: boolean;        // default: false (ej. "cookie:consent")
  consentKey?: string;             // default: "cookie:consent"
}

/**
 * Recolecta metadatos útiles para analytics/CRM:
 * - UTM de la URL
 * - Referrer (document.referrer)
 * - Page (location.href)
 * - Consentimiento almacenado (localStorage["cookie:consent"])
 */
export function collectMeta(opts?: MetaOptions): Record<string, string> {
  const {
    includeUTM = true,
    includeReferrer = true,
    includePage = true,
    includeConsent = false,
    consentKey = "cookie:consent",
  } = opts || {};

  const meta: Record<string, string> = {};

  try {
    if (includeUTM) {
      const p = new URLSearchParams(window.location.search);
      const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
      utmKeys.forEach((k) => {
        const v = p.get(k);
        if (v) meta[k] = v;
      });
    }
  } catch {
    /* noop */
  }

  try {
    if (includeReferrer) {
      if (document.referrer) meta.referrer = document.referrer;
    }
  } catch { /* noop */ }

  try {
    if (includePage) {
      meta.page = window.location.href;
    }
  } catch { /* noop */ }

  try {
    if (includeConsent) {
      const v = localStorage.getItem(consentKey);
      if (v) meta.consent = v; // "all" | "essentials" | ...
    }
  } catch { /* noop */ }

  return meta;
}

/* ──────────────────────────────────────────────────────────────────────────
 * POST con timeout y parseo seguro
 * ------------------------------------------------------------------------ */

export interface PostOptions {
  timeoutMs?: number;              // default: 10000
  headers?: Record<string, string>;
  withMeta?: boolean | MetaOptions;
}

/**
 * Envía datos de formulario a un endpoint vía fetch POST JSON.
 * - Soporta timeout con AbortController.
 * - Intenta parsear JSON; si no, devuelve body como text.
 */
export async function postForm<T = unknown>(
  url: string,
  values: FormValues,
  opts?: PostOptions
): Promise<PostResult<T>> {
  const timeoutMs = opts?.timeoutMs ?? 10000;

  // Adjunta metadatos opcionales
  const payload: Record<string, any> = { ...values };
  if (opts?.withMeta) {
    const meta = collectMeta(typeof opts.withMeta === "object" ? opts.withMeta : undefined);
    payload._meta = meta;
  }

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(opts?.headers || {}),
      },
      body: JSON.stringify(payload),
      signal: ctrl.signal,
    });
    clearTimeout(timer);

    const result: PostResult<T> = { ok: res.ok, status: res.status };

    // Intenta JSON primero, luego texto
    const ct = res.headers.get("content-type") || "";
    if (ct.includes("application/json")) {
      try {
        result.json = (await res.json()) as T;
      } catch {
        result.text = await res.text();
      }
    } else {
      result.text = await res.text();
      // Intento de parseo “best effort” si parece JSON
      if (result.text && result.text.trim().startsWith("{")) {
        try { result.json = JSON.parse(result.text) as T; } catch { /* noop */ }
      }
    }

    return result;
  } catch (err: any) {
    clearTimeout(timer);
    return {
      ok: false,
      status: err?.name === "AbortError" ? 408 : 0,
      text: String(err?.message || "Network error"),
    };
  }
}
