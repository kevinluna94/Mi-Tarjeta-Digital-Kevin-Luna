document.addEventListener('DOMContentLoaded', function() {
    // Configuración inicial
    init();
    
    // Efectos de interacción mejorados
    setupInteractions();
    
    // Crear partículas de fondo
    createParticles();
});

function init() {
    // Establecer año actual
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Efecto de entrada mejorado
    animateElements();
    
    // Mostrar mensaje de bienvenida
    showWelcomeMessage();
    
    // Inicializar efectos de brillo
    initGlowEffects();
}

function createParticles() {
    const container = document.querySelector('.particles-container');
    if (!container) return;
    
    // Crear partículas para el fondo
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Posición aleatoria
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        
        // Tamaño aleatorio
        const size = Math.random() * 4 + 1;
        
        // Color aleatorio de la paleta
        const colors = ['rgba(123, 104, 238, 0.6)', 'rgba(0, 206, 209, 0.6)', 'rgba(255, 107, 107, 0.6)'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Animación
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            left: ${left}%;
            top: ${top}%;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            animation: floatParticle ${duration}s ease-in-out infinite;
            animation-delay: ${delay}s;
            z-index: -1;
        `;
        
        container.appendChild(particle);
    }
    
    // Agregar estilos para la animación de partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0%, 100% {
                transform: translateY(0) translateX(0);
                opacity: 0.7;
            }
            25% {
                transform: translateY(-20px) translateX(10px);
                opacity: 0.9;
            }
            50% {
                transform: translateY(-10px) translateX(-10px);
                opacity: 0.5;
            }
            75% {
                transform: translateY(10px) translateX(5px);
                opacity: 0.8;
            }
        }
    `;
    document.head.appendChild(style);
}

function initGlowEffects() {
    // Agregar efecto de brillo a elementos clave
    const glowElements = document.querySelectorAll('.datavantex-button, .action-button, .skill-card, .social-link, .tech-item');
    
    glowElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const rect = this.getBoundingClientRect();
            const glow = document.createElement('div');
            glow.className = 'element-glow';
            
            const color = this.classList.contains('datavantex-button') ? '#7B68EE' :
                         this.classList.contains('portfolio') ? '#5D4FCC' :
                         this.classList.contains('store') ? '#9370DB' :
                         this.classList.contains('skill-card') ? '#7B68EE' :
                         this.classList.contains('linkedin') ? '#0077b5' :
                         this.classList.contains('github') ? '#ffffff' :
                         this.classList.contains('email') ? '#ea4335' :
                         this.classList.contains('whatsapp') ? '#25d366' :
                         this.classList.contains('tech-item') ? '#00CED1' : '#ffffff';
            
            glow.style.cssText = `
                position: fixed;
                top: ${rect.top}px;
                left: ${rect.left}px;
                width: ${rect.width}px;
                height: ${rect.height}px;
                background: radial-gradient(circle at center, ${color}30 0%, transparent 70%);
                border-radius: inherit;
                pointer-events: none;
                z-index: 0;
                opacity: 0;
                animation: glowAppear 0.3s forwards;
            `;
            
            document.body.appendChild(glow);
            
            this.glowElement = glow;
            
            // Actualizar posición en movimiento
            this.addEventListener('mousemove', updateGlowPosition);
        });
        
        element.addEventListener('mouseleave', function() {
            if (this.glowElement) {
                this.glowElement.style.animation = 'glowDisappear 0.3s forwards';
                setTimeout(() => {
                    if (this.glowElement && this.glowElement.parentNode) {
                        this.glowElement.parentNode.removeChild(this.glowElement);
                    }
                }, 300);
                
                this.removeEventListener('mousemove', updateGlowPosition);
            }
        });
    });
    
    function updateGlowPosition(e) {
        if (this.glowElement) {
            const rect = this.getBoundingClientRect();
            this.glowElement.style.top = `${rect.top}px`;
            this.glowElement.style.left = `${rect.left}px`;
        }
    }
    
    // Agregar estilos para el efecto de brillo
    const style = document.createElement('style');
    style.textContent = `
        @keyframes glowAppear {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1.1); }
        }
        
        @keyframes glowDisappear {
            from { opacity: 1; transform: scale(1.1); }
            to { opacity: 0; transform: scale(0.9); }
        }
        
        .element-glow {
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

function animateElements() {
    // Animación escalonada de elementos mejorada
    const elements = [
        '.profile-section',
        '.agency-section',
        '.datavantex-cta',
        '.action-buttons-section',
        '.skills-section',
        '.footer-quote',
        '.contact-section',
        '.stack-section'
    ];
    
    elements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(40px) scale(0.95)';
            element.style.transition = 'opacity 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) scale(1)';
            }, 300 + (index * 180));
        }
    });
    
    // Efecto especial para el título terciario
    const tertiaryTitle = document.querySelector('.animated-title');
    if (tertiaryTitle) {
        tertiaryTitle.style.animationDelay = '1s';
    }
}

function setupInteractions() {
    // Efecto de clic en botones de acción mejorado
    const actionButtons = document.querySelectorAll('.datavantex-button, .action-button, .social-link');
    actionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Efecto de pulsación mejorado
            this.style.transform = 'scale(0.96)';
            
            // Efecto de ondas
            createRippleEffect(e, this);
            
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Abrir enlace después de la animación
            const href = this.getAttribute('href');
            if (href && !href.startsWith('#')) {
                e.preventDefault();
                setTimeout(() => {
                    window.open(href, '_blank');
                }, 250);
            }
        });
    });
    
    // Efecto de ondas para botones
    function createRippleEffect(e, element) {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            top: ${y}px;
            left: ${x}px;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.7);
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 3;
            animation: ripple 0.6s ease-out;
        `;
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode === element) {
                ripple.remove();
            }
        }, 600);
    }
    
    // Agregar estilo para el efecto de ondas
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                width: 350px;
                height: 350px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
    
    // Efecto hover mejorado en tarjetas de habilidades
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'translateY(-10px) rotate(12deg)';
                icon.style.boxShadow = '0 15px 30px rgba(123, 104, 238, 0.3)';
            }
            
            // Efecto de elevación
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'translateY(0) rotate(0)';
                icon.style.boxShadow = '';
            }
            
            this.style.zIndex = '';
        });
    });
    
    // Efecto hover mejorado en enlaces sociales
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efecto hover mejorado en items del stack
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.06)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efecto de agencia mejorado
    const agencySection = document.querySelector('.agency-section');
    if (agencySection) {
        agencySection.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.agency-icon');
            if (icon) {
                icon.style.transform = 'rotate(22deg) scale(1.2)';
            }
            
            const name = this.querySelector('.agency-name');
            if (name) {
                name.style.background = 'linear-gradient(90deg, var(--primary-light), var(--secondary))';
                name.style.webkitBackgroundClip = 'text';
                name.style.backgroundClip = 'text';
            }
        });
        
        agencySection.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.agency-icon');
            if (icon) {
                icon.style.transform = 'rotate(0) scale(1)';
            }
            
            const name = this.querySelector('.agency-name');
            if (name) {
                name.style.background = 'linear-gradient(90deg, var(--primary), var(--secondary))';
                name.style.webkitBackgroundClip = 'text';
                name.style.backgroundClip = 'text';
            }
        });
    }
}

