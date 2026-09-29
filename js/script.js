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

function updateResultsDiv(newResultsText) {
    let results = document.querySelector(".results");
    results.textContent = `
    Ur Score: ${humanScore}
    Computer Score: ${computerScore}
    ${newResultsText}
    `;
}

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    computerChoice.toLowerCase();

    if(humanChoice == computerChoice) {
        updateResultsDiv("you tie!");
        return 0;
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore++
        updateResultsDiv("You WIN! Paper beats Rock");
        return 1;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++
        updateResultsDiv("You WIN! Scissors beats Paper");
        return 1;
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++
        updateResultsDiv("You WIN! Rock beats Scissors");
        return 1;
    }
    else {
        computerScore++;
        updateResultsDiv(`You Lose! ${computerChoice[0].toUpperCase()+computerChoice.slice(1).toUpperCase()} beats ${humanChoice[0]+computerChoice.slice(1)}`);
        return 2;
    }
}


let buttonPaper = document.createElement("button");
buttonPaper.innerText = "paper";
let buttonScissors = document.createElement("button");
buttonScissors.innerText = "scissors";
let buttonRock = document.createElement("button");
buttonRock.innerText = "rock";

let buttonContainer = document.createElement("ul");

buttonContainer.appendChild(buttonPaper);
buttonContainer.appendChild(buttonScissors);
buttonContainer.appendChild(buttonRock);

let humanScore = 0;
let computerScore = 0;
buttonContainer.addEventListener("click", (e) => {
    let playerSelection = e.target.innerText;
    playRound(playerSelection, getComputerChoice());

    if(humanScore === 5) {
        results.textContent = "U are the winner!!";
    } 
    if(computerScore == 5){
        results.textContent = "U lost to the bot wat a loser";
    }
});

let results = document.createElement("div");
results.classList.add("results");


document.body.appendChild(buttonContainer);
document.body.appendChild(results);
