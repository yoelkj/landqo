// Contenido para Pricing.astro — coincide 1:1 con las props del componente
export default {
  id: "pricing",
  title: "Precios claros",
  subtitle: "Elige el plan que mejor encaje y cambia cuando quieras.",
  variant: "default",
  currency: "USD",
  locale: "es-PE",
  defaultBilling: "monthly",
  discountNote: "Ahorra 20% con anual",
  cols: 3,
  plans: [
    {
      name: "Starter",
      description: "Para validar tu idea.",
      badge: "",
      popular: false,
      price: { monthly: 19, yearly: 190 },
      features: [
        "1 proyecto",
        "Soporte por email",
        "Actualizaciones básicas"
      ],
      cta: { label: "Empezar", href: "#cta" }
    },
    {
      name: "Pro",
      description: "Para equipos creciendo.",
      badge: "Popular",
      popular: true,
      price: { monthly: 39, yearly: 390 },
      features: [
        "Proyectos ilimitados",
        "Soporte prioritario",
        "Integraciones"
      ],
      cta: { label: "Elegir Pro", href: "#cta" }
    },
    {
      name: "Enterprise",
      description: "Requisitos avanzados.",
      badge: "",
      popular: false,
      price: { monthly: 99, yearly: 990 },
      features: [
        "SLA dedicado",
        "SAML/SSO",
        "Soporte 24/7"
      ],
      cta: { label: "Contactar", href: "#contacto" }
    }
  ]
};
