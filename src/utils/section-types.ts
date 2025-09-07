// src/utils/section-types.ts

/**
 * Variant controla el fondo/contraste de cada sección.
 * - default: usa --color-bg / --color-fg
 * - alt:     usa --color-bg-elev (ligera elevación)
 * - inverted:invierte fg/bg (útil para bloques oscuros)
 *
 * NOTA: Los colores vienen de tokens.css + themes/*.
 */
export type Variant = 'default' | 'alt' | 'inverted'

/**
 * Props base que comparten todas las secciones.
 * Tip: `className` se concatena después de las clases por variante.
 */
export interface BaseSectionProps {
  id?: string
  title?: string
  subtitle?: string
  variant?: Variant
  className?: string
}
