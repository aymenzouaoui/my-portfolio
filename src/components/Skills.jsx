import { skillCategories } from '../data/skills.js';
import Reveal from './Reveal.jsx';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal as="div" className="section-header">
          <p className="section-label"><span>02</span> Compétences</p>
          <h2>Mon <span className="gradient-text">Expertise Technique</span></h2>
          <p className="section-sub">Un stack technologique complet couvrant le développement full-stack, mobile, DevOps et IA.</p>
        </Reveal>

        <div className="skills-wrapper">
          {skillCategories.map((cat) => (
            <Reveal key={cat.title} className="skill-category">
              <div className="skill-cat-header">
                <div className={`skill-cat-icon ${cat.iconClass}`}><i className={cat.icon}></i></div>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-pills">
                {cat.pills.map((pill) => (
                  <span className="pill" key={pill}>{pill}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
