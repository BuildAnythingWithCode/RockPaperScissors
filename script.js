'use strict';

// Buttons

const button = {
  rock: document.querySelector('#rock-btn'),
  paper: document.querySelector('#paper-btn'),
  scissors: document.querySelector('#scissors-btn'),
  reset: document.querySelector('#reset-btn'),
  toggleTheme: document.querySelector('#toggle-theme'),
};

// Refactored into an object above!

// const rockBtn = document.querySelector('#rock-btn');
// const paperBtn = document.querySelector('#paper-btn');
// const scissorsBtn = document.querySelector('#scissors-btn');
// const resetBtn = document.querySelector('#reset-btn');
// const toggleTheme = document.querySelector('#toggle-theme');

// Elements
const playerChoiceEl = document.querySelector('#player-choice');
const cpuChoiceEl = document.querySelector('#cpu-choice');
const winnerEl = document.querySelector('#winner');
const cpuScoreEl = document.querySelector('#cpu-score');
const playerScoreEl = document.querySelector('#player-score');

// Values
let cpuScore = 0;
let playerScore = 0;

// Functions
const resetGame = function () {
  cpuScore = 0;
  playerScore = 0;
  cpuScoreEl.textContent = cpuScore;
  playerScoreEl.textContent = playerScore;
  playerChoiceEl.textContent = '';
  cpuChoiceEl.textContent = '';
  winnerEl.textContent = '';
};

const cpuWins = function () {
  cpuScore++;
  cpuScoreEl.textContent = cpuScore;
  winnerEl.textContent = 'Computer';
};

const playerWins = function () {
  playerScore++;
  playerScoreEl.textContent = playerScore;
  winnerEl.textContent = 'Player';
};

const playRound = function (playerChoice) {
  const checkWinner = function () {
    if (cpuChoice === playerChoice) {
      winnerEl.textContent = 'Neither';
    } else if (cpuChoice === 'Rock') {
      if (playerChoice === 'Scissors') {
        cpuWins();
      } else {
        playerWins();
      }
    } else if (cpuChoice === 'Paper') {
      if (playerChoice === 'Rock') {
        cpuWins();
      } else {
        playerWins();
      }
    } else if (cpuChoice === 'Scissors') {
      if (playerChoice === 'Rock') {
        playerWins();
      } else {
        cpuWins();
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

const changeTheme = function () {
  document.documentElement.classList.toggle('light');
};

// Event Listeners
button.rock.addEventListener('click', () => playRound('Rock'));
button.paper.addEventListener('click', () => playRound('Paper'));
button.scissors.addEventListener('click', () => playRound('Scissors'));
button.reset.addEventListener('click', resetGame);
button.toggleTheme.addEventListener('click', changeTheme);
