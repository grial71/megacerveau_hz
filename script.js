// ======================================================
//                🌍 PACKS DE TRADUCTION UI
// ======================================================
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
      "<strong>1. Ondas cerebrales</strong>: algunos audios usan ritmos binaurales o isocrónicos para favorecer estados de relajación o concentración.<br><br>" +
      "<strong>2. Frecuencias específicas</strong>: 174 Hz, 285 Hz, 396 Hz, 40 Hz, etc. se asocian a calma, claridad mental o liberación emocional.<br><br>" +
      "<strong>3. Uso</strong>: no sustituyen tratamientos médicos, pero pueden ayudarte a relajarte, meditar o dormir mejor.",

    DonateTitle: "Apoyar el proyecto:",
    DonateButton: "Apoyar vía PayPal",
    DonateNote: "Gracias por enviar como «Amigos y familiares».",
    FooterText: "MEGABRAIN © 2025 – Creado por Michel Quinones",

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
      "A selection of frequencies and music designed to support relaxation, focus, and deep meditation.",

    ExplainTitle: "How do these frequencies work?",
    ExplainText:
      "<strong>1. Brainwaves</strong>: some tracks use binaural or isochronic beats to create relaxed or focused states.<br><br>" +
      "<strong>2. Specific frequencies</strong>: 174 Hz, 285 Hz, 396 Hz, 40 Hz, etc. are associated with calm, clarity and emotional release.<br><br>" +
      "<strong>3. Usage</strong>: these sounds do NOT replace medical care, but can help you relax, meditate, focus or sleep better.",

    DonateTitle: "Support the project:",
    DonateButton: "Support via PayPal",
    DonateNote: "Please send using «Friends & Family».",
    FooterText: "MEGABRAIN © 2025 – Created by Michel Quinones",

    OrbHome: "Home",
    OrbTelegram: "Telegram contact",
    OrbTikTok: "TikTok profile",
    OrbMontse: "Montse Valls – Hypnosis & therapy",
    OrbRelaxPlaylist: "Relaxation playlist",
    OrbNeuroPlaylist: "Neuroscience playlist",
    OrbGoFund: "Support on GoFundMe",
  }
};

let currentLang = "fr";

// ======================================================
//                🌍 SYSTÈME DE TRADUCTION
// ======================================================
window.setLang = function (lang) {
  const pack = translations[lang];
  if (!pack) return;

  currentLang = lang;

  document.querySelectorAll("[data-tr]").forEach((el) => {
    const key = el.getAttribute("data-tr");
    if (pack[key]) el.innerHTML = pack[key];
  });

  document
    .querySelectorAll(".lang-selector button")
    .forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));

  try {
    localStorage.setItem("megabrain_lang", lang);
  } catch {}
};

document.addEventListener("DOMContentLoaded", () => {
  const saved =
    (typeof localStorage !== "undefined" &&
      localStorage.getItem("megabrain_lang")) ||
    "fr";

  setLang(saved);
  currentLang = saved;
});

// ======================================================
//                🎵 MUSIQUE DE FOND
// ======================================================
const bgMusic = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-control");
const icon = document.getElementById("music-icon");

let musicEnabled = false;
let wasPlayingBeforeVideo = false;

if (musicBtn && bgMusic && icon) {
  musicBtn.addEventListener("click", () => {
    if (!musicEnabled) {
      bgMusic.volume = 0.35;
      bgMusic.play().then(() => {
        icon.textContent = "🔊";
        musicEnabled = true;
      });
    } else {
      bgMusic.pause();
      icon.textContent = "🔇";
      musicEnabled = false;
    }
  });
}

// ======================================================
//                ▶️ LECTURE VIDÉO YOUTUBE
// ======================================================
window.openVideo = function (el) {
  const id = el.dataset.videoId;
  if (!id) return;

  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("ytPlayer");

  wasPlayingBeforeVideo = musicEnabled && !bgMusic.paused;
  if (wasPlayingBeforeVideo) bgMusic.pause();

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

  frame.src = "";
  modal.style.display = "none";

  if (wasPlayingBeforeVideo && musicEnabled) {
    bgMusic.play().catch(() => {});
  }
};

