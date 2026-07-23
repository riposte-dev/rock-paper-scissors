let humanScore = 0;
let computerScore = 0;
let message = "";
const buttons = document.querySelectorAll("button");
const gameAnnouncement = document.querySelector("#game-announcement");
const computerScoreDisplay = document.querySelector("#computer-score-display");
const humanScoreDisplay = document.querySelector("#human-score-display");

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

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "rock") {
                message = "Tie!"
            } else if (computerChoice == "paper") {
                message = "You lose! Paper beats rock."
                computerScore += 1;
            } else if (computerChoice == "scissors") {
                message = "You win! Rock beats scissors."
                humanScore += 1;
            }

            break;
        case "paper":
            if (computerChoice == "rock") {
                message = "You win! Paper beats rock."
                humanScore += 1;
            } else if (computerChoice == "paper") {
                message = "Tie!"
            } else if (computerChoice == "scissors") {
                message = "You lose! Scissors beat paper."
                computerScore += 1;
            }

            break;
        case "scissors":
            if (computerChoice == "rock") {
                message = "You lose! Rock beats scissors."
                computerScore += 1;
            } else if (computerChoice == "paper") {
                message = "You win! Scissors beat paper."
                humanScore += 1;
            } else if (computerChoice == "scissors") {
                message = "Tie!"
            }
    }

    gameAnnouncement.textContent = message;
    computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;

    if (humanScore >= 5) {
        gameAnnouncement.textContent += "\nYou won the game!";
    } else if (computerScore >= 5) {
        gameAnnouncement.textContent += "\nYou lost the game!";
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = button.id;
        computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    })
});