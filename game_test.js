var userChoice = prompt("Do you choose rock, paper or scissors?");

// define computer choices from number to strings
var computerChoice = Math.random();

        if(computerChoice > 0.33) {
            computerChoice = "rock";
        }

        else if(computerChoice > 0.66) {
            computerChoice = "scissors";
        }

        else {
            computerChoice = "paper";
        }

var compare = function(choice1,choice2) {
    if (choice1===choice2) {
        return "Remiza"
    }

    else if (choice1 === "rock") {
        if (choice2 === "paper"){
            console.log("Rock wins");
        }
        else {
            console.log("Paper wins");
        }
    }

    else if (choice1 === "paper"){

        if (choice2 === "rock"){
            console.log("Rock wins");
        }
        else {
            console.log("Scissors wins");
        }
    }

    else if (choice1 === "scissors") {

        if (choice2 === "rock"){
            console.log("Rock wins");
        }
        else {
            console.log("Scissors wins");
        }
    }
};

console.log("User:" + userChoice);
console.log("Computer:" + computerChoice);
compare(userChoice,computerChoice);


