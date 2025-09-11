// Contenido para Pricing.astro — ofertas activables y copys más amables
export default {
  id: "pricing",
  offers: true,
  title: "Precios claros",
  subtitle:
    "Implementación única y hosting gestionado por nuestro equipo. Descuento por lanzamiento.",
  variant: "default",
  currency: "PEN",
  locale: "es-PE",
  defaultBilling: "monthly",
  discountNote: "2 meses gratis con pago anual",
  igvNote: "Los precios no incluyen IGV (18%).",

  // Mensaje de valor (debajo de las cards)
  valueSummary:
    "No competimos con plantillas autogestionables baratas. Ofrecemos un servicio llave en mano: diseño y copy a medida, SEO técnico, velocidad alta, hosting gestionado y soporte real. La oferta baja la barrera de entrada sin devaluar el valor.",

  // Nota promocional (debajo de las cards)
  promoNote:
    "Oferta de lanzamiento 2025: válida para contrataciones hasta el 31 de octubre.",

  cols: 3,
  plans: [
    {
      name: "Starter",
      description:
        "Lanza en días en un subdominio Velcodi: perfecto para validar sin trámites.",
      badge: "Oferta",
      popular: false,
      setupFromBefore: 690,
      setupFrom: 490,
      priceBefore: { monthly: 79, yearly: 790 },
      price: { monthly: 59, yearly: 590 },
      features: [
        "Publicado en subdominio Velcodi (listo para compartir)",
        "Sección de contacto con email/WhatsApp integrados",
        "SSL y pequeñas actualizaciones incluidas",
        "SEO y analítica básica desde el día uno",
        "Opción de dominio propio (se cotiza aparte)",
      ],
      cta: { label: "Empezar con Starter", href: "#contacto" },
    },
    {
      name: "Pro",
      description:
        "Para marcas que quieren escalar: dominio propio, más secciones y soporte prioritario.",
      badge: "Popular",
      popular: true,
      setupFromBefore: 1690,
      setupFrom: 1290,
      priceBefore: { monthly: 129, yearly: 1290 },
      price: { monthly: 109, yearly: 1090 },
      features: [
        "Dominio propio con SSL gestionado",
        "Hasta 8 secciones clave (beneficios, casos, FAQ, etc.)",
        "Instalación de píxeles y conversiones (Meta/Ads)",
        "Backups y soporte prioritario 24–48 h",
      ],
      cta: { label: "Elegir Pro", href: "#contacto" },
    },
    {
      name: "Empresa",
      description:
        "A medida para requisitos avanzados y equipos exigentes.",
      badge: "Oferta",
      popular: false,
      setupFromBefore: 3490,
      setupFrom: 2490,
      priceBefore: { monthly: 199, yearly: 1990 },
      price: { monthly: 159, yearly: 1590 },
      features: [
        "Dominio propio y subdominios según tus iniciativas",
        "DNS avanzada y certificados SSL administrados",
        "Secciones ilimitadas y componentes a medida",
        "SLA, entornos de staging y pruebas A/B",
      ],
      cta: { label: "Hablar con ventas", href: "#contacto" },
    },
  ],

  footnotes: [
    "Starter se publica en un subdominio de Velcodi. Si deseas dominio propio, la compra y configuración se cotizan por separado.",
    "En Pro y Empresa configuramos tu dominio propio y SSL. La compra/renovación del dominio se paga directamente al registrador que elijas.",
    "La migración desde otro hosting o CMS se cotiza por separado.",
    "Tiempos de soporte: 24–48 h hábiles.",
  ],
};
