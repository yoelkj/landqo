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
  subtitle: "Así trabajamos en Landqo para que tu landing llegue rápido y con calidad profesional.",
  cols: 3,
  features: [
    {
      title: "Diseño a medida",
      desc: "Cada landing refleja la identidad de tu marca, sin plantillas genéricas.",
      icon: icoDesign,
    },
    {
      title: "Copywriting persuasivo",
      desc: "Textos claros y enfocados en guiar al usuario hacia la conversión.",
      icon: icoCopy,
    },
    {
      title: "Visuales profesionales",
      desc: "Selección de imágenes e ilustraciones alineadas con tu mensaje.",
      icon: icoVisual,
    },
    {
      title: "Proceso colaborativo",
      desc: "Iteramos contigo para ajustar rápido y sin fricciones hasta la publicación.",
      icon: icoProcess,
    },
    {
      title: "Hosting y dominio listos",
      desc: "Nos encargamos de la parte técnica: tu landing queda online sin complicaciones.",
      icon: icoHosting,
    },
    {
      title: "Soporte post-lanzamiento",
      desc: "Pequeños ajustes y mejoras tras la publicación, sin costos ocultos.",
      icon: icoSupport,
    },
  ],
};
