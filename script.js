// ==========================
// TRADUCTIONS (FR / ES / EN)
// ==========================
const translations = {
  fr: {
    MEGABRAIN: "MEGABRAIN",

    NavRelax: "Relaxation",
    NavFocus: "Concentration",
    NavMeditation: "Méditation",
    NavBooks: "Livres",

    IntroTitle: "Créé par Michel Quinones",
    IntroText: "Sélection de fréquences sonores et de musiques conçues pour favoriser la relaxation, la concentration et la méditation profonde.",

    ExplainTitle: "Comment fonctionnent ces fréquences ?",
    ExplainText:
      "<strong>1. Ondes binaurales</strong> → deux tons distincts perçus simultanément créent une fréquence interne.<br>" +
      "<strong>2. Fréquences solfège</strong> → utilisées pour la relaxation, l’équilibre émotionnel et la clarté mentale.<br>" +
      "<strong>3. Schumann 7,83 Hz</strong> → fréquence naturelle du champ terrestre, souvent associée à l’harmonie.<br><br>" +
      "Ces outils sonores sont couramment utilisés pour favoriser le calme, la concentration et le bien-être général.",

    DonateTitle: "Soutenir le projet :",
    DonateButton: "Soutenir via PayPal",
    DonateNote: "Merci d’envoyer en mode « Amis & famille ».",

    FooterText: "MEGABRAIN © 2025 – Créé par Michel Quinones",

    BooksIntroTitle: "Ma collection de livres",
    BooksIntroText: "Sélection de livres personnels. Cliquez sur une couverture pour voir la fiche détaillée."
  },

  es: {
    MEGABRAIN: "MEGABRAIN",

    NavRelax: "Relajación",
    NavFocus: "Concentración",
    NavMeditation: "Meditación",
    NavBooks: "Libros",

    IntroTitle: "Creado por Michel Quinones",
    IntroText: "Selección de frecuencias de sonido y música pensadas para favorecer la relajación, la concentración y la meditación profunda.",

    ExplainTitle: "¿Cómo funcionan estas frecuencias?",
    ExplainText:
      "<strong>1. Ondas binaurales</strong> → dos tonos diferentes percibidos al mismo tiempo generan una frecuencia interna.<br>" +
      "<strong>2. Frecuencias Solfeggio</strong> → utilizadas para la relajación, el equilibrio emocional y la claridad mental.<br>" +
      "<strong>3. Schumann 7,83 Hz</strong> → frecuencia natural del campo terrestre, asociada a la armonía.<br><br>" +
      "Estas herramientas sonoras se usan a menudo para promover la calma, la concentración y el bienestar general.",

    DonateTitle: "Apoyar el proyecto:",
    DonateButton: "Apoyar vía PayPal",
    DonateNote: "Gracias por enviar en modo «Amigos y familiares».",

    FooterText: "MEGABRAIN © 2025 – Creado por Michel Quinones",

    BooksIntroTitle: "Mi colección de libros",
    BooksIntroText: "Selección de libros personales. Haz clic en una portada para ver la ficha detallada."
  },

  en: {
    MEGABRAIN: "MEGABRAIN",

    NavRelax: "Relaxation",
    NavFocus: "Focus",
    NavMeditation: "Meditation",
    NavBooks: "Books",

    IntroTitle: "Created by Michel Quinones",
    IntroText: "Selection of sound frequencies and music designed to support relaxation, focus and deep meditation.",

    ExplainTitle: "How do these frequencies work?",
    ExplainText:
      "<strong>1. Binaural beats</strong> → two distinct tones perceived at the same time create an internal frequency.<br>" +
      "<strong>2. Solfeggio frequencies</strong> → often used for relaxation, emotional balance and mental clarity.<br>" +
      "<strong>3. Schumann 7.83 Hz</strong> → natural frequency of the Earth’s field, associated with harmony.<br><br>" +
      "These sound tools are commonly used to promote calm, concentration and overall well-being.",

    DonateTitle: "Support the project:",
    DonateButton: "Support via PayPal",
    DonateNote: "Please send using «Friends & Family».",

    FooterText: "MEGABRAIN © 2025 – Created by Michel Quinones",

    BooksIntroTitle: "My book collection",
    BooksIntroText: "Selection of personal books. Click a cover to open the detailed page."
  }
};

// ==========================
// LOGIQUE DE TRADUCTION
// ==========================
window.setLang = function (lang) {
  // boutons actifs
  document.querySelectorAll(".lang-selector button").f
