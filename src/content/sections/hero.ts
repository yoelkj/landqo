export default {
  align: "left",

  title: "Landing profesional lista en días\ncon o sin hosting y dominio",
  subtitle:
    "Diseñamos, desarrollamos y publicamos tu landing enfocada en conversión. Puedes usar un subdominio de Velcodi o tu propio dominio en nuestro servidor. Incluye SEO técnico, analítica y velocidad 95+ en Lighthouse.",

  // CTA principal: captar lead (WhatsApp en el componente); secundaria: ir a precios
  ctaPrimary: { label: "Solicitar propuesta", href: "#contacto" },
  ctaSecondary: { label: "Ver planes y precios", href: "#pricingOnePay" }, // <— corregido

  badges: [
    { text: "Entrega en días", icon: "rocket" },
    { text: "Hosting + SSL incluidos", icon: "shield" },
    { text: "SEO técnico listo", icon: "zap" },
  ],

  mediaList: [
    // (Opcional) mockups
    // { src: "/assets/phones/left.svg",   alt: "Vista móvil izquierda" },
    // { src: "/assets/phones/center.svg", alt: "Vista móvil central"   },
    // { src: "/assets/phones/right.svg",  alt: "Vista móvil derecha"   }
  ],

  messages: [
    { text: "Dominio conectado", dot: "blue" },
    { text: "SSL activo", dot: "green" },
    { text: "Formularios a WhatsApp", dot: "yellow" },
    { text: "Analytics instalado", dot: "green" },
    { text: "SEO on-page aplicado", dot: "blue" },
    { text: "Píxel Meta/Ads listo", dot: "green" },
    { text: "A/B test preparado", dot: "blue" },
    { text: "Sitio publicado", dot: "green" },
  ],
};
