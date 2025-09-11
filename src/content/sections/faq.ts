const a = (html: string) => html; // helper para poder escribir HTML legible

export default {
  id: "faq",
  title: "Preguntas frecuentes",
  subtitle: "Resolvemos las dudas más comunes antes de empezar.",
  items: [
    {
      q: "¿Qué incluye exactamente la implementación?",
      a: a(`
        <ul>
          <li><strong>Diseño y copy base a medida</strong> (no plantillas genéricas).</li>
          <li><strong>Arquitectura de secciones</strong> enfocada en conversión (CTAs, objeciones, prueba social).</li>
          <li><strong>SEO técnico</strong>: metadatos, OG/Twitter cards, sitemap y robots.</li>
          <li><strong>Performance</strong> con Astro (carga rápida y puntajes Lighthouse altos).</li>
          <li><strong>Analítica</strong>: GA4 y eventos clave; integración de píxeles (Meta/Ads) si aplica.</li>
          <li><strong>QA multi-dispositivo</strong> y publicación.</li>
        </ul>
      `),
    },
    {
      q: "¿Cómo funcionan el dominio y el hosting?",
      a: a(`
        <ul>
          <li><strong>Starter:</strong> se publica en un <em>subdominio de Velcodi</em>.</li>
          <li><strong>Pro/Empresa:</strong> configuramos tu <strong>dominio propio con SSL</strong> y DNS. La compra/renovación del dominio se paga al registrador elegido por ti.</li>
          <li><strong>Hosting gestionado</strong> por nosotros (backups y seguridad). Si ya tienes infraestructura, podemos adaptarnos o migrar (se cotiza aparte).</li>
        </ul>
      `),
    },
    {
      q: "¿En cuánto tiempo puedo tener mi landing publicada?",
      a: a(`
        Con assets y objetivos claros, el ciclo normal es de <strong>3–7 días</strong>. Si el alcance crece o falta material, puede ir a <strong>5–10 días</strong>.
      `),
    },
    {
      q: "¿Puedo editar contenidos luego sin tocar código?",
      a: a(`
        Por defecto <strong>no es autogestionable</strong> (modelo estable y rápido). Incluimos un <strong>pack de cambios</strong> post-lanzamiento para ajustes menores.
        Si necesitas autoedición, ofrecemos <strong>upgrade a micrositio autogestionable</strong> (CMS) como servicio adicional.
      `),
    },
    {
      q: "¿Incluye SEO y performance?",
      a: a(`
        Sí. Entregamos estructura semántica, metadatos, OG/Twitter, sitemap/robots e <strong>imágenes optimizadas</strong>, buscando un rendimiento alto sin hacks.
      `),
    },
    {
      q: "¿La analítica y las conversiones quedan listas?",
      a: a(`
        Sí. Dejamos <strong>Google Analytics 4</strong> con eventos clave (leads, clics críticos, formularios) y agregamos <strong>píxeles</strong> publicitarios si los utilizas.
        Te damos acceso al panel para que puedas ver resultados.
      `),
    },
    {
      q: "¿Cuántas rondas de revisión están incluidas?",
      a: a(`
        <strong>Dos rondas</strong> de diseño/copy y <strong>una ronda de QA</strong>. Cambios extra se cotizan por horas o como bloque de soporte mensual.
      `),
    },
    {
      q: "¿Qué no incluye el precio?",
      a: a(`
        <ul>
          <li>Compra/renovación de dominio.</li>
          <li>Ilustraciones/fotografía premium, sesiones de fotos o branding desde cero.</li>
          <li>Integraciones complejas, migraciones grandes o multi-idioma (se cotiza).</li>
          <li>CMS/autoedición (eso va en el upgrade a micrositio).</li>
        </ul>
      `),
    },
    {
      q: "¿Los precios incluyen IGV?",
      a: a(`
        No. <strong>Los precios no incluyen IGV (18%)</strong> y se facturan en <strong>soles (PEN)</strong>. Las ofertas tienen vigencia indicada en la sección de precios.
      `),
    },
    {
      q: "¿Cómo funcionan los pagos y la facturación?",
      a: a(`
        <strong>50% al inicio</strong> y <strong>50% al entregar</strong>. El hosting/soporte es mensual o anual (con descuento).
        Emitimos factura y aceptamos <strong>transferencia/Stripe</strong>.
      `),
    },
    {
      q: "¿Ofrecen soporte post-lanzamiento?",
      a: a(`
        Sí. Soporte en <strong>24–48h</strong> hábiles y <strong>garantía de 14 días</strong> para hotfixes. Los planes Pro/Empresa incluyen atención prioritaria.
      `),
    },
    {
      q: "¿Quién es dueño del código y los contenidos?",
      a: a(`
        El proyecto es tuyo para uso comercial. Entregamos repositorio y archivos de contenido. Los terceros (por ejemplo, fotos premium) respetan sus licencias.
      `),
    },
    {
      q: "Ya tengo dominio/hosting, ¿pueden usarlo?",
      a: a(`
        Sí. Podemos apuntar al dominio que ya tienes o migrar desde tu hosting/CMS. La <strong>migración</strong> se evalúa caso a caso y puede tener costo adicional.
      `),
    },
  ],
};
