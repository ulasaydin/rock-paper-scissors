function computerPlay(){
    actions = ["rock","paper","scissors"];
    return actions[Math.floor(Math.random()*3)];
    } 
/*
function game1(){
    let playerScore = 0;
    let computerScore = 0;
    let computerSelection1 = computerPlay();
    let playerSelection1 = window.prompt("Pick \"Rock\" \"Paper\" or \"Scissors\" ");
    let firstRound = playRound(playerSelection1,computerSelection1);
    if(firstRound == "Win") playerScore++;
    else if(firstRound == "Lose") computerScore++;

    let computerSelection2 = computerPlay();
    let playerSelection2 = window.prompt("Pick \"Rock\" \"Paper\" or \"Scissors\" ");
    let secondRound = playRound(playerSelection2,computerSelection2);
    if(secondRound == "Win") playerScore++;
    else if(secondRound == "Lose") computerScore++;

    let computerSelection3 = computerPlay();
    let playerSelection3 = window.prompt("Pick \"Rock\" \"Paper\" or \"Scissors\" ");
    let thirdRound = playRound(playerSelection3,computerSelection3);
    if(thirdRound == "Win") playerScore++;
    else if(thirdRound == "Lose") computerScore++;

    let computerSelection4 = computerPlay();
    let playerSelection4 = window.prompt("Pick \"Rock\" \"Paper\" or \"Scissors\" ");
    let forthRound = playRound(playerSelection4,computerSelection4);
    if(forthRound == "Win") playerScore++;
    else if(forthRound == "Lose") computerScore++;    

    let computerSelection5 = computerPlay();
    let playerSelection5 = window.prompt("Pick \"Rock\" \"Paper\" or \"Scissors\" ");
    let fifthRound = playRound(playerSelection5,computerSelection5);
    if(fifthRound == "Win") playerScore++;
    else if(fifthRound == "Lose") computerScore++;

    if(playerScore>computerScore) console.log("You Win! Your Score: " + playerScore + " Computer's Score: " + computerScore + ".");
    else if(playerScore<computerScore) console.log("You Lose! Your Score: " + playerScore + " Computer's Score: " + computerScore + ".");
    else console.log("Draw! Your Score: " + playerScore + " Computer's Score: " + computerScore + ".");
}
*/

let userScore = 0;
let computerScore = 0;
const userScoreDOM = document.getElementById("user-score");
const computerScoreDOM = document.getElementById("computer-score");
const scoreTableDOM = document.querySelector(".score-table");
const statusDOM = document.querySelector(".status > p");
const rockDOM = document.getElementById("rock");
const paperDOM = document.getElementById("paper");
const scissorsDOM = document.getElementById("scissors");


function playRound(playerSelection,computerSelection) {
    playerSelection = String(playerSelection).toLowerCase();
    computerSelection = String(computerSelection).toLowerCase();
    if(playerSelection == "rock"){
      if(computerSelection == "rock") {
          draw();
            
      }
      else if(computerSelection == "paper"){
            computerScore ++;
            computerScoreDOM.innerHTML = computerScore;
            userScoreDOM.innerHTML = userScore;
            statusDOM.innerHTML = computerSelection[0].toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection[0].toUpperCase() + playerSelection.slice(1) + ". You Lost.";
          
      }
      else if(computerSelection == "scissors"){
            userScore++
            userScoreDOM.innerHTML = userScore;
            computerScore.innerHTML = computerScore;
            statusDOM.innerHTML = playerSelection[0].toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection[0].toUpperCase() + computerSelection.slice(1) + ". You win.";
      }
    }
    else if(playerSelection == "paper") {
      if(computerSelection == "rock") {
            userScore++
            userScoreDOM.innerHTML = userScore;
            computerScore.innerHTML = computerScore;
            statusDOM.innerHTML = playerSelection[0].toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection[0].toUpperCase() + computerSelection.slice(1) + ". You win.";
      }
      else if(computerSelection == "paper"){
            userScoreDOM.innerHTML = userScore;
            computerScore.innerHTML = computerScore;
            statusDOM.innerHTML = "Draw!";
      }
      else if(computerSelection == "scissors"){
            computerScore ++
            userScoreDOM.innerHTML = userScore;
            computerScoreDOM.innerHTML = computerScore;
            statusDOM.innerHTML = computerSelection[0].toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection[0].toUpperCase() + playerSelection.slice(1) + ". You Lost.";
      }
    }
    else if(playerSelection == "scissors") {
      if(computerSelection == "rock") {
            computerScore ++
            userScoreDOM.innerHTML = userScore;
            computerScoreDOM.innerHTML = computerScore;
            statusDOM.innerHTML = computerSelection[0].toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection[0].toUpperCase() + playerSelection.slice(1) + ". You Lost.";
      }
      else if(computerSelection == "paper"){
            userScore++
            userScoreDOM.innerHTML = userScore;
            computerScore.innerHTML = computerScore;
            statusDOM.innerHTML = playerSelection[0].toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection[0].toUpperCase() + computerSelection.slice(1) + ". You win.";
      }
      else if(computerSelection == "scissors"){
            userScoreDOM.innerHTML = userScore;
            computerScore.innerHTML = computerScore;
            statusDOM.innerHTML = "Draw!";
      }
    }
}

function game() {
    rockDOM.addEventListener("click", function(){
        playRound("rock",computerPlay());
    } )
    
    paperDOM.addEventListener("click", function(){
        playRound("paper",computerPlay());
    } )

    scissorsDOM.addEventListener("click", function(){
        playRound("scissors",computerPlay());
    } )
}
game();
