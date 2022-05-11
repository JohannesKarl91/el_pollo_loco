/**
 * Shows full screen, if preferable.
 */
function changeToFullscreen() {
    let canvas = document.getElementById('canvas');
    canvas.requestFullscreen();
}


/**
 * Starts the game via click on the button.
 */
function startGame() {
    showGameScreen();
    initLevel();
    init();
}


/**
 * Starting point from start screen and changes into game screen (canvas). 
 */
function showGameScreen() {
    let startScreen = document.getElementById('startScreen');
    let gameScreen = document.getElementById('gameScreen');
    let gameOverScreen = document.getElementById('gameOverScreen');
    startScreen.classList.add('d-none');
    gameOverScreen.classList.add('d-none');
    gameScreen.classList.remove('d-none');
}


/**
 * Show Game Over screen, when character dies.
 */
function showGameOverScreen() {
    let gameOverScreen = document.getElementById('gameOverScreen');
    gameOverScreen.classList.remove('d-none');
}


/**
 * Shows endscreen, when endboss has been killed.
 */
function showEndGameScreen() {
    let endGameScreen = document.getElementById('endScreen');
    endGameScreen.classList.remove('d-none');
}


/**
 * Restart of entire game as an onclick function.
 */
function restartGame() {
    window.location.href = window.location.href;
    let gameOverScreen = document.getElementById('gameOverScreen');
    gameOverScreen.classList.add('d-none');
    let endGameScreen = document.getElementById('endScreen');
    endGameScreen.classList.add('d-none');
}