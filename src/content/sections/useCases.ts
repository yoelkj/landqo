// src/content/sections/use-cases.ts
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
  subtitle:
    "Así es como una landing bien hecha potencia distintos modelos de negocio y ayuda a vender más.",
  cols: 3,
  cases: [
    {
      title: "SaaS y productos digitales",
      desc: "Muestra tu propuesta de valor, explica cómo funciona y facilita el registro o prueba gratis para captar usuarios.",
      icon: icoSaaS,
    },
    {
      title: "Servicios locales",
      desc: "Convierte visitas en clientes con botones a WhatsApp, formularios rápidos y testimonios. Ideal para clínicas, talleres o consultorías.",
      icon: icoLocal,
    },
    {
      title: "Eventos y webinars",
      desc: "Página de registro con agenda clara, speakers y recordatorios automáticos por email o WhatsApp.",
      icon: icoEvent,
    },
    {
      title: "Cursos e infoproductos",
      desc: "Expón beneficios y módulos de tu programa, ofrece un lead magnet y facilita la compra con un checkout externo.",
      icon: icoCourse,
    },
    {
      title: "Consultoría B2B",
      desc: "Refuerza credibilidad con casos de éxito, explica tu propuesta y permite agendar reuniones sin fricciones.",
      icon: icoB2B,
    },
    {
      title: "Apps móviles",
      desc: "Presenta capturas de pantalla, reseñas y enlaces directos a App Store o Google Play para aumentar descargas.",
      icon: icoApp,
    },
  ],
};
