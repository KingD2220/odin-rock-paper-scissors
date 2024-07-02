let humanScore = 0;
let computerScore = 0;

const result = document.querySelector(".result");
const score = document.querySelector(".score")

function getComputerChoice() {
    let random = Math.random();
    if (random <= 0.33333) {
        return "Rock";
    }
    else if (random <= 0.66666) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors");
    return choice;
}




function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

    let loseMessage = "You lose! " + computerChoice + " beats " + humanChoice + "!";
    let winMessage = "You win! " + humanChoice + " beats " + computerChoice + "!";

    if (humanChoice == computerChoice) {
        result.textContent = "Draw!";
    }
    else {
        if (humanChoice == "Rock" && computerChoice == "Scissors" ||
            humanChoice == "Paper" && computerChoice == "Rock" ||
            humanChoice == "Scissors" && "Paper") {
            humanScore++;
            result.textContent = winMessage;
        }
        else {
            computerScore++;
            result.textContent = loseMessage;
        }
    }
}

function resetScore() {
    humanScore = 0;
    computerScore = 0;
}

const button = document.querySelector('.buttonContainer');

button.addEventListener("click", (event) => {
    let target = event.target;

    playRound(target.className, getComputerChoice());
    score.textContent = "Your score is " + humanScore + ". The computer's score is " + computerScore + ".";
    
    if (humanScore === 5) {
        score.textContent += " You win the game!";
        resetScore();
    }
    if (computerScore === 5) {
        score.textContent += " You lost the game! Better luck next time!";
        resetScore();
    }
});
