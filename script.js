// Rock Paper Scissors

// ADD YOUR FUNCTIONS BELOW THIS LINE:
document.getElementById("rock").addEventListener("click", rockButton);
document.getElementById("paper").addEventListener("click", paperButton);
document.getElementById("scissors").addEventListener("click", scissorsButton);
let playerWin = document.getElementById("playerWins");
let computerWin = document.getElementById("computerWins");
let playerChoice = document.getElementById("playerChoice");
let computerChoice = document.getElementById("computerChoice");
let outcome = document.getElementById("outcome");
let playerNum = 0;
let computerNum = 0;

function rockButton() {
  let randNum = Math.random();
  playerChoice.src = "images/rock.png";
  playerChoice.alt = "rock";

  if (randNum <= 0.33333) {
    computerChoice.src = "images/rock.png";
    computerChoice.alt = "rock";
    outcome.innerHTML = "DRAW";
  } else if (randNum <= 0.666666) {
    computerChoice.src = "images/paper.png";
    computerChoice.alt = "paper";
    computerNum++;
    computerWin.innerHTML = computerNum;
    outcome.innerHTML = "COMPUTER WINS";
  } else {
    computerChoice.src = "images/scissors.png";
    computerChoice.alt = "scissors";
    playerNum++;
    playerWin.innerHTML = playerNum;
    outcome.innerHTML = "PLAYER WINS";
  }
}

function paperButton() {
  let randNum = Math.random();
  playerChoice.src = "images/paper.png";
  playerChoice.alt = "paper";

  if (randNum <= 0.33333) {
    computerChoice.src = "images/rock.png";
    computerChoice.alt = "rock";
    playerNum++;
    playerWin.innerHTML = playerNum;
    outcome.innerHTML = "PLAYER WINS";
  } else if (randNum <= 0.666666) {
    computerChoice.src = "images/paper.png";
    computerChoice.alt = "paper";
    outcome.innerHTML = "DRAW";
  } else {
    computerChoice.src = "images/scissors.png";
    computerChoice.alt = "scissors";
    computerNum++;
    computerWin.innerHTML = computerNum;
    outcome.innerHTML = "COMPUTER WINS";
  }
}

function scissorsButton() {
  let randNum = Math.random();
  playerChoice.src = "images/scissors.png";
  playerChoice.alt = "scissors";

  if (randNum <= 0.33333) {
    computerChoice.src = "images/rock.png";
    computerChoice.alt = "rock";
    computerNum++;
    computerWin.innerHTML = computerNum;
    outcome.innerHTML = "COMPUTER WINS";
  } else if (randNum <= 0.666666) {
    computerChoice.src = "images/paper.png";
    computerChoice.alt = "paper";
    playerNum++;
    playerWin.innerHTML = playerNum;
    outcome.innerHTML = "PLAYER WINS";
  } else {
    computerChoice.src = "images/scissors.png";
    computerChoice.alt = "scissors";
    outcome.innerHTML = "DRAW";
  }
}
