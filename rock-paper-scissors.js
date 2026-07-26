const POINTS_TO_WIN = 3; /* Minimum points needed to win */

const buttons = document.querySelectorAll("button");
const gameAnnouncement = document.querySelector("#game-announcement");
const computerScoreDisplay = document.querySelector("#computer-score-display");
const humanScoreDisplay = document.querySelector("#human-score-display");
const computerChoiceDisplay = document.querySelector("img[alt='Computer choice'");
const humanChoiceDisplay = document.querySelector("img[alt='Human choice'");

const outcomes = {
    "rock": {
        "rock": "tie",
        "paper": "lose",
        "scissors": "win"
    },
    "paper": {
        "rock": "win",
        "paper": "tie",
        "scissors": "lose"
    },
    "scissors": {
        "rock": "lose",
        "paper": "win",
        "scissors": "tie"
    }
};

let humanScore = 0;
let computerScore = 0;
let message = "";

function capitalizeFirstLetter(givenString) {
    return givenString[0].toUpperCase() + givenString.slice(1);
}

function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber <= 0.33) {
        return "rock";
    } else if (randomNumber <= 0.66) {
        return "paper";
    } else if (randomNumber <= 1) {
        return "scissors";
    }
}

function evaluateOutcome(humanChoice, computerChoice) {
    return outcomes[humanChoice][computerChoice];
}

function playRound(humanChoice, computerChoice) {
    let outcome = evaluateOutcome(humanChoice, computerChoice);

    switch (outcome) {
        case "win":
            humanScore += 1;
            message = `${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}.`;
            break;
        case "lose":
            computerScore += 1;
            message = `${capitalizeFirstLetter(computerChoice)} beats ${humanChoice}.`;
            break;
        case "tie":
            message = "Tie!";
            break;
    }

    switch (humanChoice) {
        case "rock":
            humanChoiceDisplay.src = "attachments/rock.png";
            break;
        case "paper":
            humanChoiceDisplay.src = "attachments/paper.png";
            break;
        case "scissors":
            humanChoiceDisplay.src = "attachments/scissors.png";
            break;
    }

    switch (computerChoice) {
        case "rock":
            computerChoiceDisplay.src = "attachments/rock.png";
            break;
        case "paper":
            computerChoiceDisplay.src = "attachments/paper.png";
            break;
        case "scissors":
            computerChoiceDisplay.src = "attachments/scissors.png";
            break;
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