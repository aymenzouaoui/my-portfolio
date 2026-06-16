document.addEventListener('DOMContentLoaded', () => {
    /* ---------- Mobile navigation ---------- */
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinksContainer = document.getElementById('navLinks');

    if (mobileToggle && navLinksContainer) {
        mobileToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('mobile-open');
            mobileToggle.classList.toggle('active');
        });

        navLinksContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('mobile-open');
                mobileToggle.classList.remove('active');
            });
        });
    }

    /* ---------- Smooth scroll ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 78, behavior: 'smooth' });
            }
        });
    });

    /* ---------- Scroll spy ---------- */
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const onScroll = () => {
        let current = '';
        sections.forEach(section => {
            if (window.pageYOffset >= section.offsetTop - 200) {
                current = section.id;
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === current);
        });

        const backToTop = document.getElementById('backToTop');
        if (backToTop) backToTop.classList.toggle('visible', window.pageYOffset > 500);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();

    /* ---------- Back to top ---------- */
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    /* ---------- Typed text effect ---------- */
    const typedEl = document.getElementById('typedText');
    if (typedEl) {
        const words = ['interfaces modernes', 'applications mobiles', 'pipelines DevOps', 'expériences fluides', 'solutions robustes'];
        let wordIndex = 0, charIndex = 0, deleting = false;

        const tick = () => {
            const word = words[wordIndex];
            if (!deleting) {
                charIndex++;
                typedEl.textContent = word.slice(0, charIndex);
                if (charIndex === word.length) {
                    deleting = true;
                    setTimeout(tick, 1600);
                    return;
                }
            } else {
                charIndex--;
                typedEl.textContent = word.slice(0, charIndex);
                if (charIndex === 0) {
                    deleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                }
            }
            setTimeout(tick, deleting ? 40 : 70);
        };
        tick();
    }

    /* ---------- Animated counters ---------- */
    const counters = document.querySelectorAll('[data-count]');
    const animateCounter = (el) => {
        const target = parseInt(el.getAttribute('data-count'), 10);
        const duration = 1200;
        const start = performance.now();
        const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            el.textContent = Math.floor(progress * target);
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = target;
        };
        requestAnimationFrame(step);
    };

    if (counters.length) {
        const counterObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });
        counters.forEach(c => counterObserver.observe(c));
    }

    /* ---------- Scroll reveal ---------- */
    const revealEls = document.querySelectorAll('[data-reveal], [data-reveal-right]');
    if (revealEls.length) {
        const revealObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
        revealEls.forEach(el => revealObserver.observe(el));
    }

    /* ---------- Project filtering ---------- */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');
                const matches = filterValue === 'all' || categories.includes(filterValue);

                if (matches) {
                    card.style.display = 'flex';
                    requestAnimationFrame(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    });
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => { card.style.display = 'none'; }, 250);
                }
            });
        });
    });

    /* ---------- Custom cursor ---------- */
    const cursorDot = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');

    if (cursorDot && cursorRing && window.matchMedia('(pointer: fine)').matches) {
        let ringX = 0, ringY = 0;

        window.addEventListener('mousemove', (e) => {
            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;
            ringX = e.clientX;
            ringY = e.clientY;
        });

        const animateRing = () => {
            cursorRing.style.left = `${ringX}px`;
            cursorRing.style.top = `${ringY}px`;
            requestAnimationFrame(animateRing);
        };
        animateRing();

        document.querySelectorAll('a, button, .project-card, .skill-category').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorRing.style.width = '50px';
                cursorRing.style.height = '50px';
                cursorRing.style.borderColor = 'rgba(0, 242, 254, 0.7)';
            });
            el.addEventListener('mouseleave', () => {
                cursorRing.style.width = '32px';
                cursorRing.style.height = '32px';
                cursorRing.style.borderColor = 'rgba(0, 242, 254, 0.4)';
            });
        });
    }

    /* ---------- Particle background ---------- */
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const PARTICLE_COUNT = Math.min(70, Math.floor(window.innerWidth / 18));
        particles = Array.from({ length: PARTICLE_COUNT }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.8 + 0.6,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
        }));

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'rgba(0, 242, 254, 0.5)';

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(draw);
        };
        draw();
    }

    /* ---------- CV PDF generation ---------- */
    const downloadCvBtn = document.getElementById('downloadCvBtn');
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', () => {
            if (typeof window.jspdf === 'undefined') {
                alert('Le générateur de PDF est en cours de chargement, réessayez dans un instant.');
                return;
            }

            const { jsPDF } = window.jspdf;
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
            const projects = [
                ['BlazeConnections', "Application mobile cross-platform (Flutter) sur Google Play & App Store — plateforme sociale de voyage propulsée par l'IA."],
                ['Sites Hôteliers Officiels — Groupe Accor', '4 sites de réservation hôtelière en production : booking engine, SEO, responsive.'],
                ['TaxiGo', 'Application full-stack de réservation de taxi & livraison, iOS/Android.'],
                ['Smart Store', "Système de gestion de point de vente (Node.js, React, Flutter)."],
                ['Pipeline CI/CD & Infrastructure', 'Jenkins, Docker, SonarQube, Prometheus, Grafana.'],
            ];
            projects.forEach(([title, desc]) => {
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
        });
    }

    /* ---------- Contact form ---------- */
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formFeedback.textContent = 'Message envoyé avec succès ! Je vous répondrai rapidement.';
            formFeedback.className = 'form-feedback success';
            contactForm.reset();
        });
    }
});
