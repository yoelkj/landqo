const icoDesign =
  '<svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h10M4 17h7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

const icoCopy =
  '<svg viewBox="0 0 24 24" fill="none"><path d="M6 4h12v16H6z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 8h6M9 12h6M9 16h3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

const icoVisual =
  '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M8 12l2.5 2.5L16 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const icoProcess =
  '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

const icoHosting =
  '<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="6" rx="1" stroke="currentColor" stroke-width="2"/><rect x="3" y="14" width="18" height="6" rx="1" stroke="currentColor" stroke-width="2"/></svg>';

const icoSupport =
  '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M12 16h.01M12 8v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

export default {
  id: "features",
  title: "Características clave",
  subtitle:
    "En Landqo no solo diseñamos: entregamos tu landing lista para vender, con todo lo que necesitas desde el día uno.",
  cols: 3,
  features: [
    {
      title: "Diseño a medida",
      desc: "Creamos un diseño único para tu negocio, alineado a tu identidad y pensado para generar confianza.",
      icon: icoDesign,
    },
    {
      title: "Copywriting persuasivo",
      desc: "Redactamos textos claros y directos que guían a tus visitantes hacia la acción que importa.",
      icon: icoCopy,
    },
    {
      title: "Visuales profesionales",
      desc: "Seleccionamos imágenes e ilustraciones que refuercen tu mensaje y transmitan credibilidad.",
      icon: icoVisual,
    },
    {
      title: "Proceso ágil y colaborativo",
      desc: "Trabajamos contigo paso a paso, ajustando rápido hasta que tu landing esté lista para salir online.",
      icon: icoProcess,
    },
    {
      title: "Hosting y dominio incluidos",
      desc: "Lanza en un subdominio de Velcodi o conecta tu dominio propio con SSL y hosting configurados.",
      icon: icoHosting,
    },
    {
      title: "Soporte post-lanzamiento",
      desc: "Estamos contigo después de publicar: ajustes menores, mejoras y asesoría sin costos ocultos.",
      icon: icoSupport,
    },
  ],
};
