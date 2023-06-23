const optionButtons = document.querySelectorAll('#choices-container button')

optionButtons.forEach(button =>{
    button.addEventListener('click', handleButtonClick)
});

function displayComputerChoice(computerChoice){
    const computerChoiceDisplay = document.getElementById('computer-choice-text')
    computerChoiceDisplay.textContent = computerChoice;
}


function displayWinner(winner){
    const winnerDisplay = document.getElementById('result-text')
    winnerDisplay.textContent = winner;
    console.log(winner);
}


function handleButtonClick(event){
    const playerSelecion = event.target.id;
    let computerSelection = getComputerChoice();
    let winner = getWinner(computerSelection,playerSelecion);
    displayComputerChoice(computerSelection);
    displayWinner(winner);
}




function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getWinner(computerSelection, playerSelection) {
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if (computerSelection === playerSelection) {
        return "Tie" + computerSelection + " vs " + playerSelection;
    }

    if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            return "You win, paper vs rock";
        } else {
            return "You lose, scissors vs rock";
        }
    }

    if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            return "You lose, rock vs paper";
        } else {
            return "You win, scissors vs paper";
        }
    }

    if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            return "You win, rock vs scissors";
        } else {
            return "You lose, paper vs scissors";
        }
    }
}





