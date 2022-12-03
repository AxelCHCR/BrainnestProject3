'use strict'
var victories = 0;
var loses = 0;
var draws = 0;
function computerPlay(plays){
    let index = Math.floor(Math.random()*3)+1;
    return plays[index-1];
}
function playRound(playerSelection, computerSelection, plays){
    if (playerSelection == computerSelection){
        draws++;
        return `It's a Draw! Both players played ${playerSelection}!`;
    }
    else if(plays.indexOf(playerSelection) < plays.indexOf(computerSelection)){
        victories++;
        return `Player wins! ${playerSelection} beats ${computerSelection}.`;
    }
    else{
        loses++;
        return `Computer wins! ${computerSelection} beats ${playerSelection}.`;
    }
}
function game(){
    alert("Welcome to Rock - Scissors - Paper!");
    alert("You're going to play against computer. ");
    alert("Let's start!");
    const possiblePlays = ["rock", "scissors", "paper"];
    var results = "";
    for(let i = 0; i < 5; i++){
        while(true){
            var playerChoice = prompt("Select and item(rock, scissors, paper): ").toLowerCase(); 
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

