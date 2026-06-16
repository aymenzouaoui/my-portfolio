import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds, offset = 200) {
  const [active, setActive] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const onScroll = () => {
      let current = active;
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.pageYOffset >= el.offsetTop - offset) {
          current = id;
        }
      });
      setActive(current);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds, offset]);

  return active;
}
