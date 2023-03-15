// define variables to store player and computer scores
let playerScore = 0;
let computerScore = 0;

// get the HTML elements we need to interact with
const playerScoreElem = document.getElementById('player-score');
const computerScoreElem = document.getElementById('computer-score');
const resultElem = document.querySelector('.result');
const resultTextElem = document.getElementById('result-text');
const choicesElems = document.querySelectorAll('.choice');

// define a function to generate a random computer choice
function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// define a function to play a single round
function playRound(playerSelection) {
  const computerSelection = computerPlay();

  // update result text
  resultTextElem.textContent = `You played ${playerSelection}. Computer played ${computerSelection}.`;

  // determine winner and update scores
  if (playerSelection === computerSelection) {
    resultElem.classList.add('tie');
    resultElem.textContent = 'It\'s a tie!';
  } else if (
    (playerSelection === 'rock'&& computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
    resultElem.classList.remove('tie', 'computer');
    resultElem.classList.add('player');
    resultElem.textContent = 'You win!';
    playerScore++;
    playerScoreElem.textContent = playerScore;
    } else {
    resultElem.classList.remove('tie', 'player');
    resultElem.classList.add('computer');
    resultElem.textContent = 'Computer wins!';
    computerScore++;
    computerScoreElem.textContent = computerScore;
    }
    
    // show result element with animation
    resultElem.classList.add('show');
    setTimeout(() => resultElem.classList.remove('show'), 1000);
    }
    
    // add event listeners to the choice buttons
    choicesElems.forEach(choice => {
    choice.addEventListener('click', () => playRound(choice.classList[1]));
    });
