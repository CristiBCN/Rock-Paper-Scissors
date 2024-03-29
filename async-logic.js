function getComputerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;
  switch(random) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
      break;
  }
}

function getPlayerOption() {
let option = prompt("Choose between Rock, Paper or Scissors");
  switch(option.toLowerCase()) {
    case "rock":
      return option;
    case "paper":
      return option;
    case "scissors":
      return option;
    default:
      return getPlayerOption();
  }
}

function PascalCase(text) {
  text = text.toLowerCase();  
  return text[0].toUpperCase() + text.substring(1);
}

let you = "";

function playRound(playerSelection, computerSelection) {
  
  if (playerSelection === computerSelection) {
    you = "Tie";
    return `${you}!`;
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    you = "Lose";
    return `You ${you}! Paper beats Rock`;
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    you = "Win";
    return `You ${you}! Rock beats Scissors`;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    you = "Win";
    return `You ${you}! Scissors beats Paper`;
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    you = "Lose";
    return `You ${you}! Rock beats Scissors`;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    you = "Win";
    return `You ${you}! Paper beats Rock`;
  } else {
    you = "Lose";
    return `You ${you}! Scissors beats Paper`;
  }
}


function playGame() {
  return new Promise((resolve, reject) => {
    let playerWins = 0;
    let computerWins = 0;
    let tie = 0;

    for (let count = 0; count < 3; count++) {
      setTimeout(function() {
        const playerSelection = PascalCase(getPlayerOption());
        console.log(playerSelection);
        const computerSelection = getComputerChoice();
        console.log(computerSelection);

        const round = playRound(playerSelection, computerSelection);
        let show = document.getElementById("play");

        show.textContent = show.textContent + `Round ${count + 1}: ${round}\n\n`; // Displaying the result of each round
        show.style.whiteSpace = "pre";

        if (you === "Win") {
          playerWins++;
        } else if (you === "Lose") {
          computerWins++;
        } else {
          tie++;
        }

        console.log(you);
      }, 1000 * count);
    }

    setTimeout(function() {
      console.log(playerWins);
      console.log(computerWins);
      console.log(tie);

      if (playerWins === computerWins) {
        resolve(`Tie! The score is ${playerWins} to ${computerWins}`);
      } else if (playerWins > computerWins) {
        resolve(`You Win! The score is ${playerWins} to ${computerWins}`);
      } else {
        resolve(`You Lose! The score is ${playerWins} to ${computerWins}`);
      }
    }, 1000 * 3);
  });
}

function handler() {
  playGame().then(result => {
    let score = document.getElementById("score");
    score.textContent = result;
  });
}

/*
function playGame() {
  let playerWins = 0;
  let computerWins = 0;
  let tie = 0;
  
  for (let count = 0; count < 3; count++) {
    setTimeout(function() {
    const playerSelection = PascalCase(getPlayerOption());
    console.log(playerSelection);
    const computerSelection = getComputerChoice();
    console.log(computerSelection); 

    const round = playRound(playerSelection, computerSelection);

    let show = document.getElementById("play");      
    show.textContent = show.textContent + `Round ${count + 1}: ${round}\n\n`; // Displaying the result of each round
    show.style.whiteSpace = "pre";
      
    if (you === "Win") {
      playerWins++;
    } else if (you === "Lose") {
      computerWins++;
    } else {
      tie++;
    } 

    console.log(you);
  }, 1000 * count);
  }
  setTimeout(function() {
  console.log(playerWins);
  console.log(computerWins);
  console.log(tie);
  
  if (playerWins === computerWins) {
    return `Tie! The score is ${playerWins} to ${computerWins}`;
  } else if (playerWins > computerWins) {
    return `You Win! The score is ${playerWins} to ${computerWins}`;
  } else {
    return `You Lose! The score is ${playerWins} to ${computerWins}`;
  }
}, 1000 * 3);
}


let score = document.getElementById("score");

function handler() {    
  score.textContent = playGame();
}

*/