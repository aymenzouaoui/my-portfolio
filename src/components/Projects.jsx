import { useState } from 'react';
import { projects, filters } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import Reveal from './Reveal.jsx';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const isVisible = (project) =>
    activeFilter === 'all' || project.category.split(' ').includes(activeFilter);

  return (
    <section id="projects" className="section section-dark">
      <div className="container">
        <Reveal className="section-header">
          <p className="section-label"><span>04</span> Projets</p>
          <h2>Projets & <span className="gradient-text">Réalisations</span></h2>
          <p className="section-sub">Des projets réels livrés en production — de l'idée au déploiement.</p>
        </Reveal>

        <Reveal className="filter-bar">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`filter-btn ${activeFilter === f.value ? 'active' : ''}`}
              data-filter={f.value}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label} {f.value === 'all' && <span className="filter-count">{projects.length}</span>}
            </button>
          ))}
        </Reveal>

        <div className="projects-grid" id="projectsGrid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} visible={isVisible(project)} />
          ))}
        </div>
      </div>
    </section>
  );
}
