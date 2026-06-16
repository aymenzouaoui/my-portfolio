import { useState } from 'react';
import Reveal from './Reveal.jsx';

export default function Contact() {
  const [form, setForm] = useState({ fname: '', femail: '', fsubject: '', fmessage: '' });
  const [feedback, setFeedback] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback({ message: 'Message envoyé avec succès ! Je vous répondrai rapidement.', type: 'success' });
    setForm({ fname: '', femail: '', fsubject: '', fmessage: '' });
  };

  return (
    <section id="contact" className="section section-dark">
      <div className="container">
        <Reveal className="section-header">
          <p className="section-label"><span>06</span> Contact</p>
          <h2>Travaillons <span className="gradient-text">Ensemble</span></h2>
          <p className="section-sub">Disponible pour des stages, alternances ou projets freelance. Parlons-en !</p>
        </Reveal>

        <Reveal className="contact-grid-layout">
          <div className="contact-info-panel">
            <h3>Informations de contact</h3>
            <div className="contact-info-list">
              <a href="tel:+21695398941" className="contact-info-item">
                <div className="contact-info-icon"><i className="fa-solid fa-phone"></i></div>
                <div>
                  <span className="ci-label">Téléphone</span>
                  <span className="ci-value">+216 95 398 941</span>
                </div>
              </a>
              <a href="mailto:aymenzouaoui97@gmail.com" className="contact-info-item">
                <div className="contact-info-icon"><i className="fa-solid fa-envelope"></i></div>
                <div>
                  <span className="ci-label">E-mail</span>
                  <span className="ci-value">aymenzouaoui97@gmail.com</span>
                </div>
              </a>
              <div className="contact-info-item">
                <div className="contact-info-icon"><i className="fa-solid fa-location-dot"></i></div>
                <div>
                  <span className="ci-label">Localisation</span>
                  <span className="ci-value">Ariana, Tunisie</span>
                </div>
              </div>
            </div>
            <div className="social-row">
              <a href="https://www.linkedin.com/in/aymen-zouaoui-b923a2266/" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="https://github.com/aymenzouaoui" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
              <a href="mailto:aymenzouaoui97@gmail.com" className="social-btn" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
            </div>
          </div>

          <form id="contactForm" className="contact-form-panel" onSubmit={handleSubmit}>
            <div className="form-row-grid">
              <div className="field">
                <label htmlFor="fname">Nom complet</label>
                <input type="text" id="fname" placeholder="Jean Dupont" required value={form.fname} onChange={handleChange} />
              </div>
              <div className="field">
                <label htmlFor="femail">E-mail</label>
                <input type="email" id="femail" placeholder="vous@exemple.com" required value={form.femail} onChange={handleChange} />
              </div>
            </div>
            <div className="field">
              <label htmlFor="fsubject">Sujet</label>
              <input type="text" id="fsubject" placeholder="Proposition de collaboration..." required value={form.fsubject} onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="fmessage">Message</label>
              <textarea id="fmessage" rows="5" placeholder="Bonjour Aymen, je voudrais..." required value={form.fmessage} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn-submit">
              <span>Envoyer le message</span>
              <i className="fa-solid fa-paper-plane"></i>
            </button>
            <div className={`form-feedback ${feedback.type}`} id="formFeedback">{feedback.message}</div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
