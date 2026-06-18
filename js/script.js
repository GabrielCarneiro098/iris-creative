// Index — menu lateral mobile

(function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const mainNav = document.querySelector('.main-nav');
    const navOverlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('.nav-list a');
    const mobileMedia = window.matchMedia('(max-width: 56.25rem)');

    if (!menuToggle || !mainNav || !navOverlay) {
        return;
    }

    function openMenu() {
        mainNav.classList.add('is-open');
        navOverlay.classList.add('is-visible');
        menuToggle.classList.add('is-active');
        menuToggle.setAttribute('aria-expanded', 'true');
        navOverlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('menu-open');
    }

    function closeMenu() {
        mainNav.classList.remove('is-open');
        navOverlay.classList.remove('is-visible');
        menuToggle.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', 'false');
        navOverlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('menu-open');
    }

    function toggleMenu() {
        if (mainNav.classList.contains('is-open')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    menuToggle.addEventListener('click', toggleMenu);
    menuClose.addEventListener('click', closeMenu);
    navOverlay.addEventListener('click', closeMenu);

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (mobileMedia.matches) {
                closeMenu();
            }
        });
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && mainNav.classList.contains('is-open')) {
            closeMenu();
        }
    });

    mobileMedia.addEventListener('change', function () {
        if (!mobileMedia.matches) {
            closeMenu();
        }
    });
})();

window.sr = ScrollReveal({reset: true});

sr.reveal('.design-matters', {duration: 1500});
sr.reveal('.paragraph-1', {duration: 1500});
sr.reveal('.imagem-1', {duration: 1500});
sr.reveal('.paragraph-2', {duration: 1500});
sr.reveal('.this-project', {duration: 1500});
sr.reveal('.full-portfolio', {duration: 1500});
sr.reveal('.paragraph-3', {duration: 1500});
sr.reveal('.fade-born', {duration: 1500});
sr.reveal('.our-services', {duration: 1500});

sr.reveal('.article-1', {duration: 1500});
sr.reveal('.article-2', {duration: 1500});
sr.reveal('.article-3', {duration: 1500});
sr.reveal('.article-4', {duration: 1500});

sr.reveal('.instagram', {duration: 1500});

// More guests Program

sr.reveal('section', {duration: 1500});