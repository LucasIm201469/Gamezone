let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

function makeMove(index) {
    if (!gameActive || board[index] !== "") return;

    board[index] = currentPlayer;
    document.querySelectorAll(".cell")[index].textContent = currentPlayer;

    if (checkWin()) {
        document.getElementById("tic-tac-toe-message").textContent = `${currentPlayer} wins!`;
        gameActive = false;
    } else if (board.every(cell => cell !== "")) {
        document.getElementById("tic-tac-toe-message").textContent = "It's a tie!";
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        document.getElementById("tic-tac-toe-message").textContent = `Player ${currentPlayer}'s turn.`;
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winPatterns.some(pattern =>
        pattern.every(index => board[index] === currentPlayer)
    );
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    document.querySelectorAll(".cell").forEach(cell => (cell.textContent = ""));
    document.getElementById("tic-tac-toe-message").textContent = "Player X's turn.";
}
