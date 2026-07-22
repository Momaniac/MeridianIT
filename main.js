// =========================================
// 0. ALTO DEL CHROME FIJO (barra promo + header)
// =========================================
// La barra promo y el header son position:fixed, así que no ocupan espacio en
// el flujo: sin reservarlo, el contenido del hero queda por debajo de ellos.
// Antes se compensaba con números fijos repetidos por breakpoint (80, 100,
// 150, 160, 165px...) que no coincidían con el alto real y recortaban el logo.
// Aquí se mide el alto de verdad y se publica en CSS como --promo-h/--header-h.
// Al medirlo en lugar de suponerlo, funciona en cualquier tamaño de pantalla y
// aguanta cambios de contenido (otro texto en la barra, un logo más alto, etc.)
// sin tener que volver a tocar el CSS.
function syncChromeHeight() {
    const root = document.documentElement;
    const promo = document.getElementById('promo-bar');
    const header = document.querySelector('.main-header');

    // La marquesina es permanente, pero no todas las páginas la llevan
    // (gantt, privacy y sitemap no), así que se comprueba si existe.
    const promoVisible = promo && getComputedStyle(promo).display !== 'none';

    root.style.setProperty('--promo-h', (promoVisible ? promo.offsetHeight : 0) + 'px');
    if (header) {
        root.style.setProperty('--header-h', header.offsetHeight + 'px');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    syncChromeHeight();

    // Las fuentes web y el logo cambian el alto del header al terminar de
    // cargar, así que se vuelve a medir en 'load'.
    window.addEventListener('load', syncChromeHeight);

    // Cambios de tamaño y de orientación (throttled con rAF)
    let pending = false;
    window.addEventListener('resize', () => {
        if (pending) return;
        pending = true;
        requestAnimationFrame(() => {
            pending = false;
            syncChromeHeight();
        });
    });

    // Si la barra o el header cambian de alto por sí solos (texto que pasa a
    // dos líneas, cierre de la promo), ResizeObserver lo detecta sin depender
    // de que alguien se acuerde de avisar.
    if ('ResizeObserver' in window) {
        const ro = new ResizeObserver(syncChromeHeight);
        const promo = document.getElementById('promo-bar');
        const headerEl = document.querySelector('.main-header');
        if (promo) ro.observe(promo);
        if (headerEl) ro.observe(headerEl);
    }

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