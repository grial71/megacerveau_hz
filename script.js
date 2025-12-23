/* ==============================
   📚 PAGE LISTE DES LIVRES
   ============================== */

document.addEventListener("DOMContentLoaded", () => {
  const livresContainer = document.getElementById("livres");

  if (livresContainer) {
    fetch("data/livres.json")
      .then(res => res.json())
      .then(livres => {
        livres.forEach(livre => {
          const card = document.createElement("a");
          card.className = "livre-card";
          card.href = `livre.html?id=${livre.id}`;

          card.innerHTML = `
            <img src="${livre.image}" alt="${livre.titre}">
            <h3>${livre.titre} – ${livre.auteur}</h3>
          `;

          livresContainer.appendChild(card);
        });
      })
      .catch(err => {
        console.error("Erreur chargement livres :", err);
      });
  }

  /* ==============================
     📖 PAGE DÉTAIL LIVRE
     ============================== */

  const params = new URLSearchParams(window.location.search);
  const livreId = params.get("id");
  const contenuLivre = document.getElementById("contenu-livre");

  if (livreId && contenuLivre) {
    fetch("data/livres.json")
      .then(res => res.json())
      .then(livres => {
        const livre = livres.find(l => l.id === livreId);

        if (!livre) {
          contenuLivre.innerHTML = "<p>Livre introuvable.</p>";
          return;
        }

        document.getElementById("titre-livre").textContent =
          `${livre.titre} – ${livre.auteur}`;

        contenuLivre.innerHTML = `
          <div class="livre-detail">
            <img src="${livre.image}" alt="${livre.titre}">
            <p><strong>Auteur :</strong> ${livre.auteur}</p>
            <p><strong>Année :</strong> ${livre.annee}</p>
            <p>${livre.description}</p>
          </div>
        `;
      })
      .catch(err => {
        console.error("Erreur détail livre :", err);
      });
  }
});
