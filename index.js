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

function getPlayerChoice() {
    const playerChoice = prompt(`Can only input below 3 values,\nRock, Paper,Scissor`);
    switch(playerChoice){
        case "Rock":
        case "rock":
            return "Rock";
        case "Paper":
        case "paper":
            return "Paper";
        case "Scissor":
        case "scissor":
            return "Scissor";
        default:
            return alert("Enter valid input");
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    function playRound(playerSelection, computerSelection) {
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

    let playerSelection = getPlayerChoice().toLowerCase();
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    playerSelection = getPlayerChoice().toLowerCase();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    playerSelection = getPlayerChoice().toLowerCase();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    playerSelection = getPlayerChoice().toLowerCase();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    playerSelection = getPlayerChoice().toLowerCase();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    console.log(playerScore, computerScore);

    if(playerScore > computerScore)
        return "YOU WIN!!!";
    else if (playerScore == computerScore)
        return "IT'S A DRAW! TRY AGAIN"
    else
        return "YOU LOSE! TRY AGAIN";
}

console.log(playGame());
