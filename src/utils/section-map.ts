/**
 * Registro que mapea claves de sección a su componente .astro correspondiente.
 * Mantén aquí SOLO el mapeo de componentes. Los datos viven en src/content/**.
 */

export type SectionKey =
  | 'hero'
  | 'benefits'
  | 'features'
  | 'pricing'
  | 'process'
  | 'faq'
  | 'trust'
  | 'socialProof'
  | 'integrations'
  | 'useCases'
  | 'timeline'
  | 'resources'
  | 'gallery'
  | 'contact'
  | 'ctafinal'
  | 'templates';

type LazyAstroComponent = () => Promise<{ default: any }>;

export const sectionsRegistry: Record<SectionKey, { component: LazyAstroComponent }> = {
  hero:         { component: () => import('@/components/sections/Hero.astro') },
  benefits:     { component: () => import('@/components/sections/Benefits.astro') },
  features:     { component: () => import('@/components/sections/Features.astro') },
  pricing:      { component: () => import('@/components/sections/Pricing.astro') },
  process:      { component: () => import('@/components/sections/Process.astro') },
  faq:          { component: () => import('@/components/sections/FAQ.astro') },
  trust:        { component: () => import('@/components/sections/Trust.astro') },
  socialProof:  { component: () => import('@/components/sections/SocialProof.astro') },
  integrations: { component: () => import('@/components/sections/Integrations.astro') },
  useCases:     { component: () => import('@/components/sections/UseCases.astro') },
  timeline:     { component: () => import('@/components/sections/Timeline.astro') },
  resources:    { component: () => import('@/components/sections/Resources.astro') },
  gallery:      { component: () => import('@/components/sections/Gallery.astro') },
  contact:      { component: () => import('@/components/sections/Contact.astro') },
  ctafinal:     { component: () => import('@/components/sections/CTAFinal.astro') },
  templates:     { component: () => import('@/components/sections/Templates.astro') },
};
