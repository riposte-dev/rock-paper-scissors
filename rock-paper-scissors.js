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

console.log(getHumanChoice());