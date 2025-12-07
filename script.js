// ==========================
// TEXTES DE TRADUCTION
// ==========================
const translations = {
  fr: {
    MEGABRAIN: "MEGABRAIN",

    NavRelax: "Relaxation",
    NavFocus: "Concentration",
    NavMeditation: "Méditation",
    NavBooks: "Livres",

    IntroTitle: "Créé par Michel Quinones",
    IntroText:
      "Sélection de fréquences sonores et de musiques conçues pour favoriser la relaxation, la concentration et la méditation profonde.",

    ExplainTitle: "Comment fonctionnent ces fréquences ?",
    ExplainText:
      "<strong>1. Ondes cérébrales</strong> : certaines musiques utilisent des battements binauraux ou isochrones pour encourager des états de relaxation ou de concentration.<br><br>" +
      "<strong>2. Fréquences spécifiques</strong> : 174 Hz, 285 Hz, 396 Hz, 40 Hz, etc. sont souvent associées à la détente, la clarté mentale ou la libération émotionnelle.<br><br>" +
      "<strong>3. Utilisation</strong> : ces sons ne remplacent PAS un traitement médical, mais peuvent être un support pour se relaxer, méditer, se concentrer ou mieux dormir.",

    DonateTitle: "Soutenir le projet :",
    DonateButton: "Soutenir via PayPal",
    DonateNote: "Merci d’envoyer en mode « Amis et proches ».",

    FooterText: "MEGABRAIN © 2025 – Créé par Michel Quinones",

    BooksIntroTitle: "Ma collection de livres",
    BooksIntroText:
      "Sélection de livres personnels. Cliquez sur une couverture pour ouvrir la fiche détaillée."
  },

  es: {
    MEGABRAIN: "MEGABRAIN",

    NavRelax: "Relajación",
    NavFocus: "Concentración",
    NavMeditation: "Meditación",
    NavBooks: "Libros",

    IntroTitle: "Creado por Michel Quinones",
    IntroText:
      "Selección de frecuencias sonoras y músicas pensadas para favorecer la relajación, la concentración y la meditación profunda.",

    ExplainTitle: "¿Cómo funcionan estas frecuencias?",
    ExplainText:
      "<strong>1. Ondas cerebrales</strong>: algunos audios usan ritmos binaurales o isocrónicos para favorecer estados de relajación o concentración.<br><br>" +
      "<strong>2. Frecuencias específicas</strong>: 174 Hz, 285 Hz, 396 Hz, 40 Hz, etc. se asocian a la calma, la claridad mental o la liberación emocional.<br><br>" +
      "<strong>3. Uso</strong>: no sustituyen ningún tratamiento médico, pero pueden ser un apoyo para relajarte, meditar, concentrarte o dormir mejor.",

    DonateTitle: "Apoyar el proyecto:",
    DonateButton: "Apoyar vía PayPal",
    DonateNote: "Gracias por enviar en modo «Amigos y familiares».",

    FooterText: "MEGABRAIN © 2025 – Creado por Michel Quinones",

    BooksIntroTitle: "Mi colección de libros",
    BooksIntroText:
      "Selección de libros personales. Haz clic en una portada para ver la ficha detallada."
  },

  en: {
    MEGABRAIN: "MEGABRAIN",

    NavRelax: "Relaxation",
    NavFocus: "Focus",
    NavMeditation: "Meditation",
    NavBooks: "Books",

    IntroTitle: "Created by Michel Quinones",
    IntroText:
      "Selection of sound frequencies and music designed to support relaxation, focus, and deep meditation.",

    ExplainTitle: "How do these frequencies work?",
    ExplainText:
      "<strong>1. Brainwaves</strong>: some tracks use binaural or isochronic beats to encourage relaxed or focused states.<br><br>" +
      "<strong>2. Specific frequencies</strong>: 174 Hz, 285 Hz, 396 Hz, 40 Hz, etc. are often associated with calm, mental clarity or emotional release.<br><br>" +
      "<strong>3. Usage</strong>: they do NOT replace medical treatment, but can be a tool to relax, meditate, focus or sleep better.",

    DonateTitle: "Support the project:",
    DonateButton: "Support via PayPal",
    DonateNote: "Please send using «Friends & Family».",

    FooterText: "MEGABRAIN © 2025 – Created by Michel Quinones",

    BooksIntroTitle: "My book collection",
    BooksIntroText:
      "Selection of personal books. Click a cover to open the detailed page."
  }
};

// ==========================
// FONCTION DE TRADUCTION
// ==========================

window.setLang = function (lang) {
  const pack = translations[lang];
  if (!pack) return;

  // Remplir tous les éléments avec data-tr="clé"
  document.querySelectorAll("[data-tr]").forEach((el) => {
    const key = el.getAttribute("data-tr");
    if (pack[key]) {
      el.innerHTML = pack[key];
    }
  });

  // Boutons FR / ES / EN : classe active
  document
    .querySelectorAll(".lang-selector button")
    .forEach((btn) =>
      btn.classList.toggle("active", btn.dataset.lang === lang)
    );

  // Mémoriser le choix
  try {
    localStorage.setItem("megabrain_lang", lang);
  } catch (e) {}
};

document.addEventListener("DOMContentLoaded", () => {
  const saved =
    (typeof localStorage !== "undefined" &&
      localStorage.getItem("megabrain_lang")) ||
    "fr";
  window.setLang(saved);
});

// ==========================
// LECTURE DES VIDÉOS YOUTUBE
// ==========================

window.openVideo = function (el) {
  const id = el.dataset.videoId;
  if (!id) return;

  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("ytPlayer");

  if (!modal || !frame) return;

  // URL YouTube avec autoplay
  frame.src =
    "https://www.youtube.com/embed/" +
    id +
    "?autoplay=1&rel=0&modestbranding=1";

  modal.style.display = "flex";
};

window.closeVideo = function (event) {
  if (event) event.preventDefault();
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("ytPlayer");
  if (!modal || !frame) return;

  // Stopper la vidéo
  frame.src = "";
  modal.style.display = "none";
};

// Fermer si on clique sur le fond noir
document.addEventListener("click", (e) => {
  const modal = document.getElementById("videoModal");
  if (!modal) return;
  if (e.target === modal) {
    window.closeVideo();
  }
});

// ====== Musique de fond ======
const bgMusic = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-control");
const icon = document.getElementById("music-icon");

let musicEnabled = false;

musicBtn.addEventListener("click", () => {
    if (!musicEnabled) {
        bgMusic.volume = 0.3;
        bgMusic.play().catch(e => console.log("Lecture bloquée:", e));
        icon.textContent = "🔊";
        musicEnabled = true;
    } else {
        bgMusic.pause();
        icon.textContent = "🔇";
        musicEnabled = false;
    }
});


