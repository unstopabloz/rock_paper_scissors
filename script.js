function getComputerChoice() {
    let chosenNumber = Math.random() * 3
    chosenNumber = Math.floor(chosenNumber)

    if (chosenNumber == 0) {
        return "Rock"
    } else if (chosenNumber == 1) {
        return "Paper"
    } else if (chosenNumber == 2) {
        return "Scissors"
    }
alert(getComputerChoice())
}
getComputerChoice()
function getPlayerChoice() {
    // input por el choice
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