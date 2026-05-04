/**
 * Scroll-triggered entrance animations via IntersectionObserver.
 *
 * Usage:
 *   <div data-reveal data-animation="animate-fade-in-up"></div>
 *
 * Stagger: add data-delay="<ms>" to each element.
 * One-shot: add data-once to animate only on first entry.
 */

interface RevealOptions {
  rootMargin?: string;
  threshold?: number;
}

interface RevealMeta {
  classes: string[];
  delay: number;
  once: boolean;
}

// Cache parsed attributes per element to avoid repeated DOM reads.
const cache = new WeakMap<HTMLElement, RevealMeta>();

function getMeta(el: HTMLElement): RevealMeta {
  let meta = cache.get(el);
  if (meta) return meta;

  const raw = el.dataset.animation?.trim();
  const classes = raw ? raw.split(/\s+/) : [];
  const delay = parseInt(el.dataset.delay ?? '', 10) || 0;
  const once = el.dataset.once !== undefined && el.dataset.once !== 'false';

  meta = { classes, delay, once };
  cache.set(el, meta);
  return meta;
}

function reveal(el: HTMLElement, meta: RevealMeta): void {
  if (meta.classes.length === 0) return;
  el.style.opacity = '';
  el.style.animationFillMode = 'both';
  if (meta.delay > 0) el.style.animationDelay = `${meta.delay}ms`;
  el.classList.add(...meta.classes);
}

function unreveal(el: HTMLElement, meta: RevealMeta): void {
  if (meta.classes.length > 0) el.classList.remove(...meta.classes);
  el.style.animationDelay = '';
  el.style.animationFillMode = '';
  el.style.opacity = '0';
}

/**
 * Initialises reveal animations for all [data-reveal] elements inside `root`.
 * Returns a cleanup function that disconnects observers and restores styles.
 */
export function initReveal(
  options: RevealOptions = {},
  root: Document | Element = document,
): () => void {
  const { rootMargin = '0px 0px -60px 0px', threshold = 0.1 } = options;
  const elements = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));

  if (elements.length === 0) return () => {};

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    for (const el of elements) el.style.opacity = '';
    return () => {};
  }

  for (const el of elements) el.style.opacity = '0';

  // Entrance observer — triggers animation when element scrolls into view.
  const enterObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        const meta = getMeta(el);
        reveal(el, meta);
        if (meta.once) enterObserver.unobserve(el);
      }
    },
    { rootMargin, threshold },
  );

  // Reset observer — resets repeating elements when fully below the viewport.
  const resetObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) continue;
        if (entry.boundingClientRect.top > 0) {
          const el = entry.target as HTMLElement;
          unreveal(el, getMeta(el));
        }
      }
    },
    { threshold: 0 },
  );

  for (const el of elements) {
    const meta = getMeta(el);
    enterObserver.observe(el);
    if (!meta.once) resetObserver.observe(el);
  }

  return () => {
    enterObserver.disconnect();
    resetObserver.disconnect();
    for (const el of elements) {
      el.style.opacity = '';
      el.style.animationDelay = '';
      el.style.animationFillMode = '';
    }
  };
}
