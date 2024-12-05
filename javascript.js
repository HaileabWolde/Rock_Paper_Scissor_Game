let humandigit = 0;
let computerdigit = 0;
let smallDiv = document.querySelector(".text-DIV")
function getAIChoice() {
  let game_ChoiceArray = [
    "./paper2.png",
    "./rock.png",
    "./scissor.png"
  ];
  let index = Math.floor(Math.random() * game_ChoiceArray.length);
  let choice = game_ChoiceArray[index];

  const pic = document.createElement('img');
  pic.src = choice;

  let computerImage = document.querySelector(".computer");
  computerImage.innerHTML = ""; // Clear previous AI choice
  computerImage.appendChild(pic); // Add new AI choice
  return choice;
}

function playRound(humanChoice, aiChoice) {
   smallDiv.innerHTML= "";
  if (humanChoice == "rock" && aiChoice == "./scissor.png") {
    smallDiv.textContent = "You Win! Rock Beats Scissor";
    humandigit += 1;
  } else if (humanChoice == "rock" && aiChoice == "./paper2.png") {
    smallDiv.textContent = "You Lose! PAPER Beats Rock";
    computerdigit += 1;
  } else if (humanChoice == "rock" && aiChoice == "./rock.png") {
    smallDiv.textContent = "IT IS A TIE!";
  } else if (humanChoice == "paper" && aiChoice == "./rock.png") {
    smallDiv.textContent = "You Win! Paper Beats Rock";
    humandigit += 1;
  } else if (humanChoice == "paper" && aiChoice == "./scissor.png") {
    smallDiv.textContent = "You Lose! Scissor Beats Paper";
    computerdigit += 1;
  } else if (humanChoice == "paper" && aiChoice == "./paper2.png") {
    smallDiv.textContent = "IT IS A TIE!";
  } else if (humanChoice == "scissor" && aiChoice == "./paper2.png") {
    smallDiv.textContent = "You Win! Scissor Beats Paper";
    humandigit += 1;
  } else if (humanChoice == "scissor" && aiChoice == "./rock.png") {
    smallDiv.textContent = "You Lose! Rock Beats Scissor";
    computerdigit += 1;
  } else {
    smallDiv.textContent = "IT IS A TIE!";
  }
}

function playGame(e) {
  let humanChoice = e.target.id;
  let aiChoice = getAIChoice();
  console.log(humanChoice);
  console.log(aiChoice);
  playRound(humanChoice, aiChoice);
  scoreBoard.textContent = `${humandigit}`
  playerBoard.textContent = `${computerdigit}`
 //scoreBoard.textContent = `Player: ${humandigit}, Computer: ${computerdigit}`;

  if (humandigit + computerdigit >= 5) {
    let winner =
      humandigit > computerdigit
        ? "You Win!"
        : humandigit < computerdigit
        ? "Computer Wins!"
        : "It's a Tie!";

    // Reset scores for a new game
    humandigit = 0;
    computerdigit = 0;
  }
}

let player = document.querySelector(".player");
player.addEventListener("click", playGame);
  
/*
function getComputerChoice(){
    let game_listArray = ["ROCK", "PAPER", "SCISSOR"];
    let index = Math.floor(Math.random() * game_listArray.length);  // Generates a number between 0 and 2
    let choice = game_listArray[index];  // Get the string value at that index
    return choice;
}
function getHumanChoice() {
    let sign = prompt("Rock, Paper, Scissor?");
    return sign;
}



function playGame(){

   function playRound(humanChoice, computerChoice) {
      if(humanChoice == "ROCK" && computerChoice == "SCISSOR"){
           console.log("You Win! Rock Beats Scissor");
           humandigit = humandigit + 1;
      }
      else if(humanChoice == "ROCK" && computerChoice == "PAPER") {
         console.log("You Lose! PAPER Beats Scissor");
         computerdigit = computerdigit + 1;
      }
      else if(humanChoice == "ROCK" && computerChoice == "ROCK") {
         console.log("IT IS A TIE!")
      }
       else if(humanChoice == "PAPER" && computerChoice == "ROCK") {
         console.log("You Win! Paper Beats Rock");
         humandigit = humandigit + 1;
      }
       else if(humanChoice == "PAPER" && computerChoice == "SCISSOR") {
         console.log("You Win! Paper Beats Scissor");
         humandigit = humandigit + 1;
      }
      else if(humanChoice == "PAPER" && computerChoice == "PAPER") {
         console.log("IT IS A TIE!");
      }
       else if(humanChoice == "SCISSOR" && computerChoice == "PAPER") {
         console.log("You Win! Scissor Beats Paper");
         humandigit = humandigit + 1;
      }
       else if(humanChoice == "SCISSOR" && computerChoice == "ROCK") {
         console.log("You Lose! Rock Beats Scissor");
         computerdigit = computerdigit + 1;
      }
      else {
        console.log("It is A TIE!")
      }
   }
   let humandigit = 0;
   let computerdigit = 0;
   let sum = 0;
    for(let i = 0; sum < 5; i++){
      const humanSelection = getHumanChoice().toUpperCase();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
      sum = humandigit + computerdigit;
      console.log(humandigit);
      console.log(computerdigit);
    }
}
playGame();
*/
