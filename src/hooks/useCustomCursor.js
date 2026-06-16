import { useEffect, useRef } from 'react';

export function useCustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring || !window.matchMedia('(pointer: fine)').matches) return;

    let ringX = 0;
    let ringY = 0;
    let animationId;

    const onMouseMove = (e) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      ringX = e.clientX;
      ringY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    const animateRing = () => {
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      animationId = requestAnimationFrame(animateRing);
    };
    animateRing();

    const onEnter = () => {
      ring.style.width = '50px';
      ring.style.height = '50px';
      ring.style.borderColor = 'rgba(212, 175, 106, 0.7)';
    };
    const onLeave = () => {
      ring.style.width = '34px';
      ring.style.height = '34px';
      ring.style.borderColor = 'rgba(212, 175, 106, 0.35)';
    };

    const targets = document.querySelectorAll('a, button, .project-card, .skill-category');
    targets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationId);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return { dotRef, ringRef };
}
