import type { SectionKey } from '@/utils/section-map';

import hero from '@/content/sections/hero';
import benefits from '@/content/sections/benefits';
import features from '@/content/sections/features';
import pricing from '@/content/sections/pricing';
import process from '@/content/sections/process';
import faq from '@/content/sections/faq';
import ctafinal from '@/content/sections/ctafinal';

/* NUEVOS (si ya existen en tu proyecto) */
import gallery from '@/content/sections/gallery';        // → "Plantillas"
import useCases from '@/content/sections/useCases';      // → "Casos de éxito"
import templates from '@/content/sections/templates';    // → "Templates"

// Cada entrada define la sección y las props a inyectar al componente.
export type PageSection = { key: SectionKey; props?: Record<string, unknown> };

const pageSections: PageSection[] = [
  { key: 'hero',      props: hero },

  /* Contenido de valor y diferenciadores */
  { key: 'benefits',  props: benefits },
  { key: 'features',  props: features },

  { key: 'templates', props: templates },

  /* Plantillas (galería) para el ancla #templates */
  { key: 'gallery',   props: gallery },        // asegura que el componente use id="templates"

  /* Casos de éxito (social proof) para #cases */
  { key: 'useCases',  props: useCases },       // asegura id="cases"

  /* Conversión */
  { key: 'pricing',   props: pricing },
  { key: 'process',   props: process },
  { key: 'faq',       props: faq },

  /* CTA final (#cta) */
  { key: 'ctafinal',  props: ctafinal },
];

export default pageSections;
