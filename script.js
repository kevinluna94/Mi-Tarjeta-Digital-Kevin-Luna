document.addEventListener('DOMContentLoaded', function() {
    // Configuración inicial
    init();
    
    // Efectos de interacción
    setupInteractions();
    
    // Inicializar partículas
    initParticles();
});

function init() {
    // Establecer año actual
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Efecto de entrada
    animateEntrance();
    
    // Mostrar mensaje de bienvenida
    showWelcomeMessage();
}

function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 40,
                    density: {
                        enable: true,
                        value_area: 1000
                    }
                },
                color: {
                    value: ["#3b82f6", "#8b5cf6", "#10b981"]
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.3,
                    random: true
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.1,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    }
}

function animateEntrance() {
    // Animación escalonada de elementos
    const elements = [
        '.profile-section',
        '.agency-integrated-section',
        '.action-buttons-section',
        '.skills-section',
        '.social-section',
        '.footer-quote'
    ];
    
    elements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100 + (index * 100));
        }
    });
}

function setupInteractions() {
    // Efecto de clic en botones principales
    const mainButtons = document.querySelectorAll('.datavantex-button, .action-button');
    mainButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Efecto de pulsación
            this.style.transform = 'scale(0.98)';
            
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Abrir enlace
            const href = this.getAttribute('href');
            if (href && !href.startsWith('#')) {
                e.preventDefault();
                setTimeout(() => {
                    window.open(href, '_blank');
                }, 200);
            }
        });
    });
    
    // Efecto hover para tarjetas de habilidades
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'rotate(10deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'rotate(0)';
            }
        });
    });
    
    // Efecto hover para enlaces sociales
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

function showWelcomeMessage() {
    setTimeout(() => {
        console.log('%c🚀 KEVIN LUNA - DATAVANTEX', 'color: #3b82f6; font-size: 20px; font-weight: 900;');
        console.log('%c💡 Transformando datos en soluciones inteligentes', 'color: #8b5cf6; font-size: 14px;');
        console.log('%c✨ Full Stack Development & Data Science', 'color: #10b981; font-size: 12px;');
    }, 1000);
}

// Atajos de teclado simples
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + D para Datavantex
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'd') {
        e.preventDefault();
        const datavantexBtn = document.querySelector('.datavantex-button');
        if (datavantexBtn) datavantexBtn.click();
    }
});

// Optimización para dispositivos táctiles
if ('ontouchstart' in window || navigator.maxTouchPoints) {
    document.body.classList.add('touch-device');
    
    // Mejorar experiencia táctil
    const interactiveElements = document.querySelectorAll('.datavantex-button, .action-button, .social-link, .skill-card');
    interactiveElements.forEach(element => {
        element.style.cursor = 'pointer';
        element.style.tapHighlightColor = 'transparent';
        element.style.webkitTapHighlightColor = 'transparent';
    });
}

// Efecto de carga inicial
window.addEventListener('load', function() {
    const card = document.querySelector('.card');
    if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(function() {
            card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Manejo de redimensionamiento
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Recargar partículas si es necesario
        if (typeof particlesJS !== 'undefined') {
            particlesJS();
        }
    }, 250);
});