// pricing-pages-velcodi.ts
// Conserva toggle mensual/anual + descuentos + justifica mensualidad
export default {
  id: "pricing",
  offers: true,
  title: "Precios transparentes",
  subtitle:
    "Diseño profesional, copy persuasivo y hosting gestionado. Listo para vender desde el día uno.",
  variant: "default",
  currency: "PEN",
  locale: "es-PE",
  defaultBilling: "monthly",
  discountNote: "2 meses gratis con pago anual",
  igvNote: "Precios sin IGV (18%). Pago anual desde S/890.",

  valueSummary:
    "Cada mes recibes valor real: reportes, contenido o cambios. Cancelas cuando quieras sin penalidad.",

  promoNote:
    "Oferta de lanzamiento: 30 % de descuento en setup hasta marzo 2025. Cupos limitados.",

  cols: 3,
  plans: [
    {
      name: "Landing Express",
      description:
        "Una página potente para validar tu idea, captar leads o promocionar un lanzamiento.",
      badge: "Más vendido",
      popular: true,
      setupFromBefore: 990,
      setupFrom: 690,
      priceBefore: { monthly: 99, yearly: 990 },
      price: { monthly: 79, yearly: 790 },
      features: [
        "Dominio propio incluido el primer año (.pe o .com)",
        "5 secciones estratégicas (hero, beneficios, testimonios, CTA, contacto)",
        "Copywriting optimizado para conversión",
        "Formulario con autorespuesta y notificaciones WhatsApp",
        "SSL, hosting rápido y backups automáticos",
        "1 ronda de ajustes después del lanzamiento",
        "Actualización de copy o imágenes (1 vez al mes sin costo)",
        "Reporte mensual de visitas, clics en botones y formularios completados",
        "Soporte por email 12h hábiles",
      ],
      cta: { label: "Lanzar mi landing", href: "#contacto" },
      comparison: "vs. Wix Pro (S/89/mes sin diseño ni copy)",
    },
    {
      name: "Sitio Completo",
      description:
        "Para negocios que necesitan presencia profesional: múltiples páginas, blog y estrategia clara.",
      badge: "Popular",
      popular: false,
      setupFromBefore: 1990,
      setupFrom: 1390,
      priceBefore: { monthly: 149, yearly: 1490 },
      price: { monthly: 119, yearly: 1190 },
      features: [
        "Todo en Landing Express +",
        "Hasta 10 páginas (servicios, nosotros, casos, blog, etc.)",
        "Blog con sistema de gestión fácil (actualizas tú mismo)",
        "Integraciones: Google Analytics, Meta Pixel, Tag Manager",
        "SEO on-page completo (títulos, descripciones, schema markup)",
        "2 rondas de ajustes post-lanzamiento",
        "1 artículo de blog escrito por nosotros cada mes",
        "1 hora de cambios menores incluida al mes (textos, fotos, colores)",
        "Actualización de plugins y parches de seguridad semanal",
        "Soporte prioritario 24h hábiles + videollamada de capacitación",
      ],
      cta: { label: "Quiero mi sitio completo", href: "#contacto" },
      comparison: "vs. agencias (S/3 000-5 000 y 2 meses de espera)",
    },
    {
      name: "Crecimiento",
      description:
        "Para empresas que escalan: integraciones avanzadas, optimización continua y soporte VIP.",
      badge: null,
      popular: false,
      setupFromBefore: 3490,
      setupFrom: 2490,
      priceBefore: { monthly: 249, yearly: 2490 },
      price: { monthly: 199, yearly: 1990 },
      features: [
        "Todo en Sitio Completo +",
        "Páginas ilimitadas y arquitectura a medida",
        "Integraciones con CRM/ERP (HubSpot, Zoho, APIs custom)",
        "Entorno de staging para probar antes de publicar",
        "A/B testing y optimización basada en data",
        "1 campaña A/B nueva activada cada mes",
        "Revisión mensual de tráfico + recomendaciones de mejora que puedes aplicar",
        "Dashboard de conversiones en tiempo real",
        "SLA 99.9 % uptime con monitoreo 24/7",
        "Soporte por Slack/WhatsApp + consultoría mensual de 1 h",
      ],
      cta: { label: "Agendar demo", href: "#contacto" },
      comparison: "vs. Shopify Advanced (US$299/mes sin diseño)",
    },
  ],

  footnotes: [
    "Landing Express incluye dominio (.pe o .com) gratis el primer año. Renovación desde S/45/año según TLD.",
    "El pago mensual no tiene permanencia mínima. Puedes cancelar cuando quieras sin penalización.",
    "Migraciones desde WordPress, Wix o Shopify: cotización gratuita según complejidad.",
    "Todos los planes incluyen: certificado SSL, CDN global, copias de seguridad diarias y actualizaciones de seguridad.",
    "Tiempos de respuesta: 12h hábiles (Landing), 24h (Sitio Completo), 2h (Crecimiento).",
  ],
};