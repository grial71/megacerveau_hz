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
    "explication_frequences": "<strong>1. Ondas binaurales</strong> → dos tonos diferentes crean una tercera frecuencia en el cerebro…<br><strong>2. Frecuencias Solfeggio</strong> → 174 Hz (dolor), 285 Hz (regeneración), 528 Hz (amor), etc.<br><strong>3. Schumann 7,83 Hz</strong> → sincronización con la Tierra.<br><br><strong>Importante:</strong> esto no es un tratamiento médico, pero miles de personas (yo incluido) sienten un verdadero alivio.",
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
    "explication_frequences": "<strong>1. Binaural Beats</strong> → two different tones create a third frequency in the brain…<br><strong>2. Solfeggio Frequencies</strong> → 174 Hz (pain), 285 Hz (regeneration), 528 Hz (love), etc.<br><strong>3. Schumann 7.83 Hz</strong> → synchronization with the Earth.<br><br><strong>Important :</strong> this is not medical treatment, but thousands of people (myself included) feel real relief.",
    "Ce projet vous change la vie ? Coffee": "Does this project change your life? Coffee",
  	"Soutenir via PayPal": "Support via PayPal",
  	"Merci d’envoyer en mode « Amis & famille » (0 frais)": "Please send using «Friends & Family» (0 fees)",
  	"MEGABRAIN © 2025 – Créé avec amour par Michel Quinones": "MEGABRAIN © 2025 – Created with love by Michel Quinones"
  }
};

// --- Logique de Traduction ---

// Fonction pour appliquer la traduction et sauvegarder la langue
window.setLang = function(lang) {
    // 1. Mise à jour des classes des boutons
    document.querySelectorAll('.lang-selector button').forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        }
    });

    // 2. Application des traductions
    const translationSet = translations[lang];
    document.querySelectorAll('[data-tr]').forEach(element => {
        const key = element.getAttribute('data-tr');
        if (translationSet[key] !== undefined) {
            element.innerHTML = translationSet[key];
        }
    });

    // 3. Sauvegarder la langue dans le stockage local (pour le prochain chargement)
    localStorage.setItem('megabrainLang', lang);
};

// Fonction pour charger la langue lors du chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('megabrainLang') || 'fr'; 
    setLang(savedLang);
});


// --- Logique d'affichage des vidéos ---

const modal = document.getElementById('video-modal');
const player = document.getElementById('youtube-player');

// Ouvre la modale et charge la vidéo
window.openVideo = function(videoElement) {
    const videoId = videoElement.getAttribute('data-video-id');
    if (videoId) {
        // Crée l'URL d'intégration YouTube avec l'option autoplay=1 pour démarrer immédiatement
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&iv_load_policy=3`;
        player.src = embedUrl;
        modal.style.display = 'flex'; // Affiche la modale
        document.body.style.overflow = 'hidden'; // Empêche le défilement en arrière-plan
    }
}

// Ferme la modale et arrête la vidéo
window.closeModal = function() {
    modal.style.display = 'none'; // Cache la modale
    player.src = ''; // Réinitialise le src du lecteur pour stopper la lecture
    document.body.style.overflow = 'auto'; // Rétablit le défilement
}

// Optionnel : Fermer la modale en cliquant en dehors ou avec la touche ESC
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