/* ============================== */
/*     🔮 MENU ORBE OUVERTURE     */
/* ============================== */

const orbToggle = document.getElementById("orb-toggle");
const orbMenu = document.getElementById("orb-menu");

if (orbToggle && orbMenu) {
  orbToggle.addEventListener("click", () => {
    orbMenu.classList.toggle("show");
  });
}

/* ============================== */
/*        TRADUCTIONS UI         */
/* ============================== */

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
      "<strong>1. Ondes cérébrales</strong> : certaines musiques utilisent des battements binauraux ou isochrones pour créer des états de relaxation ou de concentration.<br><br>" +
      "<strong>2. Fréquences spécifiques</strong> : 174 Hz, 285 Hz, 40 Hz, etc. sont associées à la détente, la clarté mentale ou la libération émotionnelle.<br><br>" +
      "<strong>3. Usage</strong> : ces sons ne remplacent pas un traitement médical, mais peuvent aider à se détendre, méditer ou mieux dormir.",

    DonateTitle: "Soutenir le projet :",
    DonateButton: "Soutenir via PayPal",
    DonateNote: "Merci d’envoyer en mode « Amis et proches ». ",
    FooterText: "MEGABRAIN © 2025 – Créé par Michel Quinones",

    // 🔮 MENU ORBE
    OrbHome: "Accueil",
    OrbTelegram: "Contact Telegram",
    OrbTikTok: "Profil TikTok",
    OrbMontse: "Montse Valls – Hypnose & thérapie",
    OrbRelaxPlaylist: "Playlist Relaxation",
    OrbNeuroPlaylist: "Playlist Neurosciences",
    OrbGoFund: "Soutenir sur GoFundMe",
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
      "<strong>1. Ondas cerebrales</strong>: algunos audios usan ritmos binaurales o isocrónicos para favorecer estados mentales específicos.<br><br>" +
      "<strong>2. Frecuencias específicas</strong>: 174 Hz, 285 Hz, 40 Hz, etc. se asocian a calma, claridad o liberación emocional.<br><br>" +
      "<strong>3. Uso</strong>: no sustituyen tratamientos médicos, pero pueden ayudarte a relajarte, meditar o dormir mejor.",

    DonateTitle: "Apoyar el proyecto:",
    DonateButton: "Apoyar vía PayPal",
    DonateNote: "Gracias por enviar como «Amigos y familiares».",
    FooterText: "MEGABRAIN © 2025 – Creado por Michel Quinones",

    // 🔮 MENU ORBE
    OrbHome: "Inicio",
    OrbTelegram: "Contacto Telegram",
    OrbTikTok: "Perfil TikTok",
    OrbMontse: "Montse Valls – Hipnosis y terapia",
    OrbRelaxPlaylist: "Playlist Relajación",
    OrbNeuroPlaylist: "Playlist Neurociencia",
    OrbGoFund: "Apoyar en GoFundMe",
  },

  en: {
    MEGABRAIN: "MEGABRAIN",
    NavRelax: "Relaxation",
    NavFocus: "Focus",
    NavMeditation: "Meditation",
    NavBooks: "Books",

    IntroTitle: "Created by Michel Quinones",
    IntroText:
      "A selection of frequencies and music designed to support relaxation, focus and deep meditation.",

    ExplainTitle: "How do these frequencies work?",
    ExplainText:
      "<strong>1. Brainwaves</strong>: some tracks use binaural or isochronic beats to encourage relaxed or focused states.<br><br>" +
      "<strong>2. Specific frequencies</strong>: 174 Hz, 285 Hz, 40 Hz etc. are associated with calm, clarity and emotional release.<br><br>" +
      "<strong>3. Usage</strong>: these sounds do not replace medical care but can help you relax, meditate and sleep.",

    DonateTitle: "Support the project:",
    DonateButton: "Support via PayPal",
    DonateNote: "Please send using «Friends & Family».",
    FooterText: "MEGABRAIN © 2025 – Created by Michel Quinones",

    // 🔮 MENU ORBE
    OrbHome: "Home",
    OrbTelegram: "Telegram contact",
    OrbTikTok: "TikTok profile",
    OrbMontse: "Montse Valls – Hypnosis & therapy",
    OrbRelaxPlaylist: "Relaxation playlist",
    OrbNeuroPlaylist: "Neuroscience playlist",
    OrbGoFund: "Support on GoFundMe",
  }
};

