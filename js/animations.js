/* ============================================================
   ANIMATIONS ENGINE — Lorena Gómez Portfolio
   Scroll reveal, parallax, tilt, counters, cursor effects
   ============================================================ */

// ── Scroll Reveal with IntersectionObserver ─────────────────
class ScrollReveal {
    constructor() {
        this.reveals = [];
        this.observer = null;
        this.init();
    }

    init() {
        const options = {
            root: null,
            rootMargin: '0px 0px -80px 0px',
            threshold: 0.12
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Don't unobserve to allow re-animation if needed
                }
            });
        }, options);

        // Observe all reveal elements
        document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate').forEach(el => {
            this.observer.observe(el);
        });
    }

    refresh() {
        document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate').forEach(el => {
            if (!el.classList.contains('active')) {
                this.observer.observe(el);
            }
        });
    }
}

// ── Counter Animation ───────────────────────────────────────
class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('[data-count]');
        this.animated = new Set();
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated.has(entry.target)) {
                    this.animated.add(entry.target);
                    this.animateCounter(entry.target);
                }
            });
        }, { threshold: 0.5 });

        this.counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const suffix = element.getAttribute('data-suffix') || '';
        const prefix = element.getAttribute('data-prefix') || '';
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const startTime = performance.now();

        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            current = Math.floor(target * eased);

            element.textContent = prefix + current.toLocaleString() + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = prefix + target.toLocaleString() + suffix;
            }
        };

        requestAnimationFrame(update);
    }
}

// ── Skill Bars Animation ────────────────────────────────────
class SkillBars {
    constructor() {
        this.bars = document.querySelectorAll('.skill-progress-fill');
        this.animated = new Set();
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated.has(entry.target)) {
                    this.animated.add(entry.target);
                    this.animateBar(entry.target);
                }
            });
        }, { threshold: 0.3 });

        this.bars.forEach(bar => observer.observe(bar));
    }

    animateBar(bar) {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 200);
    }
}

