// Íconos (SVG inline) – estilo stroke para heredar currentColor
const icoSaaS =
  '<svg viewBox="0 0 24 24" fill="none"><path d="M4 12h16M8 16h8M7 7h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" stroke-width="2"/></svg>';

const icoLocal =
  '<svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11Z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="2"/></svg>';

const icoEvent =
  '<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" stroke-width="2"/><path d="M8 3v4M16 3v4M3 10h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

const icoCourse =
  '<svg viewBox="0 0 24 24" fill="none"><path d="M3 7l9-4 9 4-9 4-9-4Zm0 5l9 4 9-4M3 7v10l9 4 9-4V7" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';

const icoB2B =
  '<svg viewBox="0 0 24 24" fill="none"><path d="M4 20V8a2 2 0 0 1 2-2h5v14H6a2 2 0 0 1-2-2Zm9-10h5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5V10Z" stroke="currentColor" stroke-width="2"/></svg>';

const icoApp =
  '<svg viewBox="0 0 24 24" fill="none"><rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" stroke-width="2"/><path d="M9 18h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

export default {
  id: "use-cases",
  title: "Casos de uso",
  subtitle: "Dónde nuestros landings rinden mejor.",
  cols: 3,
  cases: [
    {
      title: "SaaS / Productos digitales",
      desc: "Landing enfocada en conversión: propuesta clara, social proof, pricing y llamada a prueba gratis.",
      icon: icoSaaS,
    },
    {
      title: "Servicios locales",
      desc: "Captación de leads con WhatsApp/agenda, mapa y testimonios. Ideal para clínicas, talleres o consultorías.",
      icon: icoLocal,
    },
    {
      title: "Eventos y webinars",
      desc: "Registro rápido, agenda y speakers. Integraciones con herramientas de mailing para recordatorios.",
      icon: icoEvent,
    },
    {
      title: "Cursos e infoproductos",
      desc: "Presentación del programa, beneficios y módulos. Lead magnet y checkout externo listos.",
      icon: icoCourse,
    },
    {
      title: "Consultoría / B2B",
      desc: "Propuesta de valor, casos de éxito y agenda con calendario para agendar reuniones sin fricción.",
      icon: icoB2B,
    },
    {
      title: "Apps móviles",
      desc: "Features, capturas y enlaces a stores, con reseñas y FAQ para disminuir objeciones.",
      icon: icoApp,
    },
  ],
};
