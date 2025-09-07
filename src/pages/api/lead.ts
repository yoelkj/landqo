import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const ct = request.headers.get("content-type") || "";
    let data: Record<string, any> = {};

    if (ct.includes("application/json")) {
      data = await request.json();
    } else if (ct.includes("application/x-www-form-urlencoded")) {
      const fd = await request.formData();
      fd.forEach((v, k) => (data[k] = String(v)));
    } else {
      return new Response(JSON.stringify({ ok: false, error: "Unsupported content-type" }), {
        status: 415, headers: { "content-type": "application/json; charset=utf-8" },
      });
    }

    // Honeypot: 'hp'
    if ((String(data.hp || "")).trim() !== "") {
      return new Response(JSON.stringify({ ok: true, skipped: true }), {
        status: 200, headers: { "content-type": "application/json; charset=utf-8" },
      });
    }

    const name = (data.name || "").trim();
    const email = (data.email || "").trim();
    const message = (data.message || "").trim();
    const consent = String(data.consent || "") === "true"; // boolean normalizado

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: "Missing fields" }), {
        status: 400, headers: { "content-type": "application/json; charset=utf-8" },
      });
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    if (!emailOk) {
      return new Response(JSON.stringify({ ok: false, error: "Invalid email" }), {
        status: 400, headers: { "content-type": "application/json; charset=utf-8" },
      });
    }

    // _meta opcional del cliente (UTM, referrer, page, consent…)
    const meta = typeof data._meta === "object" ? data._meta : undefined;

    // Aquí: enviar a CRM/DB/proveedor externo si aplica.
    const id = Math.random().toString(36).slice(2);

    return new Response(JSON.stringify({ ok: true, id, meta, consent }), {
      status: 200, headers: { "content-type": "application/json; charset=utf-8" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), {
      status: 500, headers: { "content-type": "application/json; charset=utf-8" },
    });
  }
};
