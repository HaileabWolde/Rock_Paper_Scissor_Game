function getAIChoice() {
  let game_ChoiceArray = [
      "./paper2.png",
      "./rock.png",
      "./scissor.png"
  ];
  let index = Math.floor(Math.random() * game_ChoiceArray.length); // Fixed Math.random usage
  let choice = game_ChoiceArray[index];

  const pic = document.createElement('img');
  pic.src = choice;
  
  // Get the first element with the class "computer"
  let computerImage = document.querySelector(".computer"); // Use querySelector for a single element
  // Clear any previous AI choice images (optional)
  computerImage.innerHTML = ""; 

  computerImage.appendChild(pic); // Set the `src` attribute for the selected element
  return choice;
}
  function playGame(e){
    function playRound(humanChoice, aiChoice) {
      if(humanChoice == "rock" && aiChoice == "./scissor.png"){
           console.log("You Win! Rock Beats Scissor");
           humandigit = humandigit + 1;
      }
      else if(humanChoice == "rock" && aiChoice == "./paper2.png") {
         console.log("You Lose! PAPER Beats Rock");
         computerdigit = computerdigit + 1;
      }
      else if(humanChoice == "rock" && aiChoice == "./rock.png") {
         console.log("IT IS A TIE!")
      }
       else if(humanChoice == "paper2" && aiChoice == "./rock.png") {
         console.log("You Win! Paper Beats Rock");
         humandigit = humandigit + 1;
      }
       else if(humanChoice == "paper2" && aiChoice == "./scissor.png") {
         console.log("You Win! Paper Beats Scissor");
         humandigit = humandigit + 1;
      }
      else if(humanChoice == "paper2" && aiChoice == "./paper2.png") {
         console.log("IT IS A TIE!");
      }
       else if(humanChoice == "scissor" && aiChoice == "./paper2.png") {
         console.log("You Win! Scissor Beats Paper");
         humandigit = humandigit + 1;
      }
       else if(humanChoice == "scissor" && aiChoice == "./rock.png") {
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
   for (let i = 0; sum < 5; i++){
    let humanChoice = e.target.id;
    let aiChoice = getAIChoice();
      playRound(humanChoice, aiChoice);
      sum = humandigit + computerdigit;
      console.log(humandigit);
      console.log(computerdigit);
   }

  }
   let player = document.querySelector(".player");
   player.addEventListener('click', playGame);

  
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
