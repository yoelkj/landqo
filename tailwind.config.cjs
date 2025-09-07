/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'],
  theme: {
    container: {
      center: true,            // ⬅️ centrado automático
      padding: '1rem',         // ⬅️ padding lateral
      screens: {
        // ⬇️ define el ancho máximo a tu gusto (coherente con --container-max)
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',          // ⬅️ tope real
        '2xl': '1200px'
      }
    },
    extend: {}
  },
  plugins: []
};
