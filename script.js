let victories = 0;
let loses = 0;
let draws = 0;
function computerPlay(plays){
    let index = Math.floor(Math.random()*2);
    return plays[index];
}
function playRound(playerSelection, computerSelection, plays){
    if (playerSelection == computerSelection){
        draws++;
        return `It's a Draw! Both players played ${playerSelection}!`;
    }
    else if(plays.indexOf(playerSelection) == (plays.indexOf(computerSelection)-1) || (plays.indexOf(playerSelection)== 2 & plays.indexOf(computerSelection)==0)){
        loses++;
        return `Computer wins! ${computerSelection} beats ${playerSelection}.`;

    }
    else{
        victories++;
        return `Player wins! ${playerSelection} beats ${computerSelection}.`;
    }
}
function game(){
    alert("Welcome to Rock - Scissors - Paper!");
    alert("You're going to play against computer. ");
    alert("Let's start!");
    const possiblePlays = ["rock", "paper", "scissors"];
    var results = "";
    for(let i = 0; i < 5; i++){
        while(true){
            var playerChoice = (prompt("Select and item(rock, scissors, paper): ").toLowerCase()).replaceAll(' ', ''); 
            if(possiblePlays.includes(playerChoice)){
                break;
            }
            else{
                alert("Invalid data, try again.");
            }
        }
        results += `${playRound(playerChoice, computerPlay(possiblePlays), possiblePlays)} \n`;
    }
    if(victories > loses){
        return `Player wins! \nResults: \n${results}`;
    }
    else if(loses > victories){
        return `Computer wins! \nResults: \n${results}`;
    }
    else if (victories == loses){
        return `It was a draw! \nResults: \n${results}`;
    }
}
console.log(game());

