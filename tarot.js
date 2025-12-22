let currentLang = "fr";

const texts = {
  fr: {
    title: "🔮 Tarot interactif",
    intro: "Outil de réflexion personnelle et symbolique.",
    warning: "⚠️ Attention aux arnaques : aucune promesse, aucun avenir figé.",
    button: "Tirer les cartes",
    note: "Interprétation symbolique uniquement. Prends ce qui résonne.",
  },
  es: {
    title: "🔮 Tarot interactivo",
    intro: "Herramienta de reflexión personal y simbólica.",
    warning: "⚠️ Atención a las estafas: sin promesas, nada está escrito.",
    button: "Sacar cartas",
    note: "Interpretación simbólica. Toma lo que resuene contigo.",
  },
  en: {
    title: "🔮 Interactive Tarot",
    intro: "Personal and symbolic reflection tool.",
    warning: "⚠️ Beware of scams: no promises, nothing is fixed.",
    button: "Draw cards",
    note: "Symbolic interpretation only. Take what resonates.",
  }
};

const tarotCards = [
  {
    fr: { name: "Le Mat", meaning: "Nouveau départ, liberté." },
    es: { name: "El Loco", meaning: "Nuevo comienzo, libertad." },
    en: { name: "The Fool", meaning: "New beginnings, freedom." }
  },
  {
    fr: { name: "La Force", meaning: "Courage calme, maîtrise." },
    es: { name: "La Fuerza", meaning: "Fuerza interior y calma." },
    en: { name: "Strength", meaning: "Inner strength and calm." }
  },
  {
    fr: { name: "Le Soleil", meaning: "Clarté, énergie positive." },
    es: { name: "El Sol", meaning: "Claridad y energía positiva." },
    en: { name: "The Sun", meaning: "Clarity and positive energy." }
  }
];

const resultBox = document.getElementById("tarotResult");
const button = document.getElementById("startTarot");

function updateTexts() {
  document.querySelector("h1").textContent = texts[currentLang].title;
  document.querySelector(".tarot-intro").textContent = texts[currentLang].intro;
  document.querySelector(".tarot-warning").textContent = texts[currentLang].warning;
  button.textContent = texts[currentLang].button;
}

document.querySelectorAll(".language-switch button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    updateTexts();
    resultBox.innerHTML = "";
  });
});

button.addEventListener("click", () => {
  resultBox.innerHTML = "";
  const card = tarotCards[Math.floor(Math.random() * tarotCards.length)][currentLang];

  resultBox.innerHTML = `
    <div class="tarot-card">
      <h2>${card.name}</h2>
      <p>${card.meaning}</p>
      <p class="tarot-note">${texts[currentLang].note}</p>
    </div>
  `;
});

updateTexts();
