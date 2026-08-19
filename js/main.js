/* ============================================================
   MAIN JS — Lorena Gómez Premium Portfolio
   Core logic: preloader, nav, theme, back-to-top, testimonials
   ============================================================ */

// ── Preloader ───────────────────────────────────────────────
class Preloader {
    constructor() {
        this.preloader = document.getElementById('preloader');
        this.progressBar = document.getElementById('preloader-progress');
        this.percentage = document.getElementById('preloader-percentage');
        this.init();
    }

    init() {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15 + 5;
            if (progress > 100) progress = 100;
            
            if (this.progressBar) this.progressBar.style.width = progress + '%';
            if (this.percentage) this.percentage.textContent = Math.floor(progress) + '%';

            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => this.hide(), 400);
            }
        }, 150);
    }

    hide() {
        if (this.preloader) {
            this.preloader.classList.add('preloader-hidden');
            document.body.classList.remove('loading');
            setTimeout(() => {
                this.preloader.style.display = 'none';
            }, 600);
        }
    }
}

// ── Navigation ──────────────────────────────────────────────
class Navigation {
    constructor() {
        this.nav = document.getElementById('navbar');
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.lastScroll = 0;
        this.init();
    }

    init() {
        // Scroll behavior
        window.addEventListener('scroll', () => this.handleScroll());

        // Hamburger toggle
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => this.toggleMenu());
        }

        // Close menu on link click
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (this.navMenu.classList.contains('active')) {
                    this.toggleMenu();
                }
            });
        });

        // Close menu on outside click
        document.addEventListener('click', (e) => {
            if (this.navMenu && this.navMenu.classList.contains('active') &&
                !this.navMenu.contains(e.target) && !this.hamburger.contains(e.target)) {
                this.toggleMenu();
            }
        });
    }

    handleScroll() {
        const scrollY = window.pageYOffset;

        // Add/remove scrolled class
        if (scrollY > 50) {
            this.nav.classList.add('scrolled');
        } else {
            this.nav.classList.remove('scrolled');
        }

        // Hide/show on scroll direction
        if (scrollY > this.lastScroll && scrollY > 200) {
            this.nav.classList.add('nav-hidden');
        } else {
            this.nav.classList.remove('nav-hidden');
        }

        this.lastScroll = scrollY;
    }

    toggleMenu() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }
}

// ── Theme Toggle (Dark/Light) ───────────────────────────────
class ThemeToggle {
    constructor() {
        this.toggle = document.getElementById('theme-toggle');
        this.theme = localStorage.getItem('portfolio-theme') || 'dark';
        this.init();
    }

    init() {
        // Apply saved theme
        document.documentElement.setAttribute('data-theme', this.theme);
        this.updateIcon();

        if (this.toggle) {
            this.toggle.addEventListener('click', () => this.switchTheme());
        }
    }

    switchTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('portfolio-theme', this.theme);
        this.updateIcon();
    }

    updateIcon() {
        if (!this.toggle) return;
        const icon = this.toggle.querySelector('.theme-icon');
        if (icon) {
            icon.textContent = this.theme === 'dark' ? '☀️' : '🌙';
        }
    }
}

// ── Back to Top ─────────────────────────────────────────────
class BackToTop {
    constructor() {
        this.button = document.getElementById('back-to-top');
        this.progressCircle = document.getElementById('scroll-progress-circle');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());

        if (this.button) {
            this.button.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    handleScroll() {
        const scrollY = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollY / docHeight) * 100;

        // Show/hide button
        if (scrollY > 400) {
            this.button?.classList.add('visible');
        } else {
            this.button?.classList.remove('visible');
        }

        // Update progress circle
        if (this.progressCircle) {
            const circumference = 2 * Math.PI * 20;
            const offset = circumference - (scrollPercent / 100) * circumference;
            this.progressCircle.style.strokeDashoffset = offset;
        }
    }
}

// ── Testimonials Carousel ───────────────────────────────────
class TestimonialCarousel {
    constructor() {
        this.track = document.querySelector('.testimonial-track');
        this.cards = document.querySelectorAll('.testimonial-card');
        this.prevBtn = document.getElementById('testimonial-prev');
        this.nextBtn = document.getElementById('testimonial-next');
        this.dotsContainer = document.querySelector('.testimonial-dots');
        this.currentIndex = 0;
        this.autoplayInterval = null;
        this.cardWidth = 0;
        
        if (this.cards.length > 0) {
            this.init();
        }
    }

    init() {
        this.createDots();
        this.updateLayout();
        this.addEventListeners();
        this.startAutoplay();

        window.addEventListener('resize', () => this.updateLayout());
    }

