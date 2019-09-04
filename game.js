let rps = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let compScore = 0;

function computerPlay() {
    let compChoice = rps[Math.floor(Math.random() * rps.length)];
    return compChoice;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        displayResult.textContent = 'DRAW!'
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        displayResult.textContent = `You Won! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else {
        displayResult.textContent = `You Lost! ${computerSelection} beats ${playerSelection}`;
        compScore++;
    }
}


function gameOver() {
    if (playerScore == 5) {
        scoreDiv.textContent = `Player won ${playerScore} - ${compScore}`
    } else if (compScore == 5) {
        scoreDiv.textContent = `Computer won ${playerScore} - ${compScore}`
    }
    playerScore = 0;
    compScore = 0;
}

function game(e) {
    let playerChoice = e.target.textContent;
    let compChoice = computerPlay();

    playRound(playerChoice, compChoice);

    scoreDiv.textContent = `Player score:  ${playerScore} ~~~ Computer score:  ${compScore}`;

    if (playerScore == 5 || compScore == 5) gameOver();
}

const scoreDiv = document.querySelector('#score');
const displayResult = document.querySelector('#result');
const myBtns = document.querySelectorAll('.btn');
myBtns.forEach(choice => choice.addEventListener('click', game));