function showWelcomeMessage() {
    setTimeout(() => {
        console.log('%c💼 Kevin Luna - Desarrollador Full Stack & Data Scientist', 'color: #7B68EE; font-size: 22px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.3);');
        console.log('%c🚀 Transformando ideas en soluciones digitales', 'color: #00CED1; font-size: 18px; font-style: italic;');
        console.log('%c✨ ¡Gracias por visitar mi tarjeta de contacto!', 'color: #FF6B6B; font-size: 16px;');
        console.log('%c🔗 Conectemos: https://www.linkedin.com/in/kevin-luna-63bab512b/', 'color: #8A94A6; font-size: 14px;');
    }, 1000);
}

// Mejorar la experiencia de teclado
document.addEventListener('keydown', function(e) {
    // Atajos de teclado para los botones principales
    if (e.ctrlKey || e.metaKey) {
        switch(e.key.toLowerCase()) {
            case 'd':
                e.preventDefault();
                const datavantexBtn = document.querySelector('.datavantex-button');
                if (datavantexBtn) datavantexBtn.click();
                break;
            case 'p':
                e.preventDefault();
                const portfolioBtn = document.querySelector('.action-button.portfolio');
                if (portfolioBtn) portfolioBtn.click();
                break;
            case 't':
                e.preventDefault();
                const storeBtn = document.querySelector('.action-button.store');
                if (storeBtn) storeBtn.click();
                break;
        }
    }
    
    // Espacio para recargar animaciones
    if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        animateElements();
    }
});

// Prevenir efectos no deseados en dispositivos táctiles
let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;
if (isTouchDevice) {
    document.body.classList.add('touch-device');
    
    // Mejorar experiencia táctil
    const buttons = document.querySelectorAll('.datavantex-button, .action-button, .social-link');
    buttons.forEach(button => {
        button.style.cursor = 'pointer';
        button.style.tapHighlightColor = 'transparent';
        button.style.webkitTapHighlightColor = 'transparent';
    });
}

// Optimizar rendimiento
let ticking = false;
window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            // Efecto parallax sutil para el fondo
            const scrolled = window.pageYOffset;
            const gradientBg = document.querySelector('.gradient-bg');
            if (gradientBg) {
                gradientBg.style.transform = `translateY(${scrolled * 0.1}px)`;
            }
            ticking = false;
        });
        ticking = true;
    }
});

// Efecto de carga inicial mejorado
window.addEventListener('load', function() {
    const card = document.querySelector('.card');
    if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) scale(0.95)';
        
        setTimeout(function() {
            card.style.transition = 'opacity 1.2s ease, transform 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, 500);
    }
    
    // Efecto de brillo inicial para el nombre
    const nameAccent = document.querySelector('.name-accent');
    if (nameAccent) {
        setTimeout(() => {
            nameAccent.style.textShadow = '0 0 25px rgba(123, 104, 238, 0.6)';
            setTimeout(() => {
                nameAccent.style.textShadow = '';
                nameAccent.style.transition = 'text-shadow 1.2s ease';
            }, 1200);
        }, 1500);
    }
});

// Efecto de cambio de color sutil para el fondo
let hueRotation = 0;
setInterval(() => {
    hueRotation = (hueRotation + 0.2) % 360;
    const gradientBg = document.querySelector('.gradient-bg');
    if (gradientBg) {
        gradientBg.style.filter = `hue-rotate(${hueRotation}deg)`;
    }
}, 12000);