// Pago único año completo – sin devolución, sin sorpresas
export default {
    id: "pricingOnePay",
    offers: true,
    title: "Todo resuelto por un año",
    subtitle: "Pago único · IGV incluido · Dominio y hosting 12 meses regalados",
    variant: "yearly-only",
    currency: "PEN",
    locale: "es-PE",
    defaultBilling: "yearly",
    discountNote: null,
    igvNote: "IGV incluido. No hay sorpresas.",
    valueSummary:
        "Entrega garantizada en 5 días hábiles. Revisamos contigo cada paso para que tu web quede exactamente como necesitas.",
    promoNote:
        "Oferta lanzamiento 2025: quedan 7 lugares con 30 % de descuento.",
    cols: 3,
    plans: [
        {
            name: "Express",
            description: "Landing que ya convierte. Publicada en 48 h.",
            badge: "Sin cuotas mensuales",
            popular: true,
            price: 590,
            features: [
                "Dominio .pe o .com 1 año incluido",
                "5 secciones + copy por rubro",
                "Formulario + WhatsApp + pixel",
                "SSL, CDN, backups 1 año",
                "1 artículo blog mes 6 sin costo",
                "Reporte de tráfico mes 6 y 12",
                "Soporte 12h por email",
            ],
            cta: {
                label: "Pagar año completo",
                href: "https://pay.velcodi.com/checkout?plan=express-1pay&billing=yearly"
            }
        },
        {
            name: "Full",
            description: "Sitio multi-página con blog y capacitación.",
            badge: null,
            popular: false,
            price: 990,
            features: [
                "Todo en Express +",
                "Hasta 10 páginas y blog CMS",
                "SEO técnico + Analytics/Pixel",
                "1 artículo blog escrito por nosotros cada mes",
                "1 h de cambios menores/mes incluida",
                "Soporte 24h + videollamada capacitación",
            ],
            cta: {
                label: "Pagar año completo",
                href: "https://pay.velcodi.com/checkout?plan=full-1pay&billing=yearly"
            }
        },
        {
            name: "Scale",
            description: "Solución a medida con SLA y optimización continua.",
            badge: null,
            popular: false,
            price: 1690,
            features: [
                "Todo en Full +",
                "Páginas ilimitadas y staging",
                "CRM, APIs y A/B testing mensual",
                "Revisión de tráfico + plan de mejora escrito cada mes",
                "SLA 99.9 % uptime",
                "Soporte Slack/WhatsApp < 2h",
            ],
            cta: {
                label: "Pagar año completo",
                href: "https://pay.velcodi.com/checkout?plan=scale-1pay&billing=yearly"
            }
        }
    ],
    footnotes: [
        "Al año 2 eliges: seguir por S/249/año (hosting + dominio + SSL) o descargar tu web y usarla donde quieras sin penalidad.",
        "Entrega en 5 días hábiles desde que nos envíes textos e imágenes.",
    ],
};