# 🚀 Landing Boilerplate (Astro + Tailwind)

Boilerplate base para crear **landing pages profesionales** con [Astro](https://astro.build/) y [Tailwind CSS](https://tailwindcss.com/).  
Incluye estructura de carpetas organizada, soporte para múltiples secciones, páginas legales y configuración lista para personalizar.

---

## ⚡ Instalación

```sh
# Crear proyecto
npm create astro@latest -- --template minimal

# Instalar dependencias
npm install

# Añadir Tailwind (ya configurado en este boilerplate)
npx astro add tailwind
```

---

## 📂 Estructura del proyecto

La estructura final del boilerplate:

```text
/
├─ public/
│  ├─ favicon.ico
│  ├─ og-image.png
│  └─ assets/                           # logos, ilustraciones, íconos
├─ src/
│  ├─ env.d.ts
│  ├─ styles/                           # theming centralizado
│  │  ├─ global.css                     # resets, utilidades globales
│  │  ├─ tokens.css                     # variables base (colores, tipografías, espacios)
│  │  └─ themes/
│  │     ├─ default.css                 # tema por defecto (usa tokens)
│  │     └─ example-tenant.css          # overrides por instalación/tenant (opcional)
│  ├─ layouts/
│  │  └─ BaseLayout.astro
│  ├─ components/
│  │  ├─ ui/                            # átomos/moléculas reutilizables
│  │  │  ├─ CTAButton.astro
│  │  │  ├─ Card.astro
│  │  │  ├─ Badge.astro
│  │  │  ├─ CookieConsent.astro
│  │  │  └─ ScrollUI.astro
│  │  ├─ header/
│  │  │  ├─ NavBar.astro
│  │  │  └─ Header.astro
│  │  ├─ footer/
│  │  │  └─ Footer.astro
│  │  ├─ sections/                      # vistas de secciones (sin data fija)
│  │  │  ├─ Hero.astro
│  │  │  ├─ Benefits.astro
│  │  │  ├─ Features.astro
│  │  │  ├─ Pricing.astro
│  │  │  ├─ Process.astro
│  │  │  ├─ FAQ.astro
│  │  │  ├─ Trust.astro
│  │  │  ├─ SocialProof.astro
│  │  │  ├─ Integrations.astro
│  │  │  ├─ UseCases.astro
│  │  │  ├─ Timeline.astro
│  │  │  ├─ Resources.astro
│  │  │  ├─ Gallery.astro
│  │  │  ├─ Contact.astro
│  │  │  └─ CTAFinal.astro
│  │  └─ pages/
│  │     └─ ThankYou.astro              # UI compartida para /gracias y /thank-you
│  ├─ utils/
│  │  ├─ section-map.ts                 # registro/orden de secciones
│  │  ├─ forms.ts                       # helpers de formularios
│  │  ├─ i18n.ts                        # (i18n opcional) resolver lang + fallback
│  │  └─ seo.ts                         # (i18n opcional) hreflang/canonical/sitemap
│  ├─ content/
│  │  ├─ site.ts                        # datos globales (fallback por defecto)
│  │  ├─ sections/                      # datos por sección (fallback por defecto)
│  │  │  ├─ hero.ts
│  │  │  ├─ benefits.ts
│  │  │  ├─ features.ts
│  │  │  ├─ pricing.ts
│  │  │  ├─ process.ts
│  │  │  ├─ faq.ts
│  │  │  ├─ trust.ts
│  │  │  ├─ socialProof.ts
│  │  │  ├─ integrations.ts
│  │  │  ├─ useCases.ts
│  │  │  ├─ timeline.ts
│  │  │  ├─ resources.ts
│  │  │  ├─ gallery.ts
│  │  │  ├─ contact.ts
│  │  │  └─ ctafinal.ts
│  │  ├─ pages/
│  │  │  └─ index.ts                    # composición/orden por defecto
│  │  └─ locales/                       # (i18n opcional) overrides por idioma
│  │     ├─ es/
│  │     │  ├─ site.ts
│  │     │  ├─ sections/                # solo lo que cambie respecto a default
│  │     │  └─ pages/
│  │     │     ├─ index.ts              # orden/activación por idioma
│  │     │     └─ thank-you.ts          # textos de “gracias” ES (opcional)
│  │     └─ en/
│  │        ├─ site.ts
│  │        ├─ sections/
│  │        └─ pages/
│  │           └─ thank-you.ts          # textos de “thank you” EN (opcional)
│  └─ pages/
│     ├─ index.astro                    # modo single-lang (raíz) — i18n OFF
│     ├─ gracias/
│     │  └─ index.astro                 # single-lang: /gracias/ (monta ThankYou)
│     ├─ [lang]/                        # (i18n ON) rutas por idioma
│     │  ├─ index.astro                 # /es/ /en/
│     │  ├─ gracias/
│     │  │  └─ index.astro              # /es/gracias/ (monta ThankYou)
│     │  └─ thank-you/
│     │     └─ index.astro              # /en/thank-you/ (monta ThankYou)
│     ├─ 404.astro                      # único 404 — localiza por prefijo /[lang]/
│     ├─ sitemap.xml.ts                 # emite variantes por idioma si i18n ON
│     └─ robots.txt.ts
├─ .env.example                         # variables públicas (BRAND, SITE_URL, GA, etc.)
├─ .gitignore
├─ astro.config.mjs
├─ tailwind.config.cjs
├─ tsconfig.json
└─ package.json

```

---

## 🧞 Comandos

Ejecutar desde la raíz del proyecto:

| Comando             | Acción                                                 |
| ------------------- | ------------------------------------------------------ |
| `npm install`       | Instala dependencias                                   |
| `npm run dev`       | Inicia el servidor en `localhost:4321`                 |
| `npm run build`     | Genera la build de producción en `./dist/`             |
| `npm run preview`   | Previsualiza la build de producción                    |
| `npm run astro ...` | Ejecuta comandos de Astro (`astro add`, `astro check`) |

---

## 📌 Features del Boilerplate

- Astro + Tailwind preconfigurados.
- Estructura modular y escalable.
- Catálogo de secciones (Hero, Pricing, FAQ, etc.).
- Configuración de datos separada de la UI (`content/sections`).
- Páginas legales y de sistema (404, gracias).
- Preparado para multi-tenant y multi-idioma.
- SEO técnico (sitemap, robots, meta OG).

---

## 📖 Convenciones

Este proyecto sigue [**Conventional Commits**](https://www.conventionalcommits.org/).  
Ejemplos:

- `feat: add testimonials section`
- `fix: correct navbar responsive bug`
- `chore: update dependencies`
- `refactor: reorganize content folder`

---

## 👀 Más info

- [Documentación de Astro](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/)
