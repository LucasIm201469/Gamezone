let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guess").value);
    const messageElement = document.getElementById("game-message");

    if (isNaN(userGuess)) {
        messageElement.textContent = "Please enter a valid number.";
        messageElement.style.color = "red";
        return;
    }

    if (userGuess < randomNumber) {
        messageElement.textContent = "Too low! Try again.";
        messageElement.style.color = "orange";
    } else if (userGuess > randomNumber) {
        messageElement.textContent = "Too high! Try again.";
        messageElement.style.color = "orange";
    } else {
        messageElement.textContent = "Congratulations! You guessed the number!";
        messageElement.style.color = "green";
        // Reset the game
        randomNumber = Math.floor(Math.random() * 100) + 1;
    }
}

function playRPS(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const resultElement = document.getElementById("rps-result");

    if (playerChoice === computerChoice) {
        resultElement.textContent = `It's a tie! Both chose ${playerChoice}.`;
        resultElement.style.color = "blue";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultElement.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
        resultElement.style.color = "red";
    }
}

function showGame(gameId) {
    // Hide all game sections
    document.getElementById("guess-the-number").style.display = "none";
    document.getElementById("rock-paper-scissors").style.display = "none";

    // Show the selected game section
    document.getElementById(gameId).style.display = "block";
}
