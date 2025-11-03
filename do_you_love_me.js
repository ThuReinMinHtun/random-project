const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Move "No" button randomly when hovered
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// "Yes" button functionality
yesBtn.addEventListener("click", () => {
  // Hide question
  questionContainer.style.display = "none";
  // Show heart loader
  heartLoader.style.display = "flex";

  // After 3 seconds, show result
  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "flex";
    gifResult.play();
  }, 3000);
});
