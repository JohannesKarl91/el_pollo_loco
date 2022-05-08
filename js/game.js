let canvas;
let world;
let keyboard = new Keyboard;


function init() {
    canvas = document.getElementById('canvas');
    canvas.innerHTML = ``;
    world = new World(canvas, keyboard);

    console.log('My character is', world.character)
}


window.addEventListener("keydown", (e) => {
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
        //console.log('keydown', e.keyCode);
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
        //console.log(e.keyCode);
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;
        //console.log(e.keyCode);
    }

    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
        //console.log(e.keyCode);
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = true;
        //console.log(e.keyCode);
    }

    if (e.keyCode == 68) {
        keyboard.THROW = true;
        console.log(e.keyCode);
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
        //console.log('keyup', e.keyCode);
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = false;
        //console.log(e.keyCode);
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;
        //console.log(e.keyCode);
    }

    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
        //console.log(e.keyCode);
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = false;
        //console.log(e.keyCode);
    }

    if (e.keyCode == 68) {
        keyboard.THROW = false;
        console.log(e.keyCode);
    }
});