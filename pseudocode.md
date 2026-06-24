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