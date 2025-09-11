// src/content/sections/templates.ts

export type TemplateCard = {
  name: string;
  industry: string;   // filtro/categoría
  image?: string;
  url?: string;       // si no quieres “Ver demo”, déjalo vacío
  color?: string;     // badge (hex)
  features?: string[]; // se muestran máx. 3
};

const items: TemplateCard[] = [
  {
    name: "Landqo",
    industry: "Servicios",
    image: "/assets/templates/landqo-cover.png",
    color: "#6366F1",
    features: [
      "Diseño moderno y flexible",
      "Entrega rápida en días",
      "SEO técnico desde el inicio"
    ],
    url: "https://pages.velcodi.com",
  },
  {
    name: "Frevvo",
    industry: "SaaS",
    image: "/assets/templates/frevvo-cover.png",
    color: "#22C55E",
    features: [
      "Hero enfocado en captar leads",
      "Sección de planes y precios",
      "Analítica lista para medir"
    ],
    url: "https://conten.velcodi.com",
  },
  {
    name: "Tasqo",
    industry: "SaaS",
    image: "/assets/templates/tazqo-cover.png",
    color: "#A855F7",
    features: [
      "Beneficios claros y directos",
      "Componentes reusables",
      "CTA visible en todo momento"
    ],
    url: "https://tareas.velcodi.com",
  },
  {
    name: "Velcodi",
    industry: "Micrositio",
    image: "/assets/templates/velcodi-cover.png",
    color: "#0EA5E9",
    features: [
      "Estructura corporativa limpia",
      "Secciones informativas clave",
      "Accesibilidad cuidada"
    ],
    url: "https://velcodi.com",
  },
];

export default {
  id: "templates",
  title: "Plantillas reales",
  subtitle:
    "Estos proyectos ya están online y muestran cómo podemos lanzar tu landing con diseño profesional, dominio propio y todo listo para convertir.",
  ctaLabel: "Quiero una así",
  ctaHref: "#contacto",
  filters: ["Todos", "SaaS", "Servicios", "Micrositio"],
  items,
};
