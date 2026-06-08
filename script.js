// Buttons
rockBtn = document.querySelector('#rock-btn');
paperBtn = document.querySelector('#paper-btn');
scissorsBtn = document.querySelector('#scissors-btn');
resetBtn = document.querySelector('#reset-btn');

// Elements
playerChoiceEl = document.querySelector('#player-choice');
cpuChoiceEl = document.querySelector('#cpu-choice');
winnerEl = document.querySelector('#winner');
cpuScoreEl = document.querySelector('#cpu-score');
playerScoreEl = document.querySelector('#player-score');

// Values
let cpuScore = 0;
let playerScore = 0;

// Functions
// const logScore = function (playerChoice, cpuChoice) {
//   playerChoiceEl.textContent = playerChoice;
//   cpuChoiceEl.textContent = cpuChoice;
// };

const resetGame = function () {
  let cpuScore = 0;
  let playerScore = 0;
  cpuScoreEl.textContent = cpuScore;
  playerScoreEl.textContent = playerScore;
  playerChoiceEl.textContent = '';
  cpuChoiceEl.textContent = '';
};

const playRound = function (playerChoice) {
  const checkWinner = function () {
    if (cpuChoice === playerChoice) {
      winnerEl.textContent = 'Neither';
    } else if (cpuChoice === 'Rock') {
      if (playerChoice === 'Scissors') {
        cpuScore++;
        cpuScoreEl.textContent = cpuScore;
        winnerEl.textContent = 'Computer';
      } else {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        winnerEl.textContent = 'Player';
      }
    } else if (cpuChoice === 'Paper') {
      if (playerChoice === 'Rock') {
        cpuScore++;
        cpuScoreEl.textContent = cpuScore;
        winnerEl.textContent = 'Computer';
      } else {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        winnerEl.textContent = 'Player';
      }
    } else if (cpuChoice === 'Scissors') {
      if (playerChoice === 'Rock') {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        winnerEl.textContent = 'Player';
      } else {
        cpuScore++;
        cpuScoreEl.textContent = cpuScore;
        winnerEl.textContent = 'Computer';
      }
    }
  };

  let cpuChoice;
  const ranNum = Math.trunc(Math.random() * 3) + 1;
  if (ranNum === 1) {
    cpuChoice = 'Rock';
  } else if (ranNum === 2) {
    cpuChoice = 'Paper';
  } else {
    cpuChoice = 'Scissors';
  }
  cpuChoiceEl.textContent = cpuChoice;
  playerChoiceEl.textContent = playerChoice;
  checkWinner();
};

// Event Listeners
rockBtn.addEventListener('click', () => playRound('Rock'));
paperBtn.addEventListener('click', () => playRound('Paper'));
scissorsBtn.addEventListener('click', () => playRound('Scissors'));
resetBtn.addEventListener('click', resetGame);
