let canvas;
let world;
let keyboard = new Keyboard;


/**
 * Initialize the canvas element as new World class.
 */
function init() {
    canvas = document.getElementById('canvas');
    canvas.innerHTML = ``;
    world = new World(canvas, keyboard);

    console.log('My character is', world.character)
}


/**
 * EventListener Section for pressing one of the action buttons.
 */
window.addEventListener("keydown", (e) => {
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;
    }

    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 68) {
        keyboard.THROW = true;
    }
});


/**
 * EventListener Section for letting go one of the action buttons.
 */
window.addEventListener("keyup", (e) => {
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 68) {
        keyboard.THROW = false;   
    }
});