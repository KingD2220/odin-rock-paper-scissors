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


function playGame() {

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    
        let loseMessage = "You lose! " + computerChoice + " beats " + humanChoice + "!";
        let winMessage = "You win! " + humanChoice + " beats " + computerChoice + "!";
    
        if (humanChoice == computerChoice) {
            return "Draw!";
        }
        else {
            if (humanChoice == "Rock" && computerChoice == "Scissors" || 
            humanChoice == "Paper" && computerChoice == "Rock" || 
            humanChoice == "Scissors" && "Paper") {
                humanScore++;
                console.log(winMessage);
            }
            else {
                computerScore++;
                console.log(loseMessage);
            }
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    for (i = 1; i <= 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }

    console.log("Your final score is " + humanScore + ". The computer's score is " + computerScore + ".")
}

