// Tipado básico opcional
export type TemplateCard = {
  id: string;
  name: string;
  industry: "SaaS" | "Educación" | "E-commerce" | "Servicios" | "Evento" | "Salud";
  color?: string;              // badge opcional
  image: string;               // ruta pública /images/templates/...
  url?: string;                // demo en vivo (opcional)
  figma?: string;              // link figma (opcional)
  features: string[];          // bullets
  tags?: string[];             // search/etiquetas opcionales
};

const templates: TemplateCard[] = [
  {
    id: "saas-ignite",
    name: "SaaS Ignite",
    industry: "SaaS",
    color: "#5865F2",
    image: "/images/templates/saas-ignite.webp",
    url: "/demos/saas-ignite/",
    features: ["Hero con prueba gratis", "Testimonios", "Precios", "FAQ"],
    tags: ["trial", "pricing", "stripe"],
  },
  {
    id: "curso-pro",
    name: "Curso Pro",
    industry: "Educación",
    color: "#F59E0B",
    image: "/images/templates/curso-pro.webp",
    url: "/demos/curso-pro/",
    features: ["Agenda/temario", "Instructor", "Checkout", "FAQ"],
    tags: ["webinar", "checkout"],
  },
  {
    id: "shop-launch",
    name: "Shop Launch",
    industry: "E-commerce",
    color: "#10B981",
    image: "/images/templates/shop-launch.webp",
    url: "/demos/shop-launch/",
    features: ["Grid de productos", "Highlights", "CTA WhatsApp/Checkout"],
    tags: ["catalogo", "whatsapp"],
  },
  {
    id: "servicios-elite",
    name: "Servicios Élite",
    industry: "Servicios",
    color: "#8B5CF6",
    image: "/images/templates/servicios-elite.webp",
    url: "/demos/servicios-elite/",
    features: ["Problema→Solución", "Casos", "Formulario"],
    tags: ["agencia", "b2b"],
  },
  {
    id: "evento-summit",
    name: "Evento Summit",
    industry: "Evento",
    color: "#EC4899",
    image: "/images/templates/evento-summit.webp",
    url: "/demos/evento-summit/",
    features: ["Ponentes", "Agenda", "Registro", "Patrocinadores"],
    tags: ["ticket", "agenda"],
  },
  {
    id: "clinica-fit",
    name: "Clínica Fit",
    industry: "Salud",
    color: "#0EA5E9",
    image: "/images/templates/clinica-fit.webp",
    url: "/demos/clinica-fit/",
    features: ["Servicios", "Reseñas", "Agenda cita"],
    tags: ["salud", "reservas"],
  },
];

const filters = ["Todos", "SaaS", "Educación", "E-commerce", "Servicios", "Evento", "Salud"];

const templatesSection = {
  id: "templates",
  title: "Plantillas listas para convertir",
  subtitle:
    "Elige un punto de partida optimizado y lo adaptamos a tu marca, contenido y objetivos.",
  ctaLabel: "Quiero esta plantilla",
  ctaHref: "#cta",
  filters,
  items: templates,
};

export default templatesSection;
