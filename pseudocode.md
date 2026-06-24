## Step 2: Write the logic to get the computer choice
function getComputerChoice()
    local computerChoice
    local randomNumber = Math.random()

    if (randomNumber <= 0.33) {
        computerChoice = "rock"
    } elseif (randomNumber <= 0.66) {
        computerChoice = "paper"
    } elseif (randomNumber <= 1) {
        computerChoice = "scissors"
    }

    return computerChoice
end

## Step 3: Write the logic to get the human choice
function getHumanChoice()
    local humanChoice = prompt("Choose rock, paper, or scissors!", "rock")

    return humanChoice
end

## Step 5: Write the logic to play a single round
function playRound(humanChoice, computerChoice)
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            print("Tie! Rock ties with rock!")
        } elseif (computerChoice == "paper") {
            print("You lose! Paper beats rock!")
            computerScore += 1
        } elseif (computerChoie == "scissors") {
            print("You win! Rock beats scissors!")
            humanScore += 1
        }
    } elseif (humanChoice == "paper") {
        if (computerChoice == "rock") {
            print("You win! Paper beats rock!")
            humanScore += 1
        } elseif (computerChoice == "paper") {
            print("Tie! Paper ties with paper!")
        } elseif (computerChoie == "scissors") {
            print("You lose! Scissors beat paper!")
            computerScore += 1
        }
    } elseif (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            print("You lose! Rock beats scissors!")
            computerScore += 1
        } elseif (computerChoice == "paper") {
            print("You win! Scissors beat paper!")
            humanScore += 1
        } elseif (computerChoie == "scissors") {
            print("Tie! Scissors tie with scissors!")
        }
    }
end