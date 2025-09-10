const a = (html: string) => html; // helper para poder escribir HTML legible

export default {
  id: "faq",
  title: "Preguntas frecuentes",
  subtitle: "Resolvemos las dudas más comunes antes de empezar.",
  items: [
    {
      q: "¿Qué entregamos exactamente al finalizar?",
      a: a(`
        Código fuente en un repositorio (Astro + nuestro sistema de secciones), assets optimizados,
        setup de analítica y SEO técnico base. Publicamos en tu dominio o entregamos listo para
        deploy (Vercel/Netlify u otro).`),
    },
    {
      q: "¿En cuánto tiempo puedo tener mi landing publicada?",
      a: a(`
        Nuestro flujo estándar toma <strong>5–10 días</strong> dependiendo del alcance.
        Si tienes contenidos y assets listos, podemos acelerar a <strong>3–5 días</strong>.`),
    },
    {
      q: "¿Qué necesito preparar antes de iniciar?",
      a: a(`
        Objetivos de la landing, público objetivo, mensajes clave (si existen), logo/branding disponible
        y referencias de tono/estilo. Si no cuentas con textos, los redactamos nosotros (copy base).`),
    },
    {
      q: "¿Incluye SEO y performance?",
      a: a(`
        Sí. Entregamos <em>metadatos</em>, OG/Twitter cards, sitemap, robots, estructura semántica,
        imágenes optimizadas y cargas rápidas con Astro. Nuestra meta es un Lighthouse alto sin hacks.`),
    },
    {
      q: "¿Puedo editar contenidos luego sin tocar código?",
      a: a(`
        Podemos dejar <strong>textos e imágenes en archivos de contenido</strong> (MD/JSON) o conectar un
        CMS ligero. También ofrecemos un <em>pack de cambios</em> post-lanzamiento para ajustes puntuales.`),
    },
    {
      q: "¿Cómo manejan el dominio, hosting y analítica?",
      a: a(`
        Usamos hosting estático (Vercel/Netlify) o tu infraestructura. Configuramos dominio y DNS si lo necesitas,
        y dejamos <strong>Google Analytics</strong> y eventos clave listos desde el día 1.`),
    },
    {
      q: "¿Cuántas rondas de revisión están incluidas?",
      a: a(`
        <strong>Dos rondas</strong> sobre diseño/copy y una final para QA. Ajustes adicionales se cotizan como horas
        extra o un bloque de soporte mensual.`),
    },
    {
      q: "¿Quién es dueño del código?",
      a: a(`
        El proyecto es tuyo. Entregamos con una licencia estándar para uso comercial del cliente,
        sin dependencias propietarias.`),
    },
    {
      q: "¿Ofrecen soporte post-lanzamiento?",
      a: a(`
        Sí. Incluimos una ventana corta de garantía para hotfixes y planes de soporte para mejoras
        continuas, experimentos A/B o nuevas secciones.`),
    },
    {
      q: "¿Cómo funcionan los pagos?",
      a: a(`
        50% al inicio y 50% al entregar. Para trabajo continuo, usamos una tarifa mensual con alcance definido.
        Emitimos factura y aceptamos transferencias/Stripe.`),
    },
  ],
};
