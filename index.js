let playerSelection = "";
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const MIN = 1;
    const MAX = 3;
    const computerChoice = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
    switch(computerChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissor";
        default:
            return "some error occured";
    }
}

const playerChoice = document.querySelectorAll(".selection");
const result = document.querySelector("#result");

playerChoice.forEach((choice) => {
    choice.addEventListener("click", () => {
        playerSelection = choice.id;
        playGame(playerSelection, computerSelection);
        console.log(playerScore, computerScore);
        if(playerScore == 5){
            result.textContent = "Player Won! \nResetting the Game";
            resetGame();
        }
        else if(computerScore == 5){
            result.textContent = "Computer Won! \nResetting the Game";
            resetGame();
        }
    });
});

function playGame(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            ++computerScore;
            console.log("You lose! Paper Beats Rock")
        }
        else if(computerSelection == "rock"){
            console.log("Ooooo! You Both Choose Rock");
        }
        else {
            ++playerScore;
            console.log("You Win! Rock Beats Scissor")
        }
    }
    else if(playerSelection == "paper"){
        if(computerSelection == "paper"){
            console.log("Ooooo! You Both Choose Paper")
        }
        else if(computerSelection == "rock"){
            ++playerScore;
            console.log("You Win! Paper Beats Rock");
        }
        else {
            ++computerScore;
            console.log("You Lose! Scissor Beats Paper")
        }
    }
    else {
        if(computerSelection == "paper"){
            ++playerScore;
            console.log("You Win! Scissor Beats Paper")
        }
        else if(computerSelection == "rock"){
            ++computerScore;
            console.log("You Lose! Rock Beats Scissor");
        }
        else {
            console.log("Ooooo! You Both Choose Scissor")
        }
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}