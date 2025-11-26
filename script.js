// Récupération des éléments HTML5
const counterItem = document.querySelector(".counter");
const playPauseBtn = document.querySelector(".playpause__btn");

// Création des variables counter et paused
let counter = 0;
let paused = false;

// Déclaration de la fonction dropEmoji qui va permettre la chute des emojis
const dropEmoji = () => {
  // Création de l'élément HTML5 <SPAN> et ajout de celui-ci dans le DOM
  const emoji = document.createElement("span");
  emoji.classList.add("emoji");
  emoji.textContent = "❄️"; // 😍
  document.body.appendChild(emoji);

  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = Math.random() * 5 + 2 + "s";

  // La méthode setTimeout() permet de définir un minuteur qui exécute une fonction ou un code donné après la fin du délai indiqué.
  setTimeout(() => {
    emoji.remove();
  }, 5000);
};

// Déclaration de la fonction counterFormat qui va permettre de mettre en place le format du compteur
const counterFormat = (counter) => {
  return counter > 1000 ? (counter / 1000).toFixed(1) + "k" : counter;
};

// Déclaration de la fonction increaseCounter qui va permettre d'incrémenter le compteur
const increaseCounter = () => {
  // Incrémentation du compteur
  counter++;

  counterItem.textContent = counterFormat(counter); // Appel de la fonction counterFormat(counter)

  if (counter < 30001 && !paused) {
    // La méthode setTimeout() permet de définir un minuteur qui exécute une fonction ou un code donné après la fin du délai indiqué.
    setTimeout(() => {
      // Appel de la fonction increaseCounter()
      increaseCounter();
    }, 10);
  }

  if (counter % 10 === 0) {
    // Appel de la fonction dropEmoji()
    dropEmoji();
  }

  if (counter % 1000 === 0) {
    // Appel de la fonction drop emoji(true)
    dropEmoji(true);
  }
};

//Appel de la fonction increaseCounter()
increaseCounter();

// Déclaration de la fonction playPauseCounter qui va permettre de mettre en pause et/ou remettre en marche le compteur
const playPauseCounter = () => {
  paused = !paused;
  // condition if ...else
  if (paused) {
    playPauseBtn.textContent = "Play";
  } else {
    playPauseBtn.textContent = "Pause";
    // Appel de la fonction increaseCounter()
    increaseCounter();
  }
};

// Ecoute de l'événement "click" sur le bouton et appel de la fonction playPausecounter
playPauseBtn.addEventListener("click", playPauseCounter);
