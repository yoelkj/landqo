// src/utils/section-variants.ts
import type { Variant } from './section-types'

/**
 * Clases por variante basadas en tokens CSS:
 * - Sin colores fijos; todo referencia variables semánticas.
 * - En `inverted` reforzamos contraste de enlaces y tarjetas internas.
 */
export const sectionClassByVariant: Record<Variant, string> = {
  default: [
    // superficies y texto base
    'bg-[color:var(--color-bg)]',
    'text-[color:var(--color-fg)]',
  ].join(' '),

  alt: [
    'bg-[color:var(--color-bg-elev)]',
    'text-[color:var(--color-fg)]',
  ].join(' '),

  inverted: [
    // fondo oscuro con texto claro (usa fg como fondo para cubrir ambos temas)
    'bg-[color:var(--color-fg)]',
    'text-[color:var(--color-bg)]',

    // Enlaces (no botones) siempre legibles sobre fondo invertido
    '[&_:where(a):not(.btn):not(.nav-link)]:text-[color:var(--color-bg)]',
    '[&_:where(a):not(.btn):not(.nav-link)]:hover:text-[color:var(--color-bg)]',

    // Tarjetas dentro de secciones invertidas: superficie clara
    '[&_.card]:bg-[color:var(--color-bg)]',
    '[&_.card]:text-[color:var(--color-fg)]',
    '[&_.card]:border-[color:var(--color-border)]',

    // Bordes/rings que dependan del fondo invertido
    '[&_*]:caret-[color:var(--color-bg)]',
  ].join(' '),
}

/**
 * Helper por si prefieres una API funcional.
 * Ej: class={`section ${sectionVariantClasses(variant)} my-extra`}
 */
export function sectionVariantClasses(variant: Variant = 'default'): string {
  return sectionClassByVariant[variant] || sectionClassByVariant.default
}
