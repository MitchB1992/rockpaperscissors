
let computersChoice = Math.random();
if (computersChoice < 0.33) {
    computersChoice = "rock";
} else if (computersChoice < 0.67) {
    computersChoice = "paper";
} else {
    computersChoice = "scissors";
}

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

// Replace 'playerChoice' with the actual choice made by the player ('rock', 'paper', or 'scissors')
let playerChoice = "paper"; // Replace this with the player's actual choice
let result = compare(computersChoice, playerChoice);

let compareResults = document.getElementById("compareResults"); // Assuming you have an element with the ID "compareResults"

compareResults.addEventListener('click', () => {
    console.log("Computer's choice:", computersChoice);
    console.log("Player's choice:", playerChoice);
    console.log(result);
});
