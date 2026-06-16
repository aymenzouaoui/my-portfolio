import { useState } from 'react';
import { useTheme } from '../hooks/useTheme.js';

const NAV_ITEMS = [
  { id: 'about', label: 'À Propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'experience', label: 'Expérience' },
  { id: 'projects', label: 'Projets' },
  { id: 'education', label: 'Parcours' },
  { id: 'contact', label: 'Contact' },
];

export default function Header({ activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 78, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <a href="#about" className="logo" onClick={(e) => handleNavClick(e, 'about')}>
          <span className="logo-bracket">&lt;</span>ZA<span className="logo-bracket">/&gt;</span>
        </a>
        <ul className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`} id="navLinks">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                data-section={item.id}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <button
            type="button"
            className="theme-toggle"
            aria-label="Changer de thème"
            onClick={toggleTheme}
          >
            <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}></i>
          </button>
          <a href="#contact" className="btn-hire" onClick={(e) => handleNavClick(e, 'contact')}>
            Me recruter <i className="fa-solid fa-arrow-right"></i>
          </a>
          <button
            className={`mobile-toggle ${mobileOpen ? 'active' : ''}`}
            id="mobileToggle"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
