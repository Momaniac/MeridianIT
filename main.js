document.addEventListener('DOMContentLoaded', () => {
    // Referencias
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const header = document.querySelector('.main-header');

    // 1. Funcionalidad del Menú Móvil
    // Nota: El CSS actual oculta .nav-list en móvil por defecto.
    // Necesitamos añadir una clase 'active' en CSS para mostrarlo cuando se haga click.
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');

            // Cambia el icono de barras a X
            const icon = menuToggle.querySelector('i');
            if (navList.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Efecto de Scroll en Navbar
    // Cambia la opacidad o estilo al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Animación de Gráficas en App Mockup
    const chartBars = document.querySelectorAll('.chart-bar');

    if (chartBars.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    // Dejar de observar una vez animado
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 }); // Iniciar cuando el 50% sea visible

        chartBars.forEach(bar => observer.observe(bar));
    }
});