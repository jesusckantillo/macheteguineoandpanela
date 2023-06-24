const optionButtons = document.querySelectorAll('#choices-container button')
const img = document.querySelectorAll('#choices-container button img')[0]
optionButtons.forEach(button =>{
    button.addEventListener('click', handleButtonClick)
});


function changeImageByChoice(image,choice){
    switch(choice){
        case 'rock':
            image.src = 'static/panela.jpg'
            break;
        case 'paper':
            image.src = 'static/guineo.jpeg'
            break;
        case 'scissors':
            image.src = 'static/machete.jpg'
            break;
}
}


function displayComputerChoice(computerChoice){
    const computerButtonImage= document.getElementById('versus-section-computer-button-img')
    changeImageByChoice(computerButtonImage,computerChoice)
   
}


function displayUserChoice(userChoice){
    const userButtonImage= document.getElementById('versus-section-player-button-img')
    changeImageByChoice(userButtonImage,userChoice)
}


function displayWinner(winner){
    const winnerDisplay = document.getElementById('result-text')
    winnerDisplay.textContent = winner;
}


function handleButtonClick(event){
    const playerSelection = event.target.alt;
    let computerSelection = getComputerChoice();
    let winner = getWinner(computerSelection,playerSelection);
    displayComputerChoice(computerSelection);
    displayUserChoice(playerSelection);
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
    console.log("Computer: " + computerSelection);
    console.log("Player: " + playerSelection);

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





