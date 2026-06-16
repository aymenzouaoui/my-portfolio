import { academicTimeline, languages, softSkills } from '../data/education.js';
import Reveal from './Reveal.jsx';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <Reveal className="section-header">
          <p className="section-label"><span>05</span> Parcours</p>
          <h2>Éducation & <span className="gradient-text">Langues</span></h2>
        </Reveal>

        <div className="edu-grid">
          <Reveal className="edu-column">
            <h3 className="col-title"><i className="fa-solid fa-user-graduate"></i> Formation académique</h3>
            <div className="timeline-v2">
              {academicTimeline.map((item) => (
                <div className="tl-item" key={item.title}>
                  <div className={`tl-dot ${item.active ? 'active' : ''}`}></div>
                  <div className="tl-content">
                    <span className="tl-date">{item.date}</span>
                    <h4>{item.title}</h4>
                    <p className="tl-school">{item.school}</p>
                    <div className="tl-tags">
                      {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="lang-column">
            <h3 className="col-title"><i className="fa-solid fa-language"></i> Langues</h3>
            <div className="lang-list">
              {languages.map((lang) => (
                <div className="lang-item" key={lang.name}>
                  <div className="lang-header">
                    <span className="lang-name">{lang.flag} {lang.name}</span>
                    <span className="lang-level">{lang.level}</span>
                  </div>
                  <div className="lang-track">
                    <div className="lang-fill" style={{ '--pct': `${lang.pct}%` }}></div>
                  </div>
                  <div className="lang-dots">
                    {lang.dots.map((d, i) => (
                      <span
                        key={i}
                        className={`dot ${d === 1 ? 'filled' : d === 0.5 ? 'half' : ''}`}
                      ></span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="col-title" style={{ marginTop: 48 }}><i className="fa-solid fa-star"></i> Soft Skills</h3>
            <div className="soft-skills">
              {softSkills.map((skill) => (
                <span className="soft-pill" key={skill}>{skill}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
