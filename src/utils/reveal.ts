// src/utils/reveal.ts
type Variant = 'fade' | 'up' | 'down' | 'left' | 'right' | 'scale' | 'blur';

export function initReveal(options?: { rootMargin?: string; threshold?: number }) {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (!('IntersectionObserver' in window) || els.length === 0) return;

  // 1) Aplica clases base primero (estado inicial)
  els.forEach((el) => {
    const v = (el.dataset.reveal as Variant) || 'fade';
    el.classList.add('reveal', `reveal-${v}`);
    const d = Number(el.dataset.delay || 0);
    if (d) el.style.transitionDelay = `${d}ms`;
  });

  // 2) Observa en el frame siguiente para evitar colapsar la transición
  requestAnimationFrame(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            // Forzar reflow para garantizar la transición (solo cuando va a entrar)
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            (e.target as HTMLElement).offsetHeight;
            e.target.classList.add('reveal-in');
            observer.unobserve(e.target);
          }
        }
      },
      {
        rootMargin: options?.rootMargin ?? '0px 0px -10% 0px',
        threshold: options?.threshold ?? 0.15,
      }
    );

    els.forEach((el) => observer.observe(el));
  });
}
