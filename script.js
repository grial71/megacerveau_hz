// ==========================
// TRADUCTIONS (inchangées – restent en local)
// ==========================
const translations = { /* ← colle ici exactement le bloc translations que tu avais avant */ };

// ==========================
// TRADUCTION (inchangée)
// ==========================
window.setLang = function (lang) {
  const pack = translations[lang] || translations.fr;
  document.querySelectorAll("[data-tr]").forEach(el => {
    const key = el.getAttribute("data-tr");
    if (pack[key]) el.innerHTML = pack[key];
  });
  document.querySelectorAll(".lang-selector button")
    .forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  localStorage.setItem("megabrain_lang", lang); // langue = donnée anonyme autorisée
};
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("megabrain_lang") || "fr";
  setLang(saved);
});

// ==========================
// MUSIQUE + VIDÉOS (inchangées)
// ==========================
const bgMusic = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-control");
const icon = document.getElementById("music-icon");
let musicEnabled = false;
musicBtn?.addEventListener("click", () => {
  if (!musicEnabled) {
    bgMusic.volume = 0.35;
    bgMusic.play().catch(() => {});
    icon.textContent = "Loudspeaker";
    musicEnabled = true;
  } else {
    bgMusic.pause();
    icon.textContent = "Muted";
    musicEnabled = false;
  }
});

window.openVideo = function (el) {
  const id = el.dataset.videoId;
  if (!id) return;
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("ytPlayer");
  if (musicEnabled) bgMusic.pause();
  frame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
  modal.style.display = "flex";
};
window.closeVideo = function (e) {
  if (e) e.preventDefault();
  document.getElementById("ytPlayer").src = "";
  document.getElementById("videoModal").style.display = "none";
  if (musicEnabled) bgMusic.play();
};
document.addEventListener("click", e => {
  if (e.target === document.getElementById("videoModal")) closeVideo();
});

// ==========================
// CHATBOT 100 % LOCAL & RGPD
// ==========================
const chatToggle   = document.getElementById("chatbot-toggle");
const chatWindow   = document.getElementById("chatbot-window");
const chatClose    = document.getElementById("chatbot-close");
const chatMessages = document.getElementById("chatbot-messages");
const chatQuick    = document.getElementById("chatbot-quick");

if (chatToggle) {
  chatToggle.addEventListener("click", () => {
    chatWindow.classList.toggle("visible");
    if (chatWindow.classList.contains("visible") && chatMessages.children.length === 0) {
      startChat();
    }
  });
}
if (chatClose) chatClose.addEventListener("click", () => chatWindow.classList.remove("visible"));

function addMessage(text, from = "bot") {
  const div = document.createElement("div");
  div.className = `chat-msg ${from}`;
  div.innerHTML = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function setQuickButtons(buttons) {
  chatQuick.innerHTML = "";
  buttons.forEach(b => {
    const btn = document.createElement("button");
    btn.className = "chat-quick-btn";
    btn.textContent = b.label;
    btn.onclick = () => {
      addMessage(b.label, "user");
      handleInput(b.value);
    };
    chatQuick.appendChild(btn);
  });
}

// Création du champ texte (une seule fois)
function createInput() {
  if (document.getElementById("chat-input-area")) return;
  const div = document.createElement("div");
  div.id = "chat-input-area";
  div.innerHTML = `
    <input type="text" id="chat-user-input" placeholder="Pose-moi une question..." autocomplete="off">
    <button id="chat-send-btn">Envoyer</button>
  `;
  chatWindow.appendChild(div);

  const input = document.getElementById("chat-user-input");
  const send  = () => {
    const txt = input.value.trim();
    if (!txt) return;
    addMessage(txt, "user");
    input.value = "";
    handleInput(txt.toLowerCase());
  };
  document.getElementById("chat-send-btn").onclick = send;
  input.addEventListener("keydown", e => { if (e.key === "Enter") send(); });
}

function scrollTo(id) {
  setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 600);
}

function handleInput(input) {
  let response = "Je n’ai pas bien compris… Peux-tu reformuler ?";
  let quick = [];

  if (/relax|détente|stress|174|285|396/.test(input)) {
    response = "Pour te relaxer :<br>• 174 Hz → détente physique<br>• 285 Hz → équilibre<br>• 396 Hz → libération du stress";
    quick = [{ label: "Aller à Relaxation", value: "goto_relax" }];
    scrollTo("relax");
  }
  else if (/concentr|focus|étud|travail|40 ?hz|gamma/.test(input)) {
    response = "Pour la concentration, les fréquences 40 Hz Gamma sont excellentes !<br>Tu as 3 pistes dans la section Concentration.";
    quick = [{ label: "Aller à Concentration", value: "goto_focus" }];
    scrollTo("focus");
  }
  else if (/médit|963|profond/.test(input)) {
    response = "La fréquence 963 Hz est parfaite pour la méditation profonde.<br>Rendez-vous dans la section Méditation.";
    quick = [{ label: "Aller à Méditation", value: "goto_meditation" }];
    scrollTo("meditation");
  }
  else if (/salut|bonjour|hello|cc/.test(input)) {
    response = "Salut ! Je suis ton Coach MEGABRAIN. Que veux-tu faire aujourd’hui ?";
    quick = [
      { label: "Me relaxer", value: "relax" },
      { label: "Me concentrer", value: "focus" },
      { label: "Méditer", value: "meditate" }
    ];
  }
  else if (/merci|super|top|genial/.test(input)) {
    response = "Avec plaisir ! Profite bien des fréquences";
  }

  setTimeout(() => {
    addMessage(response, "bot");
    if (quick.length) setQuickButtons(quick);
  }, 500);
}

function startChat() {
  chatMessages.innerHTML = "";
  addMessage("Bonjour ! Je suis ton <strong>Coach MEGABRAIN</strong><br>Comment puis-je t’aider ?");
  setQuickButtons([
    { label: "Me relaxer", value: "relax" },
    { label: "Me concentrer", value: "focus" },
    { label: "Méditer", value: "meditate" }
  ]);
  createInput();
}
