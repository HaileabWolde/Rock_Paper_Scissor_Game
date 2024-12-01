document.addEventListener("DOMContentLoaded", () => {
   let player = document.querySelector(".player");
   player.addEventListener('click', (event) => {
       let target = event.target;
       switch (target.id) {
           case 'rock':
               console.log("rock");
               break;
           case 'paper':
               console.log("paper");
               break;
           case 'scissor':
               console.log("scissor");
               break;
           default:
               console.log("Invalid selection");
       }
   });
});
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
