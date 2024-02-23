const rock = document.querySelector('#Rock');
rock.addEventListener('click', round);

const paper = document.querySelector('#Paper');
paper.addEventListener('click', round);

const scissors = document.querySelector('#Scissors');
scissors.addEventListener('click', round);



let you = "";
let count = 0;
let playerWins = 0;
let computerWins = 0;
let tie = 0;
let countGames = 0;


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

function round(e) {

  if (count >= 3) {
    rock.removeEventListener('click', round);
    paper.removeEventListener('click', round);
    scissors.removeEventListener('click', round);    
    return;
  }

  playerSelection = e.target.id;
    console.log(playerSelection);
  const computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(count);
  
  playRound(playerSelection, computerSelection); 
    console.log(you);
  playGame();
}

function playRound(playerSelection, computerSelection) {
  let show = document.getElementById("play");
  let result = "";    

  if (playerSelection === computerSelection) {
    you = "Tie";
    result = `${you}!`;
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    you = "Lose";
    result = `You ${you}! Paper beats Rock`;
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    you = "Win";
    result = `You ${you}! Rock beats Scissors`;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    you = "Win";
    result = `You ${you}! Scissors beats Paper`;
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    you = "Lose";
    result = `You ${you}! Rock beats Scissors`;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    you = "Win";
    result = `You ${you}! Paper beats Rock`;
  } else {
    you = "Lose";
    result = `You ${you}! Scissors beats Paper`;
  }

  show.textContent = show.textContent + `Round ${count + 1}: ${result}\n\n`; 
  show.style.whiteSpace = "pre";
    
  count++; 

  return result;
}

function playGame() { 
  
  if (you === "Win") {
    playerWins++;
  } else if (you === "Lose") {
    computerWins++;
  } else {
    tie++;
  }

  if (playerWins === computerWins) {
    score = `Tie! The score is ${playerWins} to ${computerWins}`;
  } else if (playerWins > computerWins) {
    score = `You Win! The score is ${playerWins} to ${computerWins}`;
  } else {
    score = `You Lose! The score is ${playerWins} to ${computerWins}`;
  }

  let scoreDisplay = document.getElementById("score");

  if (count % 3 === 0) {
    countGames++;    
    scoreDisplay.textContent = `Game no ${countGames}: ` + score;
    count = 0;
    playerWins = 0;
    computerWins = 0;
    tie = 0;
  }
  if (count % 3 !== 0) scoreDisplay.textContent = '';
}
