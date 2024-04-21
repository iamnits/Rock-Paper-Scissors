function getComputerChoice()
{
    let choices = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return choices[randIdx];
}
function playGame()
{
    let scorePlayer = 0;
    let scoreComputer = 0;
    for(let i = 0; i < 5; i++)
    {
        const playerSelection = prompt("Enter Rock, paper or scissors");
        const computerSelection = getComputerChoice();
        console.log("You choose: " + playerSelection + "\n Computer chooses: " + computerSelection);
        let result = RPS(playerSelection, computerSelection);
        console.log(result);
        if(result.substring(4,8) === "win!")
            scorePlayer++;
        else if(result.substring(4,8) === "lose")
            scoreComputer++;
    }
    let scoreDifference = Math.abs(scorePlayer - scoreComputer);
    if (scorePlayer > scoreComputer)
        console.log("Player wins by " + scoreDifference + " points");
    else if (scoreComputer > scorePlayer)
        console.log("Computer wins by " + scoreDifference + " points");
    else
        console.log("Tie");
    function RPS(playerSelection, computerSelection)
    {
        let p = playerSelection.toLowerCase();
        if(p === "rock")
        {
            if(computerSelection == "rock")
                return "Its a tie!";
            else if(computerSelection == "paper")
                return "You lose! paper beats rock!"
            else
                return "You win! Rock beats scissors";
        }
        else if(p === "paper")
        {
            if(computerSelection == "rock")
                return "You win! paper beats rock!";
            else if(computerSelection == "paper")
                return "Its a tie!"
            else
                return "You lose! Rock beats scissors";
        }
        else
        {
            if(computerSelection == "rock")
                return "You lose! Rock beats scissors";
            else if(computerSelection == "paper")
                return "You win! paper beats rock!"
            else
                return "Its a tie!";
        }
    }
}
playGame();