/* ============================== */
/*   FONCTION DE TRADUCTION       */
/* ============================== */

let currentLang = "fr";

window.setLang = function (lang) {
  const pack = translations[lang];
  if (!pack) return;

  currentLang = lang;

  document.querySelectorAll("[data-tr]").forEach((el) => {
    const key = el.getAttribute("data-tr");
    if (pack[key]) el.innerHTML = pack[key];
  });

  document.querySelectorAll(".lang-selector button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  try {
    localStorage.setItem("megabrain_lang", lang);
  } catch (e) {}
};

document.addEventListener("DOMContentLoaded", () => {
  const saved =
    (typeof localStorage !== "undefined" &&
      localStorage.getItem("megabrain_lang")) ||
    "fr";
  setLang(saved);
});

/* ============================== */
/*       MUSIQUE DE FOND          */
/* ============================== */

const bgMusic = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-control");
const icon = document.getElementById("music-icon");
let musicEnabled = false;

if (bgMusic && musicBtn && icon) {
  musicBtn.addEventListener("click", () => {
    if (!musicEnabled) {
      bgMusic.volume = 0.35;
      bgMusic
        .play()
        .then(() => {
          icon.textContent = "🔊";
          musicEnabled = true;
        })
        .catch(() => {});
    } else {
      bgMusic.pause();
      icon.textContent = "🔇";
      musicEnabled = false;
    }
  });
}

/* ============================== */
/*     YOUTUBE PLAYER MODAL       */
/* ============================== */

window.openVideo = function (el) {
  const id = el.dataset.videoId;
  if (!id) return;

  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("ytPlayer");
  if (!modal || !frame) return;

  frame.src =
    "https://www.youtube.com/embed/" +
    id +
    "?autoplay=1&rel=0&modestbranding=1";

  modal.style.display = "flex";
};

window.closeVideo = function (e) {
  if (e) e.preventDefault();
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("ytPlayer");
  if (!modal || !frame) return;

  frame.src = "";
  modal.style.display = "none";
};

document.addEventListener("click", (e) => {
  const modal = document.getElementById("videoModal");
  if (!modal) return;
  if (e.target === modal) {
    window.closeVideo();
  }
});

/* ============================== */
/*       CHATBOT MEGABRAIN        */
/* ============================== */

const botToggle = document.getElementById("chatbot-toggle");
const botWindow = document.getElementById("chatbot-window");
const botClose = document.getElementById("chatbot-close");
const botMessages = document.getElementById("chatbot-messages");
const botQuick = document.getElementById("chatbot-quick");

function addBotMsg(text, from = "bot") {
  if (!botMessages) return;
  const div = document.createElement("div");
  div.className = "chat-msg " + from;
  div.innerHTML = text;
  botMessages.appendChild(div);
  botMessages.scrollTop = botMessages.scrollHeight;
}

function setQuickButtons(labels) {
  if (!botQuick) return;
  botQuick.innerHTML = "";
  labels.forEach((lab) => {
    const b = document.createElement("button");
    b.className = "chat-quick-btn";
    b.textContent = lab;
    botQuick.appendChild(b);
  });
}

if (botToggle && botWindow) {
  botToggle.addEventListener("click", () => {
    botWindow.style.display = "flex";
  });
}
if (botClose && botWindow) {
  botClose.addEventListener("click", () => {
    botWindow.style.display = "none";
  });
}

if (botMessages) {
  addBotMsg(
    "Bonjour 👋, je suis ton <strong>Coach MEGABRAIN</strong>. Clique sur un bouton ou profite simplement des fréquences."
  );
  setQuickButtons(["Relaxation", "Concentration", "Méditation"]);
}
