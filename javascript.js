function getComputerChoice(){
    let game_listArray = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * game_listArray.length);  // Generates a number between 0 and 2
    let choice = game_listArray[index];  // Get the string value at that index
    console.log(choice);  // Log the choice (string) to the console
}
function getHumanChoice() {
    let sign = prompt("Rock, Paper, Scissor?");
    console.log(sign);
}
getComputerChoice();
getHumanChoice();


