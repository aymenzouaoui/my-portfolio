import { jsPDF } from 'jspdf';

export function generateCvPdf() {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 50;
  const contentWidth = pageWidth - margin * 2;
  let y = 56;

  const gold = [180, 140, 70];
  const dark = [25, 30, 45];
  const gray = [110, 118, 135];

  const addSectionTitle = (title) => {
    y += 10;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(...gold);
    doc.text(title.toUpperCase(), margin, y);
    y += 6;
    doc.setDrawColor(...gold);
    doc.setLineWidth(1);
    doc.line(margin, y, pageWidth - margin, y);
    y += 18;
  };

  const addWrappedText = (text, fontSize = 10, color = dark, lineHeight = 14) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(fontSize);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, contentWidth);
    doc.text(lines, margin, y);
    y += lines.length * lineHeight;
  };

  const ensureSpace = (needed) => {
    if (y + needed > doc.internal.pageSize.getHeight() - margin) {
      doc.addPage();
      y = 56;
    }
  };

  // Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(...dark);
  doc.text('Zouaoui Aymen', margin, y);
  y += 22;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(...gold);
  doc.text('Ingénieur en Informatique — Web, Mobile, DevOps & Vision par Ordinateur', margin, y);
  y += 20;
  doc.setFontSize(9.5);
  doc.setTextColor(...gray);
  doc.text('+216 95 398 941   |   aymenzouaoui97@gmail.com   |   Ariana, Tunisie', margin, y);
  y += 8;
  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(0.75);
  doc.line(margin, y, pageWidth - margin, y);
  y += 22;

  // Profile
  addSectionTitle('Profil');
  addWrappedText(
    "Ingénieur en Informatique passionné par la création d'architectures applicatives robustes et d'expériences utilisateur fluides. De la conception UI/UX au déploiement CI/CD, je maîtrise tout le cycle de développement logiciel (Web, Mobile, DevOps, Vision par Ordinateur)."
  );
  y += 6;

  // Experience
  ensureSpace(70);
  addSectionTitle('Expérience professionnelle');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...dark);
  doc.text('Développeur Web — Sites Officiels Groupe Accor (en production)', margin, y);
  y += 16;
  addWrappedText(
    "Développement et mise en production de 4 sites de réservation hôtelière : intégration du booking engine, optimisation SEO/Core Web Vitals, design responsive et performance maximale. (ibistunis.com, ibis-sfax.com, novotel-tunis.com, novotellac.com)"
  );
  y += 8;

  // Skills
  ensureSpace(140);
  addSectionTitle('Compétences techniques');
  const skillGroups = [
    ['Backend', 'Node.js, Spring Boot, .NET/C#, Symfony/PHP, REST APIs, GraphQL'],
    ['Frontend', 'React.js, Next.js, Angular, HTML5/CSS3, JavaScript ES6+, Bootstrap'],
    ['Mobile', 'Flutter/Dart, Kotlin (Android), Swift/iOS, React Native'],
    ['DevOps & Cloud', 'Docker, Jenkins CI/CD, Prometheus, Grafana, SonarQube, Vagrant, Nexus'],
    ['Bases de données', 'MySQL, PostgreSQL, MongoDB, SQL Server'],
    ['Vision & IA', "OpenCV, Traitement d'images, Détection d'objets, Algorithmes IA"],
  ];
  skillGroups.forEach(([label, value]) => {
    ensureSpace(20);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...dark);
    doc.text(`${label}:`, margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...gray);
    const labelWidth = doc.getTextWidth(`${label}: `);
    const lines = doc.splitTextToSize(value, contentWidth - labelWidth);
    doc.text(lines, margin + labelWidth, y);
    y += lines.length * 14 + 4;
  });
  y += 4;

  // Projects
  ensureSpace(60);
  addSectionTitle('Projets clés');
  const projectsList = [
    ['BlazeConnections', "Application mobile cross-platform (Flutter) sur Google Play & App Store — plateforme sociale de voyage propulsée par l'IA."],
    ['Sites Hôteliers Officiels — Groupe Accor', '4 sites de réservation hôtelière en production : booking engine, SEO, responsive.'],
    ['TaxiGo', 'Application full-stack de réservation de taxi & livraison, iOS/Android.'],
    ['Smart Store', 'Système de gestion de point de vente (Node.js, React, Flutter).'],
    ['Pipeline CI/CD & Infrastructure', 'Jenkins, Docker, SonarQube, Prometheus, Grafana.'],
  ];
  projectsList.forEach(([title, desc]) => {
    ensureSpace(34);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(...dark);
    doc.text(title, margin, y);
    y += 13;
    addWrappedText(desc, 9.5, gray, 12.5);
    y += 4;
  });

  // Education
  ensureSpace(70);
  addSectionTitle('Formation');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(...dark);
  doc.text("Diplôme d'Ingénieur en Informatique — ESPRIT (2022 – 2025)", margin, y);
  y += 15;
  doc.setFont('helvetica', 'bold');
  doc.text('Licence en Informatique & Multimédia — ISAMM (2018 – 2021)', margin, y);
  y += 18;

  // Languages
  ensureSpace(40);
  addSectionTitle('Langues');
  addWrappedText('Arabe (Maternelle)   •   Français (Courant / B2)   •   Anglais (Technique / B1)', 10, dark, 14);

  doc.save('Zouaoui_Aymen_CV.pdf');
}
