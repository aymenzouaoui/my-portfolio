import { useReveal } from '../hooks/useReveal.js';

export default function Reveal({ as: Tag = 'div', right = false, className = '', style, children, ...rest }) {
  const [ref, inView] = useReveal();
  const base = right ? 'data-reveal-right' : 'data-reveal';

  return (
    <Tag
      ref={ref}
      className={`${className} ${inView ? 'in-view' : ''}`.trim()}
      data-reveal={right ? undefined : true}
      data-reveal-right={right ? true : undefined}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
