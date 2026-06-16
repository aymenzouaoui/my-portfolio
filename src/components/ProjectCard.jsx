import Reveal from './Reveal.jsx';

export default function ProjectCard({ project, visible }) {
  const cardClass = [
    'project-card',
    project.featured ? 'featured-card' : '',
  ].filter(Boolean).join(' ');

  return (
    <Reveal
      className={cardClass}
      data-category={project.category}
      style={{ display: visible ? 'flex' : 'none' }}
    >
      <div className="card-top">
        <div className={`card-status ${project.status.type}`}>
          {project.status.type === 'live' && <span className="live-dot"></span>}
          {project.status.label}
        </div>
        {project.links && (
          <div className="card-links">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" title={link.title}>
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        )}
      </div>

      <div className={`card-icon ${project.iconClass}`}>
        <i className={project.icon}></i>
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      {project.siteLinks && (
        <div className="hotel-sites-grid">
          {project.siteLinks.map((site) => (
            <a key={site.href} href={site.href} target="_blank" rel="noreferrer" className="hotel-site-link">
              <i className={site.icon}></i>
              <span>{site.label}</span>
              <i className="fa-solid fa-external-link fa-xs"></i>
            </a>
          ))}
        </div>
      )}

      <div className="card-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </Reveal>
  );
}
