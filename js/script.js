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

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    computerChoice.toLowerCase();

    if(humanChoice == computerChoice) {
        console.log("you tie!");
        return 0;
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You WIN! Paper beats Rock");
        return 1;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You WIN! Scissors beats Paper");
        return 1;
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You WIN! Rock beats Scissors");
        return 1;
    }
    else {
        console.log(`You Lose! ${computerChoice[0].toUpperCase()+computerChoice.slice(1).toUpperCase()} beats ${humanChoice[0]+computerChoice.slice(1)}`);
        return 2;
    }
}
