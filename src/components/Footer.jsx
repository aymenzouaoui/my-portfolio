export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <span className="logo-bracket">&lt;</span>ZA<span className="logo-bracket">/&gt;</span>
        </div>
        <p className="footer-copy">&copy; 2026 Zouaoui Aymen. Conçu & développé avec <span className="heart">♥</span></p>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/aymen-zouaoui-b923a2266/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="https://github.com/aymenzouaoui" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
        </div>
      </div>
    </footer>
  );
}
