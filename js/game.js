const userNumberInput = document.getElementById("user-number");
const userSubmit = document.getElementById("user-submit");
const gameHistory = document.querySelector("#num-game .game-history ul");
const gameStatusBar = document.querySelector("#num-game .status-bar span");
const coinMascot = document.querySelector("#num-game .pixel-mascot");

let history = [];
const MAX_HISTORY = 5;

let targetNumber = generateRandomNumber();
let attempts = 0;

function generateRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

function playGame(userNumber) {
  attempts++;

  if (userNumber === targetNumber) {
    handleWin(userNumber);
  } else {
    handleLoss(userNumber);
  }
}

function handleWin(userNumber) {
  gameStatusBar.textContent = `You got it, ${targetNumber} was the correct number!! Starting new game...`;

  targetNumber = generateRandomNumber();
  attempts = 0;
}

function handleLoss(userNumber) {
  gameStatusBar.textContent = `Sorry, ${userNumber} is'nt correct. Try again.`;
}

userSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  const userNum = parseInt(userNumberInput.value, 10);

  if (isNaN(userNum) || userNum < 1 || userNum > 10) {
    gameStatusBar.textContent =
      "Invalid input, enter a number between 1 and 10.";
    userNumberInput.value = "";
    return;
  }

  playGame(userNum);
  userNumberInput.value = "";
});
