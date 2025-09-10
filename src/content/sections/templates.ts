// Templates — usa los 4 proyectos reales como “plantillas”
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
    features: ["Arquitectura modular", "Rendimiento alto", "SEO técnico listo"],
    url: "https://pages.velcodi.com",
  },
  {
    name: "Frevvo",
    industry: "SaaS",
    image: "/assets/templates/frevvo-cover.png",
    color: "#22C55E",
    features: ["Hero enfocado a conversión", "Sección de pricing", "Analítica configurada"],
    url: "https://conten.velcodi.com",
  },
  {
    name: "Tasqo",
    industry: "SaaS",
    image: "/assets/templates/tazqo-cover.png",
    color: "#A855F7",
    features: ["Beneficios claros", "Componentes reusables", "CTA persistente"],
    url: "https://tareas.velcodi.com",
  },
  {
    name: "Velcodi",
    industry: "Micrositio",
    image: "/assets/templates/velcodi-cover.png",
    color: "#0EA5E9",
    features: ["Estructura corporativa", "Secciones informativas", "Accesibilidad cuidada"],
    url: "https://velcodi.com", // si quieres apuntar afuera
  },
];

export default {
  id: "templates",
  title: "Plantillas",
  subtitle:
    "Ejemplos reales de cómo entregamos rápido, con diseño cuidado y base técnica sólida.",
  ctaLabel: "Elegir",
  ctaHref: "#cta",
  filters: ["Todos", "SaaS", "Servicios", "Micrositio"],
  items,
};
