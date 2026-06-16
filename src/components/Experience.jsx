import Reveal from './Reveal.jsx';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal className="section-header">
          <p className="section-label"><span>03</span> Expérience</p>
          <h2>Expérience <span className="gradient-text">Professionnelle</span></h2>
          <p className="section-sub">Le développement de sites web officiels en production pour un acteur hôtelier international.</p>
        </Reveal>

        <Reveal className="timeline-v2" style={{ maxWidth: 760, margin: '0 auto' }}>
          <div className="tl-item">
            <div className="tl-dot active"></div>
            <div className="tl-content">
              <span className="tl-date">En production</span>
              <h4>Développeur Web — Sites Officiels Groupe Accor</h4>
              <p className="tl-school">Développement et mise en production de 4 sites de réservation hôtelière : intégration du booking engine, optimisation SEO/Core Web Vitals, design responsive et performance maximale.</p>
              <div className="tl-tags">
                <span>ibistunis.com</span>
                <span>ibis-sfax.com</span>
                <span>novotel-tunis.com</span>
                <span>novotellac.com</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
