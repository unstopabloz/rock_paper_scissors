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

function gameRound(button) {
    let computerChoice = getComputerChoice();
    let playerChoice;
    if (button == 1) {
        playerChoice = 'rock'
    } else if (button == 2) {
        playerChoice = 'paper'
    } else if (button == 3) {
        playerChoice = 'scissors'
    }
    console.log(playerChoice);
}

function gameEngine(playerChoice, computerChoice) {
    if (computerChoice == playerChoice) {
        console.log("This was a tie! No points ")
        computerPoints = 0
        playerPoints = 0
        return "nothing"
    } else if (computerChoice == "rock" && playerChoice == "paper") {
        console.log(`Player wins! Paper beats scissors`)
        computerPoints = 0
        playerPoints = 1
        return "player"
    } else if (computerChoice == "rock" && playerChoice == "scissors") {
        console.log(`Computer wins! Rock beats scissors`)
        computerPoints = 1
        playerPoints = 0
        return "computer"
    } else if (computerChoice == "paper" && playerChoice == "rock") {
        console.log(`Computer wins! Paper beats rock`)
        computerPoints = 1
        playerPoints = 0
        return "computer"
    } else if (computerChoice == "paper" && playerChoice == "scissors") {
        console.log(`Player wins! Scissors beats paper`)
        computerPoints = 0
        playerPoints = 1
        return "player"
    } else if (computerChoice == "scissors" && playerChoice == "rock") {
        console.log(`Player wins! Rock beats scissors`)
        computerPoints = 0
        playerPoints = 1
        return "player"
    } else if (computerChoice == "scissors" && playerChoice == "paper") {
        console.log(`Computer wins! Scissors beats paper`)
        computerPoints = 1
        playerPoints = 0
        return "computer"
    }
}