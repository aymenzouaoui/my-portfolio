import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref to attach to an element and a boolean indicating
 * whether it has scrolled into view (mirrors the old [data-reveal] behavior).
 */
export function useReveal(options = { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
}
