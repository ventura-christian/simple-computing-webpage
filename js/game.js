const userNumberInput = document.getElementById("user-number");
const userSubmit = document.getElementById("user-submit");
const gameHistory = document.querySelector("#num-game .game-history ul");
const gameStatusBar = document.querySelector("#num-game .status-bar span");
const coinMascot = document.querySelector("#num-game .pixel-mascot");

let history = [];
const MAX_HISTORY = 6;

let targetNumber = generateRandomNumber();
let attempts = 0;

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function playGame(userNumber) {
  attempts++;

  history.unshift({
    guess: userNumber,
    target: targetNumber,
    result: userNumber === targetNumber ? "Win" : "Loss",
  });

  if (history.length > MAX_HISTORY) {
    history.pop();
  }

  if (userNumber === targetNumber) {
    handleWin(userNumber);
  } else {
    handleLoss(userNumber);
  }

  renderHistory();
}

function handleWin(userNumber) {
  gameStatusBar.textContent = `YOU WIN!!! ${targetNumber} was correct...Play again.`;

  coinMascot.classList.add("win-glow");

  setTimeout(() => {
    coinMascot.classList.remove("win-glow");
  }, 2000);

  targetNumber = generateRandomNumber();
  attempts = 0;
}

function handleLoss(userNumber) {
  gameStatusBar.textContent = `${userNumber} is'nt the correct number. Try again.`;
}

function renderHistory() {
  gameHistory.innerHTML = "";

  history.forEach((entry, index) => {
    const li = document.createElement("li");
    li.textContent = `USER: ${entry.guess} | CPU: ${entry.target} | ${entry.result}`;
    gameHistory.appendChild(li);
  });
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
