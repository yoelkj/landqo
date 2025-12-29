const a = (html: string) => html;

export default {
  id: "faq",
  title: "Preguntas frecuentes",
  subtitle: "Resolvemos las dudas más comunes antes de empezar.",
  items: [
    {
      q: "¿Qué incluye exactamente el pago único?",
      a: a(`
        <ul>
          <li><strong>Diseño y copy a medida</strong> (por rubro, no plantillas).</li>
          <li><strong>Dominio .pe o .com + SSL + hosting</strong> por 12 meses.</li>
          <li><strong>5 a 10 páginas</strong> según plan (blog, servicios, etc.).</li>
          <li><strong>Copy persuasivo</strong>, formularios, WhatsApp, píxeles.</li>
          <li><strong>SEO técnico</strong>, Analytics, informes de tráfico.</li>
          <li><strong>Artículos de blog</strong> y horas de cambios mensuales (Pro/Scale).</li>
          <li><strong>Soporte humano</strong> 12-24 h según plan.</li>
        </ul>
      `),
    },
    {
      q: "¿Cómo funciona el dominio y el hosting?",
      a: a(`
        <ul>
          <li><strong>Año 1:</strong> dominio, hosting, SSL y backups <strong>incluidos</strong> (sin pagos mensuales).</li>
          <li><strong>Año 2:</strong> eliges renovar <strong>todo por S/ 249/año</strong> (hosting + dominio + SSL) o descargar tu web y usarla donde quieras <strong>sin penalidad</strong>.</li>
          <li>Te avisamos 30 días antes; <strong>sin cobros automáticos</strong>.</li>
        </ul>
      `),
    },
    {
      q: "¿En cuánto tiempo está mi web en línea?",
      a: a(`
        Entrega garantizada en <strong>5 días hábiles</strong> desde que nos envíes textos e imágenes.  
        Si faltan materiales o el alcance crece, puede ir a 7-10 días (te avisamos).
      `),
    },
    {
      q: "¿Puedo editar contenido después?",
      a: a(`
        El sitio <strong>no es autogestionable</strong> (modelo rápido y estable).  
        Incluimos <strong>cambios menores mensuales</strong> (Pro/Scale) y dos rondas post-lanzamiento.  
        Si quieres CMS, cotizamos el upgrade.
      `),
    },
    {
      q: "¿Incluye SEO y performance?",
      a: a(`
        Sí: metadatos, OG/Twitter, sitemap, robots, imágenes optimizadas y estructura semántica.  
        Buscamos alto puntaje Lighthouse sin trucos.
      `),
    },
    {
      q: "¿Qué pasa si no me gusta cómo quedó?",
      a: a(`
        Revisamos <strong>dos veces</strong> antes de publicar.  
        Si algo no cuadra, lo ajustamos <strong>sin costo</strong> dentro de los 5 días posteriores a la entrega.
      `),
    },
    {
      q: "¿Los precios incluyen IGV?",
      a: a(`
        <strong>IGV (18 %) se suma al final del checkout.</strong>  
        Precios en soles (PEN) y ofertas con vigencia visible.
      `),
    },
    {
      q: "¿Cómo se paga?",
      a: a(`
        <strong>Un solo pago</strong> con tarjeta o transferencia (IGV incluido).  
        No hay cuotas mensuales ni permanencia.
      `),
    },
    {
      q: "¿Soporte post-lanzamiento?",
      a: a(`
        Sí: soporte por email/WhatsApp en <strong>12-24 h hábiles</strong> según plan.  
        Incluimos hotfixes y ajustes menores durante el año.
      `),
    },
    {
      q: "¿Quién es dueño del proyecto?",
      a: a(`
        El código y los contenidos son tuyos para uso comercial.  
        Te entregamos repositorio y archivos. Fotos/íconos respetan licencias de terceros.
      `),
    },
    {
      q: "Ya tengo dominio/hosting, ¿pueden usarlo?",
      a: a(`
        Sí. Podemos apuntar tu dominio o migrar desde tu hosting/CMS.  
        La <strong>migración</strong> se evalúa caso a caso y puede tener costo adicional.
      `),
    },
  ],
};