// ── 3D Tilt Effect for Cards ────────────────────────────────
class TiltEffect {
    constructor(selector = '.tilt-card') {
        this.cards = document.querySelectorAll(selector);
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => this.handleMove(e, card));
            card.addEventListener('mouseleave', (e) => this.handleLeave(e, card));
            card.addEventListener('mouseenter', (e) => this.handleEnter(e, card));
        });
    }

    handleMove(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / centerY * -8;
        const rotateY = (x - centerX) / centerX * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
        
        // Move shine effect
        const shine = card.querySelector('.card-shine');
        if (shine) {
            shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(139, 92, 246, 0.15) 0%, transparent 60%)`;
        }
    }

    handleLeave(e, card) {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        card.style.transition = 'transform 0.5s ease';
        const shine = card.querySelector('.card-shine');
        if (shine) {
            shine.style.background = 'transparent';
        }
    }

    handleEnter(e, card) {
        card.style.transition = 'none';
    }
}

// ── Parallax Sections ───────────────────────────────────────
class ParallaxEffect {
    constructor() {
        this.elements = document.querySelectorAll('[data-parallax]');
        this.ticking = false;
        if (this.elements.length > 0) {
            this.init();
        }
    }

    init() {
        window.addEventListener('scroll', () => {
            if (!this.ticking) {
                requestAnimationFrame(() => {
                    this.update();
                    this.ticking = false;
                });
                this.ticking = true;
            }
        });
    }

    update() {
        const scrollY = window.pageYOffset;

        this.elements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax')) || 0.3;
            const rect = el.getBoundingClientRect();
            const inView = rect.top < window.innerHeight && rect.bottom > 0;

            if (inView) {
                const yPos = (scrollY - el.offsetTop) * speed;
                el.style.transform = `translateY(${yPos}px)`;
            }
        });
    }
}

// ── Magnetic Cursor Effect ──────────────────────────────────
class MagneticCursor {
    constructor() {
        this.cursor = null;
        this.cursorDot = null;
        // Only on desktop
        if (window.innerWidth > 1024) {
            this.init();
        }
    }

    init() {
        // Create custom cursor elements
        this.cursor = document.createElement('div');
        this.cursor.classList.add('custom-cursor');
        this.cursorDot = document.createElement('div');
        this.cursorDot.classList.add('custom-cursor-dot');
        document.body.appendChild(this.cursor);
        document.body.appendChild(this.cursorDot);

        let cursorX = 0, cursorY = 0;
        let dotX = 0, dotY = 0;

        document.addEventListener('mousemove', (e) => {
            cursorX = e.clientX;
            cursorY = e.clientY;
            // Dot follows instantly
            this.cursorDot.style.left = cursorX + 'px';
            this.cursorDot.style.top = cursorY + 'px';
        });

        // Smooth follow for outer cursor
        const animateCursor = () => {
            dotX += (cursorX - dotX) * 0.15;
            dotY += (cursorY - dotY) * 0.15;
            this.cursor.style.left = dotX + 'px';
            this.cursor.style.top = dotY + 'px';
            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        // Hover effects on interactive elements
        document.querySelectorAll('a, button, .tilt-card, input, textarea').forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.classList.add('cursor-hover');
                this.cursorDot.classList.add('cursor-dot-hover');
            });
            el.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('cursor-hover');
                this.cursorDot.classList.remove('cursor-dot-hover');
            });
        });
    }
}

// ── Text Scramble Effect ────────────────────────────────────
class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.frameRequest = null;
        this.frame = 0;
        this.queue = [];
        this.resolve = null;
    }

    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);
        this.queue = [];

        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }

        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }

    update() {
        let output = '';
        let complete = 0;

        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];

            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.chars[Math.floor(Math.random() * this.chars.length)];
                    this.queue[i].char = char;
                }
                output += `<span class="scramble-char">${char}</span>`;
            } else {
                output += from;
            }
        }

        this.el.innerHTML = output;

        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(() => this.update());
            this.frame++;
        }
    }
}

// ── Typed Text Effect ───────────────────────────────────────
class TypedText {
    constructor(element, texts, speed = 80, deleteSpeed = 40, pauseTime = 2000) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.deleteSpeed = deleteSpeed;
        this.pauseTime = pauseTime;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.init();
    }

    init() {
        this.type();
    }

    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.charIndex--;
            this.element.textContent = currentText.substring(0, this.charIndex);
        } else {
            this.charIndex++;
            this.element.textContent = currentText.substring(0, this.charIndex);
        }

        let timeout = this.isDeleting ? this.deleteSpeed : this.speed;

        if (!this.isDeleting && this.charIndex === currentText.length) {
            timeout = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            timeout = 500;
        }

        setTimeout(() => this.type(), timeout);
    }
}

// ── Smooth Scroll Sections ──────────────────────────────────
class SmoothNavigation {
    constructor() {
        this.links = document.querySelectorAll('a[href^="#"]');
        this.init();
    }

    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                if (targetId === '#') return;
                const target = document.querySelector(targetId);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    const mobileMenu = document.querySelector('.nav-menu');
                    if (mobileMenu && mobileMenu.classList.contains('active')) {
                        mobileMenu.classList.remove('active');
                        document.querySelector('.hamburger')?.classList.remove('active');
                    }
                }
            });
        });
    }
}

// ── Active Section Highlight ────────────────────────────────
class ActiveSectionTracker {
    constructor() {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    this.navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { rootMargin: '-50% 0px -50% 0px' });

        this.sections.forEach(section => observer.observe(section));
    }
}

// ── Initialize All Animations ───────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Core animations
    window.scrollReveal = new ScrollReveal();
    window.counterAnimation = new CounterAnimation();
    window.skillBars = new SkillBars();
    window.tiltEffect = new TiltEffect();
    window.parallaxEffect = new ParallaxEffect();
    window.smoothNav = new SmoothNavigation();
    window.sectionTracker = new ActiveSectionTracker();

    // Magnetic cursor (desktop only)
    window.magneticCursor = new MagneticCursor();

    // Typed text effect
    const typedElement = document.getElementById('typed-text');
    if (typedElement) {
        const texts = JSON.parse(typedElement.getAttribute('data-texts') || '[]');
        if (texts.length > 0) {
            new TypedText(typedElement, texts);
        }
    }
});
