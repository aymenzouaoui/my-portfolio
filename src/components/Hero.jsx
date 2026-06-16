import { useTypedText } from '../hooks/useTypedText.js';
import { useCountUp } from '../hooks/useCountUp.js';
import { generateCvPdf } from '../utils/generateCv.js';
import Reveal from './Reveal.jsx';

const TYPED_WORDS = [
  'interfaces modernes',
  'applications mobiles',
  'pipelines DevOps',
  'expériences fluides',
  'solutions robustes',
];

function Stat({ value, label }) {
  const [ref, count] = useCountUp(value);
  return (
    <div className="stat">
      <span className="stat-val" ref={ref}>{count}</span><span className="stat-val">+</span>
      <span className="stat-lbl">{label}</span>
    </div>
  );
}

export default function Hero() {
  const typedText = useTypedText(TYPED_WORDS);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) window.scrollTo({ top: target.offsetTop - 78, behavior: 'smooth' });
  };

  return (
    <section id="about" className="hero">
      <div className="container hero-container">
        <Reveal className="hero-content">
          <div className="hero-tag">
            <span className="tag-dot"></span>
            Disponible pour des opportunités
          </div>
          <h1>
            Bonjour, je suis<br />
            <span className="name-line">Zouaoui <span className="gradient-text">Aymen</span></span>
          </h1>
          <div className="typed-wrapper">
            <span className="typed-prefix">Je construis des </span>
            <span className="typed-text">{typedText}</span>
            <span className="typed-cursor">|</span>
          </div>
          <p className="hero-bio">
            Ingénieur en Informatique passionné par la création d'architectures applicatives robustes et d'expériences utilisateur fluides.
            De la conception UI/UX au déploiement CI/CD, je maîtrise tout le cycle de développement logiciel.
          </p>

          <div className="hero-stats">
            <Stat value={4} label="Sites hôteliers en production" />
            <div className="stat-divider"></div>
            <Stat value={11} label="Projets réalisés" />
            <div className="stat-divider"></div>
            <Stat value={5} label="Technologies maîtrisées" />
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary-hero" onClick={(e) => scrollTo(e, 'projects')}>
              <span>Voir mes projets</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#contact" className="btn-ghost" onClick={(e) => scrollTo(e, 'contact')}>
              <i className="fa-regular fa-envelope"></i>
              <span>Contact</span>
            </a>
            <button type="button" className="btn-ghost" id="downloadCvBtn" onClick={generateCvPdf}>
              <i className="fa-solid fa-file-arrow-down"></i>
              <span>Télécharger CV</span>
            </button>
          </div>

          <div className="hero-contacts">
            <a href="tel:+21695398941" className="contact-chip"><i className="fa-solid fa-phone"></i> +216 95 398941</a>
            <a href="mailto:aymenzouaoui97@gmail.com" className="contact-chip"><i className="fa-solid fa-envelope"></i> aymenzouaoui97@gmail.com</a>
            <span className="contact-chip"><i className="fa-solid fa-location-dot"></i> Ariana, Tunisie</span>
          </div>
        </Reveal>

        <Reveal right className="hero-visual">
          <div className="avatar-wrapper">
            <div className="avatar-rings">
              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>
              <div className="ring ring-3"></div>
            </div>
            <div className="avatar-frame">
              <svg viewBox="0 0 220 220" className="avatar-svg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#d4af6a' }} />
                    <stop offset="100%" style={{ stopColor: '#5ec8e0' }} />
                  </linearGradient>
                  <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style={{ stopColor: '#1a2740' }} />
                    <stop offset="100%" style={{ stopColor: '#0d1526' }} />
                  </radialGradient>
                  <clipPath id="circleClip">
                    <circle cx="110" cy="110" r="100" />
                  </clipPath>
                </defs>
                <circle cx="110" cy="110" r="108" fill="url(#bgGrad)" stroke="url(#grad1)" strokeWidth="3" />
                <ellipse cx="110" cy="195" rx="65" ry="40" fill="#0c3660" clipPath="url(#circleClip)" />
                <rect x="98" y="148" width="24" height="25" rx="8" fill="#c8a07a" />
                <ellipse cx="110" cy="115" rx="42" ry="48" fill="#c8a07a" />
                <ellipse cx="110" cy="75" rx="42" ry="22" fill="#2c1a0e" />
                <rect x="68" y="76" width="12" height="30" rx="5" fill="#2c1a0e" />
                <rect x="140" y="76" width="12" height="30" rx="5" fill="#2c1a0e" />
                <ellipse cx="68" cy="115" rx="8" ry="11" fill="#c8a07a" />
                <ellipse cx="152" cy="115" rx="8" ry="11" fill="#c8a07a" />
                <rect x="76" y="105" width="32" height="22" rx="8" fill="none" stroke="url(#grad1)" strokeWidth="2.5" />
                <rect x="112" y="105" width="32" height="22" rx="8" fill="none" stroke="url(#grad1)" strokeWidth="2.5" />
                <line x1="108" y1="116" x2="112" y2="116" stroke="url(#grad1)" strokeWidth="2" />
                <line x1="76" y1="116" x2="70" y2="113" stroke="url(#grad1)" strokeWidth="2" />
                <line x1="144" y1="116" x2="150" y2="113" stroke="url(#grad1)" strokeWidth="2" />
                <ellipse cx="92" cy="116" rx="9" ry="8" fill="#1a3a5c" opacity="0.7" />
                <ellipse cx="128" cy="116" rx="9" ry="8" fill="#1a3a5c" opacity="0.7" />
                <ellipse cx="110" cy="148" rx="28" ry="10" fill="#8a5c3a" opacity="0.5" />
                <path d="M98 140 Q110 150 122 140" fill="none" stroke="#8a5c3a" strokeWidth="2" strokeLinecap="round" />
                <path d="M90 175 L110 185 L130 175 L125 168 L110 175 L95 168 Z" fill="#0a2e55" />
                <circle cx="168" cy="55" r="18" fill="#0f2540" stroke="url(#grad1)" strokeWidth="1.5" />
                <text x="168" y="60" textAnchor="middle" fontSize="14" fill="url(#grad1)" fontFamily="monospace">&lt;/&gt;</text>
              </svg>
            </div>

            <div className="float-badge badge-top-left"><i className="fa-brands fa-react"></i> React</div>
            <div className="float-badge badge-top-right"><i className="fa-brands fa-flutter"></i> Flutter</div>
            <div className="float-badge badge-bottom-left"><i className="fa-brands fa-docker"></i> Docker</div>
            <div className="float-badge badge-bottom-right"><i className="fa-brands fa-node-js"></i> Node</div>
          </div>
        </Reveal>
      </div>

      <a href="#skills" className="scroll-indicator" onClick={(e) => scrollTo(e, 'skills')}>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Défiler</span>
      </a>
    </section>
  );
}
