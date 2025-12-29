// src/content/sections/templates.ts

export type TemplateCard = {
  name: string;
  industry: string;   // filtro/categoría
  image?: string;
  url?: string;       // si no quieres "Ver demo", déjalo vacío
  color?: string;     // badge (hex)
  features?: string[]; // se muestran máx. 3
};

const items: TemplateCard[] = [
  {
    name: "Salón Belleza",
    industry: "Beauty & Wellness",
    image: "/assets/templates/salon-cover.webp",
    color: "#EC4899", // Rosa salón
    features: [
      "Agenda de citas online",
      "Galería de trabajos",
      "Promociones destacadas"
    ],
    url: "https://salon.velcodi.com",
  },
  {
    name: "Gimnasio & Fitness",
    industry: "Fitness & Salud",
    image: "/assets/templates/fitness-cover.webp",
    color: "#10B981", // Verde salud
    features: [
      "Planes de membresía",
      "Horarios de clases",
      "Testimonios de clientes"
    ],
    url: "https://fitness.velcodi.com",
  },
  {
    name: "Restaurante & Menú",
    industry: "Gastronomía",
    image: "/assets/templates/menu-cover.webp",
    color: "#F59E0B", // Ámbar comida
    features: [
      "Menú digital interactivo",
      "Reservas online",
      "Promociones del día"
    ],
    url: "https://menu.velcodi.com",
  },
  {
    name: "Alojamiento Turístico",
    industry: "Turismo",
    image: "/assets/templates/aloja-cover.webp",
    color: "#3B82F6", // Azul viajes
    features: [
      "Galería de habitaciones",
      "Sistema de reservas",
      "Ubicación y atractivos"
    ],
    url: "https://aloja.velcodi.com",
  },
  {
    name: "Landqo",
    industry: "Servicios",
    image: "/assets/templates/landqo-cover.webp",
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
    image: "/assets/templates/frevvo-cover.webp",
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
    image: "/assets/templates/tazqo-cover.webp",
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
    image: "/assets/templates/velcodi-cover.webp",
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
  filters: ["Todos", "Beauty & Wellness", "Fitness & Salud", "Gastronomía", "Turismo", "SaaS", "Servicios", "Micrositio"],
  items,
};