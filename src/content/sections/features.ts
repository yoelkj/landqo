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
    "Diseño, copy, hosting y soporte por 12 meses. Un solo pago en soles y tu web lista para vender.",
  cols: 3,
  features: [
    {
      title: "Diseño a medida (Full/Scale)",
      desc: "Piezas, colores y tipografías únicas para tu marca. Revisamos contigo hasta que ames el resultado.",
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
      title: "Dominio + hosting 12 meses",
      desc: "Dominio .pe o .com, hosting rápido, SSL y backups incluidos por un año. Sin pagos mensuales.",
      icon: icoHosting,
    },
    {
      title: "Soporte real en 24 h",
      desc: "Dudas, cambios menores o nuevos eventos: responde un humano en menos de un día hábil.",
      icon: icoSupport,
    },
  ],
};