
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
   
    
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game(a) {
    for (let i = 0; i < 5; i++) {
        /*const playerSelection = prompt("Enter your choice: rock, paper, or scissors");*/
        const playerSelection=a;
        const computerSelection = computerPlay();
        var paragraph3 = document.querySelector('.p1');
        paragraph3.textContent = `Computer:${computerSelection}`;
        var text = (playRound(playerSelection, computerSelection));
        var paragraph = document.querySelector('.result p');
        paragraph.textContent = text;
    }
}


function rock()
{
    var paragraph = document.querySelector('.option1 .p0');
    paragraph.textContent = "Player";
    game("rock");
}
function paper()
{
    var paragraph = document.querySelector('.option3 .p0');
    paragraph.textContent = "Player";
    game("paper");
}
function scissors()
{
    var paragraph = document.querySelector('.option2 .p0');
    paragraph.textContent = "Player";
    game("scissors");
}

function redirectToGames() {
    window.location.href = "/games";
  }

function redirectToRPS() {
    window.location.href = "/rps_game";
}
  