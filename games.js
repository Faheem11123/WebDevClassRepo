// DOM Elements
const cells = document.querySelectorAll('.cell');
const gameStatus = document.getElementById('game-status');
const resetButton = document.getElementById('reset-button');

// Game Variables
let currentPlayer = 'X';
let gameActive = true;
let board = ['', '', '', '', '', '', '', '', '']; // Represents the Tic Tac Toe board

// Winning Combinations
const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left
    [2, 4, 6]  // Diagonal from top-right
];

// Initial Game Status Message
gameStatus.textContent = `Player ${currentPlayer}'s turn`;

// Function to handle a cell click
function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.dataset.cellIndex);

    // If the cell is already filled or the game is not active, do nothing
    if (board[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    // Update the board and display the player's mark
    board[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add(currentPlayer.toLowerCase()); // Add 'x' or 'o' class for styling

    checkResult();
}

// Function to check for win or draw
function checkResult() {
    let roundWon = false;

    // Check all winning combinations
    for (let i = 0; i < winningCombinations.length; i++) {
        const winCondition = winningCombinations[i];
        let a = board[winCondition[0]];
        let b = board[winCondition[1]];
        let c = board[winCondition[2]];

        // If any cell in the combination is empty, continue
        if (a === '' || b === '' || c === '') {
            continue;
        }

        // If all cells in the combination are the same, a player has won
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        gameStatus.textContent = `Player ${currentPlayer} Wins!`;
        gameActive = false; // End the game
        return;
    }

    // Check for a draw (if no empty cells and no winner)
    let roundDraw = !board.includes('');
    if (roundDraw) {
        gameStatus.textContent = 'Game Draw!';
        gameActive = false; // End the game
        return;
    }

    // If no win or draw, switch players
    changePlayer();
}

// Function to change the current player
function changePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    gameStatus.textContent = `Player ${currentPlayer}'s turn`;
}

// Function to reset the game
function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    board = ['', '', '', '', '', '', '', '', ''];
    gameStatus.textContent = `Player ${currentPlayer}'s turn`;

    // Clear the content and classes from all cells
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x', 'o');
    });
}

// Event Listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);