class MovableObject {
    x = 120;
    y = 250;
    img;
    width = 150;
    height = 100;
    

    //loadImage('./img/test.png');
    loadImage(path) {
        this.img = new Image(); //this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {

    }
}
