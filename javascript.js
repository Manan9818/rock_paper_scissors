function getComputerChoice(){
    const min = -1;
    const max = 1;
    return Math.floor(Math.random()*(max-min+1)+min);
}
function getHumanChoice(){
    const hum = prompt("Enter your choice Rock,Paper,Scissors");
    return hum;
}
let humanScore = 0;
let computerScore = 0;
let cmp = "";
function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase();
    let human = 0
    if (humanChoice == "rock"){
        human = 1;
    }
    else if (humanChoice == "scissors"){
        human = -1;
    }
    else if (humanChoice == "paper"){
        human = 0;
    }
    else{
        console.log("Invalid input skipping round");
        return;
    }

    if (computerChoice == 1){
        cmp = "rock";
    }
    else if (computerChoice == -1){
        cmp = "scissors";
    }
    else if (computerChoice == 0){
        cmp = "paper";
    }
    

    if (human == computerChoice){
        console.log("Its a Draw" );
        console.log("You : "+humanChoice)
        console.log("Computer : "+cmp)
        console.log("Both showed :"+cmp+"So it's a DRAW")
        console.log("The score is : You: "+humanScore+"  Computer: "+ computerScore)
        console.log("")
    }
    else if(human == 1 && computerChoice ==-1){
        humanScore +=1;
        console.log("You : "+humanChoice)
        console.log("Computer : "+cmp)
        console.log(humanChoice+" Beats "+ cmp)
        console.log("You Win! ");
        console.log("The score is : You: "+humanScore+"  Computer: "+ computerScore)
        console.log("")
    }
    else if(human == 1 && computerChoice == 0 ){
        computerScore +=1;
        console.log("You : "+humanChoice)
        console.log("Computer : "+cmp)
        console.log(cmp+" Beats"+humanChoice)
        console.log("Computer Wins! ");
        console.log("The score is : You: "+humanScore+"  Computer: "+ computerScore)
        console.log("")
    }
    else if(human == 0 && computerChoice == -1){
        console.log("You : "+humanChoice)
        console.log("Computer : "+cmp)
        console.log(cmp+" Beats"+humanChoice)
        console.log("Computer Wins! ");
        console.log("The score is : You: "+humanScore+"  Computer: "+ computerScore)
        console.log("")
    }
    else if(human == 0 && computerChoice == 1){
        humanScore +=1;
        console.log("You : "+humanChoice)
        console.log("Computer : "+cmp)
        console.log(humanChoice+" Beats "+ cmp)
        console.log("You Win! ");
        console.log("The score is : You: "+humanScore+"  Computer: "+ computerScore)
        console.log("")
    }
    else if(human == -1 && computerChoice ==1){
        computerScore +=1;
        console.log("You : "+humanChoice)
        console.log("Computer : "+cmp)
        console.log(cmp+" Beats"+humanChoice)
        console.log("Computer Wins! ");
        console.log("The score is : You: "+humanScore+"  Computer: "+ computerScore)
        console.log("")
    }
    else if(human == -1 && computerChoice == 0){
        humanScore +=1;
        console.log("You : "+humanChoice)
        console.log("Computer : "+cmp)
        console.log(humanChoice+" Beats "+ cmp)
        console.log("You Win! ");
        console.log("The score is : You: "+humanScore+"  Computer: "+ computerScore)
        console.log("")
    }
}
for(let i=0;i<5;i++){
    playRound(getHumanChoice(),getComputerChoice());
}
console.log("Final Score : You: "+humanScore+"  Computer: "+ computerScore)
if(humanScore > computerScore){
    console.log("Computer Wins the Game")
}
else{
    console.log("Player Wins the Game")
}