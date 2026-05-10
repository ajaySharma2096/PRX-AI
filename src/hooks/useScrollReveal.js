/**
 * useScrollReveal.js
 *
 * Attaches an IntersectionObserver to a container ref and adds the
 * `data-visible="true"` attribute (or a CSS class) to every child element
 * matching `selector` once it enters the viewport.
 *
 * Components use this to trigger fade-up / stagger animations via CSS or
 * Framer Motion without polling scroll position.
 *
 * @param {object} options
 * @param {string}  [options.selector='.reveal']   - Child selector to observe
 * @param {number}  [options.threshold=0.1]        - Visibility fraction to trigger
 * @param {string}  [options.rootMargin='0px 0px -50px 0px'] - Observer margin
 * @param {boolean} [options.once=true]            - Unobserve after first reveal
 * @returns {{ ref: React.RefObject }}
 *
 * Usage:
 *   const { ref } = useScrollReveal();
 *   <div ref={ref}>
 *     <div className="reveal">...</div>
 *   </div>
 */
import { useEffect, useRef } from 'react';

export function useScrollReveal({
  selector    = '.reveal',
  threshold   = 0.1,
  rootMargin  = '0px 0px -50px 0px',
  once        = true,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = Array.from(container.querySelectorAll(selector));
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dataset.visible = 'true';
            if (once) observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [selector, threshold, rootMargin, once]);

  return { ref };
}
