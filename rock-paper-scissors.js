const POINTS_TO_WIN = 3; /* Minimum points needed to win */

const buttons = document.querySelectorAll("button");
const gameAnnouncement = document.querySelector("#game-announcement");
const computerScoreDisplay = document.querySelector("#computer-score-display");
const humanScoreDisplay = document.querySelector("#human-score-display");
const computerChoiceDisplay = document.querySelector("img[alt='Computer choice'");
const humanChoiceDisplay = document.querySelector("img[alt='Human choice'");

let humanScore = 0;
let computerScore = 0;
let message = "";

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
            humanChoiceDisplay.src = "attachments/rock.png";

            if (computerChoice == "rock") {
                computerChoiceDisplay.src = "attachments/rock.png";
                message = "Tie!"
            } else if (computerChoice == "paper") {
                computerChoiceDisplay.src = "attachments/paper.png";
                message = "Paper beats rock."
                computerScore += 1;
            } else if (computerChoice == "scissors") {
                computerChoiceDisplay.src = "attachments/scissors.png";
                message = "Rock beats scissors."
                humanScore += 1;
            }

            break;
        case "paper":
            humanChoiceDisplay.src = "attachments/paper.png";

            if (computerChoice == "rock") {
                computerChoiceDisplay.src = "attachments/rock.png";
                message = "Paper beats rock."
                humanScore += 1;
            } else if (computerChoice == "paper") {
                computerChoiceDisplay.src = "attachments/paper.png";
                message = "Tie!"
            } else if (computerChoice == "scissors") {
                computerChoiceDisplay.src = "attachments/scissors.png";
                message = "Scissors beat paper."
                computerScore += 1;
            }

            break;
        case "scissors":
            humanChoiceDisplay.src = "attachments/scissors.png";

            if (computerChoice == "rock") {
                computerChoiceDisplay.src = "attachments/rock.png";
                message = "Rock beats scissors."
                computerScore += 1;
            } else if (computerChoice == "paper") {
                computerChoiceDisplay.src = "attachments/paper.png";
                message = "Scissors beat paper."
                humanScore += 1;
            } else if (computerChoice == "scissors") {
                computerChoiceDisplay.src = "attachments/scissors.png";
                message = "Tie!"
            }
    }

    gameAnnouncement.textContent = message;
    computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;

    /* Check for winner */
    if (humanScore == POINTS_TO_WIN) {
        gameAnnouncement.textContent += "\nYou won the game!";
    } else if (computerScore == POINTS_TO_WIN) {
        gameAnnouncement.textContent += "\nYou lost the game!";
    }
}

function newGame() {
    humanScore = 0;
    computerScore = 0;
    message = "Ready to play?";

    computerChoiceDisplay.src = "attachments/rock.png";
    humanChoiceDisplay.src = "attachments/rock.png";

    gameAnnouncement.textContent = message;
    computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = button.id;
        computerChoice = getComputerChoice();

        /* There exists no winner yet */
        if (humanScore < POINTS_TO_WIN && computerScore < POINTS_TO_WIN) {
            playRound(humanChoice, computerChoice);

        /* There is a winner */
        } else if (humanScore == POINTS_TO_WIN || computerScore == POINTS_TO_WIN) {
            newGame();
        }
    })
});