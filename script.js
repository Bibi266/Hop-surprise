console.log("Le fichier script.js est bien chargé ✅");
// Étape 1 : Sélectionner les éléments
const btn = document.getElementById('btnDog');
const img = document.getElementById('dogImage');

// Étape 2 : Ajouter un écouteur d’événement au bouton
btn.addEventListener('click', () => {
  // Étape 3 : Appeler l’API Dog CEO
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      // Étape 4 : Mettre à jour l’image
      img.src = data.message;
      img.style.display = 'block';
    })
    .catch(error => {
      console.error('Erreur lors du chargement du chien 🐶 :', error);
    });
});
const phrases = [
  "Quel magnifique  toutou ! 🐾",
  "Surpriz du jour 🐶✨",
  "Regarde cette merveille 😍",
  "Qui est un bon toutou ? 🐕",
  "Un câlin pour ce mignon petit  ! 💛"
];

btn.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      img.src = data.message;
      img.style.display = "block";
      const favButton = document.getElementById("favButton");
      favButton.style.display = "inline-block";
      favButton.onclick = () => {
        const favDog = {
          image: img.src,
          phrase: document.getElementById("dogPhrase").textContent
        };
      
        console.log("À sauvegarder plus tard :", favDog);
        alert("🐾 Ce chien a été ajouté à tes favoris !");
      };
      // Choisir une phrase aléatoire
      const phraseElement = document.getElementById("dogPhrase");
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      phraseElement.textContent = randomPhrase;
    });
});
btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "#ffd166";
  btn.style.color = "#333";
});

btn.addEventListener("mouseout", () => {
  btn.style.backgroundColor = "#ff6f61";
  btn.style.color = "#fff";
});
document.addEventListener("keydown", (event) => {
  if (event.key === "d") {
    btn.click(); // simulate le clic
  }
});
