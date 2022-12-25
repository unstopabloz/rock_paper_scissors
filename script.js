// variables defined
let ComputerChoice 
let PlayerChoice


// game execution functions
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
    let result = gameEngine(playerChoice, computerChoice);
    pointsUpdate(result);
    let endGame = endGameCheck(playerPoints, computerPoints);
    if (endGame) {
        playerPoints = 0
        computerPoints = 0
    }
}

function gameEngine(playerChoice, computerChoice) {
    if (computerChoice == playerChoice) {
        console.log("This was a tie! No points ")
        return "nothing"
    } else if (computerChoice == "rock" && playerChoice == "paper") {
        console.log(`Player wins! Paper beats scissors`)
        return "player"
    } else if (computerChoice == "rock" && playerChoice == "scissors") {
        console.log(`Computer wins! Rock beats scissors`)
        return "computer"
    } else if (computerChoice == "paper" && playerChoice == "rock") {
        console.log(`Computer wins! Paper beats rock`)
        return "computer"
    } else if (computerChoice == "paper" && playerChoice == "scissors") {
        console.log(`Player wins! Scissors beats paper`)
        return "player"
    } else if (computerChoice == "scissors" && playerChoice == "rock") {
        console.log(`Player wins! Rock beats scissors`)
        return "player"
    } else if (computerChoice == "scissors" && playerChoice == "paper") {
        console.log(`Computer wins! Scissors beats paper`)
        return "computer"
    }
}

let playerPoints = 0
let computerPoints = 0
function pointsUpdate(result) {
    if (result == 'nothing') {
        playerPoints += 0
        computerPoints += 0
    } else if (result =='player') {
        playerPoints += 1
        computerPoints += 0
    } else if (result =='computer') {
        playerPoints += 0
        computerPoints += 1
    }
}

function endGameCheck(playerPoints, computerPoints) {
    if (playerPoints == 5) {
        let chosenOne = document.querySelector('.winnerAnnouncer');
        let winner = document.createElement('p');
        winner.textContent = 'Player Wins!'
        winner.style.cssText = "color: red; font-size: 40px";
        chosenOne.appendChild(winner);
        return true
    } else if (computerPoints == 5) {
        let chosenOne = document.querySelector('.winnerAnnouncer');
        let winner = document.createElement('p');
        winner.textContent = 'Computer Wins!'
        winner.style.cssText = "color: orange; font-size: 40px";
        chosenOne.appendChild(winner);
        return true
    } else {
        console.log('No winner yet. Game keeps executing');
    }
}