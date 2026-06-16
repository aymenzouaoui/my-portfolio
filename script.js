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