// fermer en cliquant autour
document.addEventListener("click", (e) => {
  const modal = document.getElementById("videoModal");
  if (e.target === modal) closeVideo();
});

// ======================================================
//                🤖 CHATBOT PÉDAGOGIQUE
// ======================================================
let chatState = "start";

const chatToggle = document.getElementById("chatbot-toggle");
const chatWindow = document.getElementById("chatbot-window");
const chatClose = document.getElementById("chatbot-close");
const chatMessages = document.getElementById("chatbot-messages");
const chatQuick = document.getElementById("chatbot-quick");

const chatbotTexts = {
  fr: {
    intro:
      "Bonjour, je suis ton <strong>Coach MEGABRAIN</strong> 🧠✨.<br>De quoi as-tu le plus besoin maintenant ?",
    relaxAdvice:
      "Pour la <strong>relaxation</strong>, commence par 174 Hz ou 285 Hz.",
    focusAdvice:
      "Pour la <strong>concentration</strong>, les fréquences Gamma (40 Hz) sont idéales.",
    meditateAdvice:
      "Pour la <strong>méditation profonde</strong>, 963 Hz est excellent.",
    explainText:
      "Les fréquences servent à influencer ton état intérieur :<br>• 174 Hz détente physique<br>• 285 Hz harmonie<br>• 396 Hz libération<br>• 40 Hz concentration<br>• 963 Hz méditation",

    gotoRelax: "Je t’ai emmené à Relaxation.",
    gotoFocus: "Je t’ai emmené à Concentration.",
    gotoMeditation: "Je t’ai emmené à Méditation.",

    buttons: {
      relax: "Me relaxer",
      focus: "Me concentrer",
      meditate: "Méditer",
      explain: "Comprendre les fréquences",
      goto_relax: "Aller à Relaxation",
      goto_focus: "Voir Focus",
      goto_meditation: "Voir Méditation",
      restart: "Autre besoin",
      close: "Fermer",
    },
  },

  es: {
    intro:
      "Hola, soy tu <strong>Coach MEGABRAIN</strong> 🧠✨.<br>¿Qué necesitas ahora?",
    relaxAdvice:
      "Para la <strong>relajación</strong>, empieza con 174 Hz o 285 Hz.",
    focusAdvice:
      "Para la <strong>concentración</strong>, usa Gamma 40 Hz.",
    meditateAdvice:
      "Para <strong>meditación profunda</strong>, usa 963 Hz.",
    explainText:
      "Las frecuencias influyen tu interior:<br>• 174 Hz relajación<br>• 285 Hz armonía<br>• 396 Hz liberación<br>• 40 Hz concentración<br>• 963 Hz meditación",

    gotoRelax: "Te llevé a Relajación.",
    gotoFocus: "Te llevé a Concentración.",
    gotoMeditation: "Te llevé a Meditación.",

    buttons: {
      relax: "Relajarme",
      focus: "Concentrarme",
      meditate: "Meditar",
      explain: "Entender frecuencias",
      goto_relax: "Ir a Relajación",
      goto_focus: "Ir a Focus",
      goto_meditation: "Ir a Meditación",
      restart: "Otra cosa",
      close: "Cerrar",
    },
  },

  en: {
    intro:
      "Hi! I’m your <strong>MEGABRAIN Coach</strong> 🧠✨.<br>What do you need now?",
    relaxAdvice: "For <strong>relaxation</strong>, start with 174 or 285 Hz.",
    focusAdvice: "For <strong>focus</strong>, Gamma 40 Hz is ideal.",
    meditateAdvice: "For <strong>deep meditation</strong>, use 963 Hz.",
    explainText:
      "Frequencies influence your inner state:<br>• 174 Hz relaxation<br>• 285 Hz harmony<br>• 396 Hz release<br>• 40 Hz focus<br>• 963 Hz meditation",

    gotoRelax: "I brought you to Relaxation.",
    gotoFocus: "I brought you to Focus.",
    gotoMeditation: "I brought you to Meditation.",

    buttons: {
      relax: "Relax",
      focus: "Focus",
      meditate: "Meditate",
      explain: "Understand frequencies",
      goto_relax: "Go to Relaxation",
      goto_focus: "Go to Focus",
      goto_meditation: "Go to Meditation",
      restart: "Something else",
      close: "Close",
    },
  },
};

