// Traductions (FR-ES-EN)
const translations = {
  fr: {
    "MEGABRAIN": "MEGABRAIN",
    "Douleur": "Douleur", "Étude": "Étude", "Méditation": "Méditation", "Livres": "Livres",
    "Créé par Michel Quinones": "Créé par Michel Quinones",
    "intro_texte_principal": "Deux hernies discales + arthrose cervicale depuis des années → je teste tout.<br>Voici les fréquences et vidéos qui m’aident vraiment au quotidien : douleur, concentration, paix intérieure.",
    "Comment fonctionnent ces fréquences ?": "Comment fonctionnent ces fréquences ?",
    "explication_frequences": "<strong>1. Ondas binaurales</strong> → deux tons différents créent une troisième fréquence dans le cerveau…<br><strong>2. Fréquences solfège</strong> → 174 Hz (douleur), 285 Hz (régénération), 528 Hz (amour), etc.<br><strong>3. Schumann 7,83 Hz</strong> → synchronisation avec la Terre.<br><br><strong>Important :</strong> ce n’est pas un traitement médical, mais des milliers de personnes (moi compris) ressentent un vrai soulagement.",
    "Ce projet vous change la vie ? Coffee": "Ce projet vous change la vie ? Coffee",
    "Soutenir via PayPal": "Soutenir via PayPal",
    "Merci d’envoyer en mode « Amis & famille » (0 frais)": "Merci d’envoyer en mode « Amis & famille » (0 frais)",
    "MEGABRAIN © 2025 – Créé avec amour par Michel Quinones": "MEGABRAIN © 2025 – Créé avec amour par Michel Quinones"
  },
  es: {
    "MEGABRAIN": "MEGABRAIN",
    "Douleur": "Dolor", "Étude": "Estudio", "Méditation": "Meditación", "Livres": "Libros",
    "Créé par Michel Quinones": "Creado por Michel Quinones",
    "intro_texte_principal": "Dos hernias de disco + artrosis cervical durante años → pruebo todo.<br>Aquí están las frecuencias y videos que realmente me ayudan a diario: dolor, concentración, paz interior.",
    "Comment fonctionnent ces fréquences ?": "¿Cómo funcionan estas frecuencias?",
    "explicacion_frequences": "<strong>1. Ondas binaurales</strong> → dos tonos diferentes crean una tercera frecuencia en el cerebro…<br><strong>2. Frecuencias Solfeggio</strong> → 174 Hz (dolor), 285 Hz (regeneración), 528 Hz (amor), etc.<br><strong>3. Schumann 7,83 Hz</strong> → sincronización con la Tierra.<br><br><strong>Importante:</strong> esto no es un tratamiento médico, pero miles de personas (yo incluido) sienten un verdadero alivio.",
    "Ce projet vous change la vie ? Coffee": "¿Este proyecto te cambia la vida? Coffee",
    "Soutenir via PayPal": "Apoyar a través de PayPal",
    "Merci d’envoyer en mode « Amis & famille » (0 frais)": "Gracias por enviar como «Amigos y familiares» (0 cargos)",
    "MEGABRAIN © 2025 – Créé avec amour par Michel Quinones": "MEGABRAIN © 2025 – Creado con amor por Michel Quinones"
  },
  en: {
    "MEGABRAIN": "MEGABRAIN",
    "Douleur": "Pain", "Étude": "Study", "Méditation": "Meditation", "Livres": "Books",
    "Créé par Michel Quinones": "Created by Michel Quinones",
    "intro_texte_principal": "Two herniated discs + cervical osteoarthritis for years → I try everything.<br>Here are the frequencies and videos that truly help me daily: pain, concentration, inner peace.",
    "Comment fonctionnent ces fréquences ?": "How do these frequencies work?",
    "explicacion_frequences": "<strong>1. Binaural Beats</strong> → two different tones create a third frequency in the brain…<br><strong>2. Solfeggio Frequencies</strong> → 174 Hz (pain), 285 Hz (regeneration), 528 Hz (love), etc.<br><strong>3. Schumann 7.83 Hz</strong> → synchronization with the Earth.<br><br><strong>Important :</strong> this is not medical treatment, but thousands of people (myself included) feel real relief.",
    "Ce projet vous change la vie ? Coffee": "Does this project change your life? Coffee",
  	"Soutenir via PayPal": "Support via PayPal",
  	"Merci d’envoyer en mode « Amis & famille » (0 frais)": "Please send using «Friends & Family» (0 fees)",
  	"MEGABRAIN © 2025 – Créé avec amour par Michel Quinones": "MEGABRAIN © 2025 – Created with love by Michel Quinones"
  }
};

// --- Logique de Traduction ---
window.setLang = function(lang) {
    document.querySelectorAll('.lang-selector button').forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        }
    });

    const translationSet = translations[lang];
    document.querySelectorAll('[data-tr]').forEach(element => {
        const key = element.getAttribute('data-tr');
        if (translationSet[key] !== undefined) {
            element.innerHTML = translationSet[key];
        }
    });

    localStorage.setItem('megabrainLang', lang);
};


// --- Logique d'affichage des vidéos ---
const modal = document.getElementById('video-modal');
const player = document.getElementById('youtube-player');

window.openVideo = function(videoElement) {
    const videoId = videoElement.getAttribute('data-video-id');
    if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&iv_load_policy=3`;
        player.src = embedUrl;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

window.closeModal = function() {
    modal.style.display = 'none';
    player.src = '';
    document.body.style.overflow = 'auto';
}

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'flex') {
        closeModal();
    }
});


// --- Logique du Ciel Étoilé et du Phénix (NOUVEAU / MODIFIÉ) ---

function createStarsBackground() {
    const starContainer = document.getElementById('stars-background');
    const numberOfStars = 150; 
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 2 + 1; 
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Position aléatoire mais sur une plus grande zone pour l'effet de "défilement"
        star.style.left = `${Math.random() * 200}%`; // Étoiles générées hors écran à droite
        star.style.top = `${Math.random() * 100}%`;
        
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        // Durée de l'animation de défilement (plus la durée est courte, plus l'étoile va vite)
        const scrollDuration = Math.random() * 50 + 20; // Entre 20s et 70s pour des vitesses variées
        star.style.setProperty('--duration', `${scrollDuration}s`); // Définition de la variable CSS
        
        starContainer.appendChild(star);
    }
}

// Pour l'effet parallaxe du fond
const starsBackground = document.getElementById('stars-background');

window.addEventListener('mousemove', (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const offsetX = (e.clientX - centerX) / centerX;
    const offsetY = (e.clientY - centerY) / centerY;

    const intensity = 10; // Augmenté pour un effet plus visible
    
    // Applique le déplacement aux étoiles ET au phénix (s'il est dans le conteneur)
    starsBackground.style.transform = `translate(
        ${offsetX * intensity}px, 
        ${offsetY * intensity}px
    )`;
});


// --- Initialisation au chargement de la page ---
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('megabrainLang') || 'fr'; 
    setLang(savedLang);
    
    createStarsBackground(); 
});
