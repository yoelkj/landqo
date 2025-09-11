// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'http://localhost:4321',
  srcDir: './src',
  server: { port: 4321 },

  // 👇 Clave para evitar el error del adapter
  output: 'static',

  integrations: [tailwind()],

  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)), // import '@/...'
      },
    },
  },
});
