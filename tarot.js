// 🔮 Tarot interactif – MegaBrian
// Usage symbolique, non prédictif, non médical

const tarotCards = [
  {
    name: "Le Mat",
    meaning: "Nouveau départ, liberté, ouverture. Avancer sans peur, mais avec conscience."
  },
  {
    name: "La Papesse",
    meaning: "Intuition, réflexion, écoute intérieure. Prendre le temps avant d’agir."
  },
  {
    name: "L’Impératrice",
    meaning: "Créativité, expression, relation aux autres. Faire confiance à ce qui grandit."
  },
  {
    name: "L’Empereur",
    meaning: "Structure, responsabilité, stabilité. Poser des bases solides."
  },
  {
    name: "Le Pape",
    meaning: "Transmission, valeurs, guidance morale. Chercher le sens plutôt que la promesse."
  },
  {
    name: "L’Amoureux",
    meaning: "Choix, engagement, cohérence entre le cœur et la raison."
  },
  {
    name: "La Force",
    meaning: "Maîtrise de soi, courage calme, patience face aux tensions."
  },
  {
    name: "L’Hermite",
    meaning: "Introspection, recul, sagesse acquise avec le temps."
  },
  {
    name: "La Roue de Fortune",
    meaning: "Changement, mouvement, cycles naturels. Rien n’est figé."
  },
  {
    name: "Le Soleil",
    meaning: "Clarté, confiance, énergie positive. Avancer dans la transparence."
  }
];

const button = document.getElementById("startTarot");
const resultBox = document.getElementById("tarotResult");

button.addEventListener("click", () => {
  resultBox.innerHTML = "";

  const randomIndex = Math.floor(Math.random() * tarotCards.length);
  const card = tarotCards[randomIndex];

  const cardElement = document.createElement("div");
  cardElement.className = "tarot-card";

  cardElement.innerHTML = `
    <h2>${card.name}</h2>
    <p>${card.meaning}</p>
    <p class="tarot-note">
      🔎 Interprétation symbolique uniquement.  
      Prends ce qui résonne, laisse le reste.
    </p>
  `;

  resultBox.appendChild(cardElement);
});
