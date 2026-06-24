let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice;
    let randomNumber = Math.random();

    if (randomNumber <= 0.33) {
        computerChoice = "rock";
    } else if (randomNumber <= 0.66) {
        computerChoice = "paper";
    } else if (randomNumber <= 1) {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors!");

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            console.log("Tie!");
        } else if (computerChoice == "paper") {
            console.log("You lose! Paper beats rock.");
            computerScore += 1;
        } else if (computerChoice == "scissors") {
            console.log("You win! Rock beats scissors.");
            humanScore += 1;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win! Paper beats rock.");
            humanScore += 1;
        } else if (computerChoice == "paper") {
            console.log("Tie!");
        } else if (computerChoice == "scissors") {
            console.log("You lose! Scissors beat paper.");
            computerScore += 1;
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats scissors.");
            computerScore += 1;
        } else if (computerChoice == "paper") {
            console.log("You win! Scissors beat paper.");
            humanScore += 1;
        } else if (computerChoice == "scissors") {
            console.log("Tie!");
        }
    }

    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);