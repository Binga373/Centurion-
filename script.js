/**
 * Script principal - Fédération Internationale du Centurion
 * Gère le menu mobile, les animations au scroll, la navigation active, 
 * l'année dynamique du footer et la simulation du formulaire de contact.
 */
document.addEventListener('DOMContentLoaded', () => {

    // --- MENU HAMBURGER MOBILE ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // --- ANIMATION AU SCROLL (REVEAL) ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // --- NAVIGATION ACTIVE LINK ---
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if ((currentLocation === '/' || currentLocation.endsWith('index.html')) && linkHref === 'index.html') {
            link.classList.add('active');
        } else if (currentLocation.endsWith(linkHref)) {
            link.classList.add('active');
        }
    });

    // --- FOOTER - ANNÉE DYNAMIQUE ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- FORMULAIRE DE CONTACT (Simulation) ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            alert(`Merci ${name} ! Votre message a bien été reçu par la Fédération Internationale du Centurion. Nous vous répondrons à ${email} dans les plus brefs délais.\n\nForce et Honneur !`);
            contactForm.reset();
        });
    }

});
