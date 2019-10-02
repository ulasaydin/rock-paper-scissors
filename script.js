function computerPlay(){
    actions = ["rock","paper","scissors"];
    return actions[Math.floor(Math.random()*3)];
    } 

  function playRound(playerSelection,computerSelection) {
      playerSelection = String(playerSelection).toLowerCase();
      computerSelection = String(computerSelection).toLowerCase();
      if(playerSelection == "rock"){
        if(computerSelection == "rock") {
            return "Draw";
            console.log("Draw");
        }
        else if(computerSelection == "paper"){
            console.log("You Lose. Paper beats Rock.");
            return "Lose";
            
        }
        else if(computerSelection == "scissors"){
            console.log("You Win. Rock beats Scissors.");
            return "Win"
        }
      }
      else if(playerSelection == "paper") {
        if(computerSelection == "rock") {
            console.log("You Win. Paper beats Rock.");
            return "Win";
        }
        else if(computerSelection == "paper"){
            console.log("Draw.");
            return "Draw";
        }
        else if(computerSelection == "scissors"){
            console.log("You Lose. Scissors beat Paper.");
            return "Lose";
        }
      }
      else if(playerSelection == "scissors") {
        if(computerSelection == "rock") {
            console.log("You Lose. Rock beats Scissors.");
            return "Lose";
        }
        else if(computerSelection == "paper"){
            console.log("You Win. Scissors beat Paper.");
            return "Win";
        }
        else if(computerSelection == "scissors"){
            console.log("Draw.");
            return "Draw";
        }
      }
  }
function game(){
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