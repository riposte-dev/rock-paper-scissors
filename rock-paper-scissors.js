const buttons = document.querySelectorAll("button");
const gameAnnouncement = document.querySelector("#game-announcement");
const computerScoreDisplay = document.querySelector("#computer-score-display");
const humanScoreDisplay = document.querySelector("#human-score-display");
const computerChoiceDisplay = document.querySelector("img[alt='Computer choice'");
const humanChoiceDisplay = document.querySelector("img[alt='Human choice'");

const audioWin = new Audio("attachments/win.wav");

const POINTS_TO_WIN = 3; /* Minimum points needed to win */
const OUTCOMES = {
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

let computerScore = 0;
let humanScore = 0;

function capitalizeFirstLetter(givenString) {
    return givenString[0].toUpperCase() + givenString.slice(1);
}

function evaluateOutcome(humanChoice, computerChoice) {
    return OUTCOMES[humanChoice][computerChoice];
}

function setPlayerHandImage(playerHandDisplay, playerChoice) {
    switch (playerChoice) {
        case "rock":
            playerHandDisplay.src = "attachments/rock.png";
            break;
        case "paper":
            playerHandDisplay.src = "attachments/paper.png";
            break;
        case "scissors":
            playerHandDisplay.src = "attachments/scissors.png";
            break;
    }
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

function newGame() {
    computerScore = 0;
    humanScore = 0;

    computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;
    gameAnnouncement.textContent = "Ready to play?";

    setPlayerHandImage(computerChoiceDisplay, "rock");
    setPlayerHandImage(humanScoreDisplay, "rock");
}

function playRound(humanChoice, computerChoice) {
    let outcome = evaluateOutcome(humanChoice, computerChoice);

    switch (outcome) {
        case "win":
            humanScore += 1;
            gameAnnouncement.textContent = `${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}.`;
            break;
        case "lose":
            computerScore += 1;
            gameAnnouncement.textContent = `${capitalizeFirstLetter(computerChoice)} beats ${humanChoice}.`;
            break;
        case "tie":
            gameAnnouncement.textContent = "Tie!";
            break;
    }

    computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;

    setPlayerHandImage(computerChoiceDisplay, computerChoice);
    setPlayerHandImage(humanChoiceDisplay, humanChoice);
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = button.id;
        computerChoice = getComputerChoice();

        /* Check that there exists no winner yet */
        if (humanScore < POINTS_TO_WIN && computerScore < POINTS_TO_WIN) {
            playRound(humanChoice, computerChoice);

            /* After playing, check the newest round for a winner */
            if (humanScore == POINTS_TO_WIN) {
                gameAnnouncement.textContent += "\nYou won the game!";
                audioWin.play();
            } else if (computerScore == POINTS_TO_WIN) {
                gameAnnouncement.textContent += "\nYou lost the game!";
            }
        /* Check that there is a winner */
        } else if (humanScore == POINTS_TO_WIN || computerScore == POINTS_TO_WIN) {
            newGame();
        }
    })
});