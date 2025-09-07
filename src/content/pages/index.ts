import type { SectionKey } from '@/utils/section-map';

import hero from '@/content/sections/hero';
import benefits from '@/content/sections/benefits';
import features from '@/content/sections/features';
import pricing from '@/content/sections/pricing';
import process from '@/content/sections/process';
import faq from '@/content/sections/faq';
import ctafinal from '@/content/sections/ctafinal';

// Cada entrada define la sección y las props a inyectar al componente.
export type PageSection = { key: SectionKey; props?: Record<string, unknown> };

const pageSections: PageSection[] = [
  { key: 'hero', props: hero },
  { key: 'benefits', props: benefits },
  { key: 'features', props: features },
  { key: 'pricing', props: pricing },
  { key: 'process', props: process },
  { key: 'faq', props: faq },
  { key: 'ctafinal', props: ctafinal },
];

export default pageSections;
