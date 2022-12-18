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
    let playerChoice = prompt("Choose between Rock, Paper or Scissors for this round: ")
    playerChoice = playerChoice.toString()

    while (playerChoice.length < 4) {
        let playerChoice = prompt("Choose between Rock, Paper or Scissors for this round: ")
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
    // funcion comparando inputs de computer y player para decidir a quien dar un punto con variables para un += y asi ir sumando
}


let ComputerChoice 
let PlayerChoice 
let computerScore = 0 
let playerScore = 0 
// creamos variables para los choices del bucle


// creamos bucle para el juego hasta el primero llegar a 5
while (computerScore < 5 || playerScore < 5) {
    // bucle del juego
}

console.log("Game Over!")