    createDots() {
        if (!this.dotsContainer) return;
        this.cards.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.classList.add('testimonial-dot');
            if (i === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', `Testimonio ${i + 1}`);
            dot.addEventListener('click', () => this.goTo(i));
            this.dotsContainer.appendChild(dot);
        });
    }

    updateLayout() {
        if (!this.track) return;
        const container = this.track.parentElement;
        this.cardWidth = container.offsetWidth;
        this.goTo(this.currentIndex);
    }

    addEventListeners() {
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());

        // Touch/swipe
        let startX = 0;
        if (this.track) {
            this.track.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                this.stopAutoplay();
            });
            this.track.addEventListener('touchend', (e) => {
                const diff = startX - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 50) {
                    diff > 0 ? this.next() : this.prev();
                }
                this.startAutoplay();
            });

            // Pause on hover
            this.track.addEventListener('mouseenter', () => this.stopAutoplay());
            this.track.addEventListener('mouseleave', () => this.startAutoplay());
        }
    }

    goTo(index) {
        if (index < 0) index = this.cards.length - 1;
        if (index >= this.cards.length) index = 0;
        this.currentIndex = index;

        if (this.track) {
            this.track.style.transform = `translateX(-${index * 100}%)`;
        }

        // Update dots
        document.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    prev() { this.goTo(this.currentIndex - 1); }
    next() { this.goTo(this.currentIndex + 1); }

    startAutoplay() {
        this.stopAutoplay();
        this.autoplayInterval = setInterval(() => this.next(), 5000);
    }

    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
}

// ── Portfolio Filter ────────────────────────────────────────
class PortfolioFilter {
    constructor() {
        this.buttons = document.querySelectorAll('.filter-btn');
        this.items = document.querySelectorAll('.portfolio-item');
        this.init();
    }

    init() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                this.filterItems(filter);
                this.buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    filterItems(filter) {
        this.items.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                item.style.display = '';
                item.style.animation = 'scaleIn 0.5s ease forwards';
            } else {
                item.style.animation = 'none';
                item.style.display = 'none';
            }
        });
    }
}

// ── Form Validation ─────────────────────────────────────────
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        if (this.form) this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Real-time validation
        this.form.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('blur', () => this.validateField(field));
            field.addEventListener('input', () => {
                if (field.classList.contains('error')) {
                    this.validateField(field);
                }
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let message = '';

        if (field.hasAttribute('required') && !value) {
            isValid = false;
            message = 'Este campo es requerido';
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                message = 'Ingresa un email válido';
            }
        }

        const errorEl = field.parentElement.querySelector('.field-error');
        if (!isValid) {
            field.classList.add('error');
            field.classList.remove('valid');
            if (errorEl) errorEl.textContent = message;
        } else if (value) {
            field.classList.remove('error');
            field.classList.add('valid');
            if (errorEl) errorEl.textContent = '';
        } else {
            field.classList.remove('error', 'valid');
            if (errorEl) errorEl.textContent = '';
        }

        return isValid;
    }

    handleSubmit(e) {
        e.preventDefault();
        let isFormValid = true;

        this.form.querySelectorAll('input, textarea').forEach(field => {
            if (!this.validateField(field)) isFormValid = false;
        });

        if (isFormValid) {
            const submitBtn = this.form.querySelector('.submit-btn');
            submitBtn.classList.add('sending');
            submitBtn.innerHTML = '<span class="btn-spinner"></span> Enviando...';

            // Simulate send (replace with actual API)
            setTimeout(() => {
                submitBtn.classList.remove('sending');
                submitBtn.classList.add('sent');
                submitBtn.innerHTML = '✓ ¡Mensaje Enviado!';

                this.showNotification('¡Mensaje enviado exitosamente! Lorena te contactará pronto. 💜');

                setTimeout(() => {
                    this.form.reset();
                    submitBtn.classList.remove('sent');
                    submitBtn.innerHTML = 'Enviar Mensaje <span class="btn-icon">→</span>';
                    this.form.querySelectorAll('.valid, .error').forEach(f => f.classList.remove('valid', 'error'));
                }, 3000);
            }, 2000);
        }
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.classList.add('form-notification');
        notification.innerHTML = `<p>${message}</p>`;
        document.body.appendChild(notification);

        setTimeout(() => notification.classList.add('visible'), 100);
        setTimeout(() => {
            notification.classList.remove('visible');
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }
}

// ── WhatsApp Button ─────────────────────────────────────────
class WhatsAppButton {
    constructor() {
        this.init();
    }

    init() {
        const btn = document.getElementById('whatsapp-btn');
        if (btn) {
            btn.addEventListener('click', () => {
                const phone = btn.getAttribute('data-phone') || '';
                const message = encodeURIComponent('¡Hola Lorena! Vi tu portafolio y me gustaría saber más sobre tus servicios. 💼');
                window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
            });
        }
    }
}

// ── Custom Cursor ──────────────────────────────────────────
class CustomCursor {
    constructor() {
        this.dot = document.getElementById('cursor-dot');
        this.outline = document.getElementById('cursor-outline');
        
        if (!this.dot || !this.outline) return;

        this.init();
    }

    init() {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Instant dot
            this.dot.style.left = `${posX}px`;
            this.dot.style.top = `${posY}px`;

            // Delayed outline
            this.outline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Hover effects
        const interactives = document.querySelectorAll('a, button, input, textarea, .nav-link, .filter-btn, .portfolio-item');
        
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => {
                document.body.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                document.body.classList.remove('cursor-hover');
            });
        });
    }
}

// ── Initialize Everything ───────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Body loading state
    document.body.classList.add('loading');

    // Core systems
    new CustomCursor();
    new Preloader();
    new Navigation();
    new ThemeToggle();
    new BackToTop();
    new TestimonialCarousel();
    new PortfolioFilter();
    new ContactForm();
    new WhatsAppButton();
});

// ── Service Worker Registration ─────────────────────────────
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {
            // SW registration failed, continue without it
        });
    });
}
