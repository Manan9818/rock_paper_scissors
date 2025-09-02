let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = [1, 0, -1]; // 1: Rock, 0: Paper, -1: Scissors
    return choices[Math.floor(Math.random() * choices.length)];
}

function getChoiceName(choice) {
    if (choice === 1) return "Rock";
    if (choice === 0) return "Paper";
    return "Scissors";
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const cmp = getChoiceName(computerChoice);
    const player = getChoiceName(humanChoice);

    let status1 = "";

    if (humanChoice === computerChoice) {
        status1 = `It's a Draw! You both chose ${player}.`;
    } else if (
        (humanChoice === 1 && computerChoice === -1) || // Rock beats Scissors
        (humanChoice === 0 && computerChoice === 1) ||  // Paper beats Rock
        (humanChoice === -1 && computerChoice === 0)    // Scissors beats Paper
    ) {
        humanScore++;
        status1 = `You Win! ${player} beats ${cmp}.`;
    } else {
        computerScore++;
        status1 = `Computer Wins! ${cmp} beats ${player}.`;
    }

    document.getElementById('status').innerText = status1;
    document.getElementById('your_score').innerText = `Your Score: ${humanScore}`;
    document.getElementById('cpu_score').innerText = `Computer Score: ${computerScore}`;
}

function setup() {
    document.getElementById("rock").onclick = () => playRound(1);
    document.getElementById("paper").onclick = () => playRound(0);
    document.getElementById("scissor").onclick = () => playRound(-1);
}

window.onload = setup;
