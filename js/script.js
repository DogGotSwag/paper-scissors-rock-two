function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    switch (num) {
        case 1:
            return "paper";
        case 2:
            return "scissors";
        case 3:
            return "rock";
    }
}

function getHumanChoice() {
    return prompt("paper, scissors or rock???");
}

let humanScore = 0;
let computerScore = 0;