let computerScore = 0;
let humanScore = 0;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const scoreDiv = document.getElementById("score");
const againButton = document.getElementById("again");

function getComputerChoice() {
  let choice = Math.random();

  if (choice <= 0.333) {
    return "paper";
  } else if (choice > 0.333 && choice <= 0.666) {
    return "scissors";
  } else {
    return "rock";
  }
}

function playRound(humanChoice, computerChoice) {
  let resultMessage;
  if (humanChoice === computerChoice) {
    resultMessage = `Your choice - ${humanChoice} <br>computer choice - ${computerChoice}  <br>DRAW!, [H: ${humanScore} | C: ${computerScore}]`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    resultMessage = `Your choice - ${humanChoice} <br>computer choice - ${computerChoice}  <br>YOU WIN!,  [H: ${humanScore} | C: ${computerScore}]`;
  } else {
    computerScore++;
    resultMessage = `Your choice - ${humanChoice} <br>computer choice - ${computerChoice}  <br>COMPUTER WINS!,  [H: ${humanScore} | C: ${computerScore}]`;
  }

  scoreDiv.innerHTML = resultMessage;

  if (computerScore === 5 || humanScore === 5) {
    if (computerScore > humanScore) {
      scoreDiv.innerHTML =
        "YOU LOSE! <br>" +
        `Your Score: ${humanScore} ||  Computer Score: ${computerScore}`;
      scoreDiv.style.backgroundColor = "#980000";
    } else {
      scoreDiv.innerHTML =
        "YOU WIN! <br>" +
        "" +
        `Yor Score: ${humanScore} || Computer Score: ${computerScore} `;
      scoreDiv.style.backgroundColor = "#59ff00";
    }

    disabledButton();

    if (computerScore >= 5 || humanScore >= 5) {
      humanScore = 0;
      computerScore = 0;
    }

    function disabledButton() {
      rockButton.disabled = true;
      paperButton.disabled = true;
      scissorsButton.disabled = true;
    }

    function enableButton() {
      rockButton.disabled = false;
      paperButton.disabled = false;
      scissorsButton.disabled = false;
    }

    againButton.addEventListener("click", () => {
      humanScore = 0;
      computerScore = 0;
      scoreDiv.style.backgroundColor = "";
      scoreDiv.innerHTML = "Start the Game!";
      enableButton();
    });
  }
}

rockButton.addEventListener("click", () =>
  playRound("rock", getComputerChoice())
);
paperButton.addEventListener("click", () =>
  playRound("paper", getComputerChoice())
);
scissorsButton.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);
