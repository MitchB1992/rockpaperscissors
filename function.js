let computersChoice = '';

// Function to set the player's choice
const setPlayerChoice = (choice) => {
    playerChoice = choice;
    console.log("Player's choice:", playerChoice);
};

// Event listeners for the rock, paper, and scissors buttons
document.getElementById("rockButton").addEventListener('click', () => {
    setPlayerChoice("rock");
});

document.getElementById("paperButton").addEventListener('click', () => {
    setPlayerChoice("paper");
});

document.getElementById("scissorsButton").addEventListener('click', () => {
    setPlayerChoice("scissors");
});


let compare = (computer, player) => {
    if (computer === player) {
        return "The result is a tie!";
    } else if (computer === "rock") {
        if (player === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    } else if (computer === "paper") {
        if (player === "rock") {
            return "paper wins";
        } else {
            return "scissors wins";
        }
    } else if (computer === "scissors") {
        if (player === "rock") {
            return "rock wins";
        } else {
            return "scissors wins";
        }
    }
}

let playerChoice = ''; // Variable to store the player's choice

let compareResults = document.getElementById("compareResults");

compareResults.addEventListener('click', () => {
    if (playerChoice) {
        computersChoice = getComputersChoice(); // Function to generate the computer's choice
        console.log("Computer's choice:", computersChoice);
        let result = compare(computersChoice, playerChoice);
        console.log(result);
    } else {
        console.log("Please select a choice before comparing.");
    }
});

// Function to generate the computer's choice (similar to your original code)
function getComputersChoice() {
    let random = Math.random();
    if (random < 0.33) {
        return "rock";
    } else if (random < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}


