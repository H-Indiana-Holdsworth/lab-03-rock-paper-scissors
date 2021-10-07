// import functions and grab DOM elements
import { didUserWin, getRandomThrow } from './utils.js';

const shootButton = document.getElementById('shoot-button');
const result = document.getElementById('result');
const numOfWins = document.getElementById('wins');
const numOfLosses = document.getElementById('losses');
const numOfDraws = document.getElementById('draws');
// initialize global state
let wins = 0;
let losses = 0;
let draws = 0;
// set event listeners 
shootButton.addEventListener('click', () => {
    const selected = document.querySelector('input[type=radio]:checked');
    if(!selected) {
      return error.classList.remove('hidden');
  }
  error.classList.add('hidden');
  const userThrow = selected.value;
  const computerThrow = getRandomThrow();

  if (userThrow === computerThrow) {
      draws++;
  } else if (didUserWin(userThrow, computerThrow)) {
    wins++;
    result.textContent = `You beat the machine and won! You should be cast in Terminator. The computer threw ${computerThrow}.`;
  } else {
    result.textContent = `You lost, you were outsmarted by a function that randomly selected a character...The computer threw ${computerThrow}.`
    losses++;
  } 

  numOfWins.textContent = wins;
  numOfLosses.textContent = losses;
  numOfDraws.textContent = draws;
});
  