// sélection de la langue du chatbot
function chatPack() {
  return chatbotTexts[currentLang] || chatbotTexts.fr;
}

function addChatMessage(text, from = "bot") {
  const div = document.createElement("div");
  div.classList.add("chat-msg", from);
  div.innerHTML = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function setQuickButtons(buttonKeys) {
  chatQuick.innerHTML = "";
  const pack = chatPack();

  buttonKeys.forEach((key) => {
    const button = document.createElement("button");
    button.classList.add("chat-quick-btn");
    button.textContent = pack.buttons[key];
    button.addEventListener("click", () => handleChoice(key));
    chatQuick.appendChild(button);
  });
}

function startChat() {
  chatMessages.innerHTML = "";
  chatState = "start";
  addChatMessage(chatPack().intro);
  setQuickButtons(["relax", "focus", "meditate", "explain"]);
}

if (chatToggle) {
  chatToggle.addEventListener("click", () => {
    chatWindow.style.display =
      chatWindow.style.display === "flex" ? "none" : "flex";

    if (chatWindow.style.display === "flex") startChat();
  });
}

if (chatClose) {
  chatClose.addEventListener("click", () => {
    chatWindow.style.display = "none";
  });
}

function handleChoice(choice) {
  const pack = chatPack();

  addChatMessage(pack.buttons[choice], "user");

  if (choice === "relax") {
    addChatMessage(pack.relaxAdvice);
    setQuickButtons(["goto_relax", "restart"]);
  } else if (choice === "focus") {
    addChatMessage(pack.focusAdvice);
    setQuickButtons(["goto_focus", "restart"]);
  } else if (choice === "meditate") {
    addChatMessage(pack.meditateAdvice);
    setQuickButtons(["goto_meditation", "restart"]);
  } else if (choice === "explain") {
    addChatMessage(pack.explainText);
    setQuickButtons(["relax", "focus", "meditate"]);
  } else if (choice === "goto_relax") {
    document.getElementById("relax")?.scrollIntoView({ behavior: "smooth" });
    addChatMessage(pack.gotoRelax);
    setQuickButtons(["restart", "close"]);
  } else if (choice === "goto_focus") {
    document.getElementById("focus")?.scrollIntoView({ behavior: "smooth" });
    addChatMessage(pack.gotoFocus);
    setQuickButtons(["restart", "close"]);
  } else if (choice === "goto_meditation") {
    document
      .getElementById("meditation")
      ?.scrollIntoView({ behavior: "smooth" });
    addChatMessage(pack.gotoMeditation);
    setQuickButtons(["restart", "close"]);
  } else if (choice === "restart") {
    startChat();
  } else if (choice === "close") {
    chatWindow.style.display = "none";
  }
}

// ======================================================
//                🔮 MENU ORBE FLOTTANT
// ======================================================
const orbMenu = document.getElementById("orb-menu");
const orbToggle = document.getElementById("orb-toggle");

if (orbMenu && orbToggle) {
  orbToggle.addEventListener("click", () => {
    orbMenu.classList.toggle("open");
  });

  orbMenu.querySelectorAll(".orb-item").forEach((link) => {
    link.addEventListener("click", () => {
      orbMenu.classList.remove("open");
    });
  });
}
