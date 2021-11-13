/*All the java for my rps project*/

/*First function is the computer pick*/
function computerPlay() {
    let num = Math.floor(Math.random() * 3)
    if (num === 0) {
        return "Rock";
    } else if (num === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You won! Rock beats scissors";
        } else if (computerSelection === "rock") {
            return "it's a draw";
        } else {
            return "you lost! Paper beats rock";
        }
    } 

    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You won! Scissors beats paper";
        } else if (computerSelection === "rock") {
            return "You lost! Rock beats scissors";
        } else {
            return "it's a draw";
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You won! Paper beats rock";
        } else if (computerSelection === "scissors") {
            return "You lost! Scissors beats paper";
        } else {
            return "it's a draw";
        }
    }
}

let playerSelection = "PAPER";
let computerSelection = computerPlay();

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));