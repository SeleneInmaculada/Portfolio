// Script para el portafolio

// Función para el menú hamburguesa
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');

    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Event listener para el menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');

    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // Smooth scrolling para los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Ajuste para el header fijo

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

            // Cerrar menú móvil después de hacer clic
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');

            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Animación de las barras de habilidades al hacer scroll
    const skillBars = document.querySelectorAll('.skill-fill');

    function animateSkillBars() {
        skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (barTop < windowHeight - 50) {
                bar.style.width = bar.style.width || '0%';
            }
        });
    }

    // Ejecutar animación al cargar la página y al hacer scroll
    animateSkillBars();
    window.addEventListener('scroll', animateSkillBars);

    // Animación de entrada para las secciones
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observar todas las secciones
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Manejo del formulario de contacto (simulado)
    const contactForm = document.querySelector('.contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Aquí iría la lógica para enviar el formulario
            alert('¡Gracias por tu mensaje! Te contactaré pronto.');

            // Limpiar el formulario
            this.reset();
        });
    }
});

// Agregar clase para animaciones CSS
document.addEventListener('DOMContentLoaded', function() {
    // Agregar clase de animación a elementos cuando sean visibles
    const style = document.createElement('style');
    style.textContent = `
        section {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }

        section.animate-in {
            opacity: 1;
            transform: translateY(0);
        }

        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: white;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }

        .hamburger.active .bar:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }

        .hamburger.active .bar:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active .bar:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }

        @media (min-width: 769px) {
            .nav-menu.active {
                display: flex;
                position: static;
                flex-direction: row;
                box-shadow: none;
                padding: 0;
            }
        }
    `;
    document.head.appendChild(style);
});