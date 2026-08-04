/**
 * Script principal pour le site de la Fédération Internationale du Centurion.
 * Gère le menu hamburger, les animations au défilement et les interactions utilisateur.
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

        // Fermer le menu quand un lien est cliqué
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
        const revealPoint = 150; // Déclenchement 150px avant l'apparition complète

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
            // Optionnel: retirer la classe si l'élément sort de l'écran (pour rejouer l'animation)
            // else {
            //     el.classList.remove('active');
            // }
        });
    };

    // Vérifier au chargement et au scroll
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Première vérification

    // --- NAVIGATION ACTIVE LINK (Mise en évidence de la page courante) ---
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        // Gère la page d'accueil (index.html) qui est la racine ou contient 'index'
        if ((currentLocation === '/' || currentLocation.endsWith('index.html')) && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        } else if (currentLocation.endsWith(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });

    // --- FOOTER - ANNÉE DYNAMIQUE ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- GESTION DU FORMULAIRE DE CONTACT (Simulation) ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Récupération simple des valeurs (juste pour la démo)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simulation d'envoi
            alert(`Merci ${name} ! Votre message a bien été reçu par la Fédération Internationale du Centurion. Nous vous répondrons à ${email} dans les plus brefs délais.\n\nForce et Honneur !`);
            contactForm.reset();
        });
    }

});
