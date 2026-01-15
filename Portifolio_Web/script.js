/* ========================================
   MODERN PORTFOLIO JS - EDUARDO ABRAHAO
   Interactive Features & Animations
   ======================================== */

// Utility: Debounce function
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Navigation Handler
class Navigation {
    constructor() {
        this.nav = document.querySelector('.nav');
        this.mobileToggle = document.querySelector('.mobile-menu-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-menu a');
        this.init();
    }

    init() {
        this.handleScroll();
        this.handleMobileMenu();
        this.handleSmoothScroll();
    }

    handleScroll() {
        window.addEventListener('scroll', debounce(() => {
            if (window.pageYOffset > 50) {
                this.nav.classList.add('scrolled');
            } else {
                this.nav.classList.remove('scrolled');
            }
        }, 10));
    }

    handleMobileMenu() {
        if (!this.mobileToggle) return;

        this.mobileToggle.addEventListener('click', () => {
            this.navMenu.classList.toggle('active');
        });

        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.navMenu.classList.remove('active');
            });
        });
    }

    handleSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    
                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        this.init();
    }

    init() {
        this.observeElements();
    }

    observeElements() {
        const elementsToAnimate = [
            '.about-text',
            '.about-image',
            '.highlight-item',
            '.project-card',
            '.experience-card',
            '.stack-category',
            '.contact-info',
            '.contact-cta-card'
        ];

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in', 'visible');
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        elementsToAnimate.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((el, index) => {
                el.classList.add('fade-in');
                el.style.transitionDelay = `${index * 0.1}s`;
                observer.observe(el);
            });
        });
    }
}

// Typing Animation for Hero
class TypingAnimation {
    constructor() {
        this.element = document.querySelector('.gradient-text');
        this.texts = ['produtos reais', 'soluções escaláveis', 'impacto mensurável'];
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.typingSpeed = 100;
        this.deletingSpeed = 50;
        this.pauseTime = 2000;
        
        if (this.element) {
            this.init();
        }
    }

    init() {
        setTimeout(() => this.type(), 1000);
    }

    type() {
        const currentText = this.texts[this.currentTextIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
        }
        
        let timeoutDuration = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
        
        if (!this.isDeleting && this.currentCharIndex === currentText.length) {
            timeoutDuration = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            this.isDeleting = false;
            this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
        }
        
        setTimeout(() => this.type(), timeoutDuration);
    }
}

// Stats Counter Animation
class StatsCounter {
    constructor() {
        this.init();
    }

    init() {
        const counters = document.querySelectorAll('.highlight-number, .metric-value');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element) {
        const text = element.textContent;
        const hasPlus = text.includes('+');
        const number = parseInt(text.replace(/[^\d]/g, ''));
        
        if (isNaN(number)) return;
        
        const duration = 2000;
        const steps = 60;
        const increment = number / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= number) {
                clearInterval(timer);
                current = number;
            }
            
            let displayValue = Math.floor(current).toString();
            if (hasPlus) displayValue += '+';
            
            element.textContent = displayValue;
        }, duration / steps);
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
    new ScrollAnimations();
    new TypingAnimation();
    new StatsCounter();
    
    console.log('Portfolio initialized successfully!');
});
