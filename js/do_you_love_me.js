const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

/* Move "No" button on desktop hover */
noBtn.addEventListener("mouseenter", () => {
  if (window.innerWidth <= 768) return;

  const containerRect = questionContainer.getBoundingClientRect();
  const btnW = noBtn.offsetWidth;
  const btnH = noBtn.offsetHeight;

  const maxX = Math.max(0, containerRect.width - btnW);
  const maxY = Math.max(0, containerRect.height - btnH);

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

/* Disappear animation */
const disappearNoButton = (e) => {
  if (e) e.preventDefault?.();

  noBtn.style.transition = "opacity 0.3s ease, transform 0.3s ease";
  noBtn.style.opacity = "0";
  noBtn.style.transform = "scale(0.85) translateY(-8px)";
  noBtn.style.pointerEvents = "none";

  // Reappear after 1 second
  setTimeout(() => {
    noBtn.style.display = "block";
    noBtn.style.opacity = "1";
    noBtn.style.transform = "scale(1) translateY(0)";
    noBtn.style.pointerEvents = "auto";
  }, 1000);
};

// Mobile: tap -> disappear
noBtn.addEventListener("touchstart", disappearNoButton, { passive: false });

// Desktop: click -> disappear
noBtn.addEventListener("click", disappearNoButton);

/* Yes button functionality */
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "flex";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "flex";

    if (gifResult) {
      gifResult.currentTime = 0;
      gifResult.muted = true;
      gifResult.loop = true;
      gifResult.play().catch((err) => console.warn(err));
    }
  }, 3000);
});
