let ComputerChoice 
let PlayerChoice 



function getComputerChoice() {
    let chosenNumber = Math.random() * 3
    chosenNumber = Math.floor(chosenNumber)

    if (chosenNumber == 0) {
        return "rock"
    } else if (chosenNumber == 1) {
        return "paper"
    } else if (chosenNumber == 2) {
        return "scissors"
    }
}

function getPlayerChoice() {
    let Playerchoise 
    playerChoice = prompt("Choose between Rock, Paper or Scissors for this round: ")
    playerChoice = playerChoice.toString()

    while (playerChoice.length < 4 || playerChoice === false) {
        playerChoice = prompt("Choose between Rock, Paper or Scissors for this round: ")
    }

    playerChoice = playerChoice.toLowerCase()
    if (playerChoice == "rock") {
        return "rock"
    } else if (playerChoice == "paper") {
        return "paper"
    } else if (playerChoice == "scissors" || playerChoice == "scisors") {
        return "scissors"
    } else {
        console.log("Rock chosen by default for not answering properly")
        return "rock"
    }
}

function gameRound() {
    ComputerChoice = getComputerChoice()
    PlayerChoice = getPlayerChoice()

    if (ComputerChoice == PlayerChoice) {
        console.log("This was a tie! No points ")
        computerPoints = 0
        playerPoints = 0
        return "nothing"
    } else if (ComputerChoice == "rock" && PlayerChoice == "paper") {
        console.log(`Player wins! Paper beats scissors`)
        computerPoints = 0
        playerPoints = 1
        return "player"
    } else if (ComputerChoice == "rock" && PlayerChoice == "scissors") {
        console.log(`Computer wins! Rock beats scissors`)
        computerPoints = 1
        playerPoints = 0
        return "computer"
    } else if (ComputerChoice == "paper" && PlayerChoice == "rock") {
        console.log(`Computer wins! Paper beats rock`)
        computerPoints = 1
        playerPoints = 0
        return "computer"
    } else if (ComputerChoice == "paper" && PlayerChoice == "scissors") {
        console.log(`Player wins! Scissors beats paper`)
        computerPoints = 0
        playerPoints = 1
        return "player"
    } else if (ComputerChoice == "scissors" && PlayerChoice == "rock") {
        console.log(`Player wins! Rock beats scissors`)
        computerPoints = 0
        playerPoints = 1
        return "player"
    } else if (ComputerChoice == "scissors" && PlayerChoice == "paper") {
        console.log(`Computer wins! Scissors beats paper`)
        computerPoints = 1
        playerPoints = 0
        return "computer"
    }
}


// Here the game starts // 
let computerScore = 0 
let playerScore = 0 
let gameIncrease

while (computerScore < 5 && playerScore < 5) {
    console.log(`Game Score --> Player: ${playerScore} || Computer: ${computerScore} `)
    gameIncrease = gameRound()

    if (gameIncrease == "computer") {
        computerScore += 1
    } else if (gameIncrease == "player") {
        playerScore += 1
    } else if (gameIncrease == "nothing") {
        console.log("No points increased!")
    }
}

if (computerScore == 5) {
    console.log("Game Over! Computer is victorious!")
} else if (playerScore == 5) {
    console.log("Game Over! Player is victorious!")
}
