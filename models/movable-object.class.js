class MovableObject {
    x = 120;
    y = 190;
    img;
    width = 240;
    height = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;


    //loadImage('./img/test.png');
    loadImage(path) {
        this.img = new Image(); //this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }


    /**
     * 
     * @param {Array} inputArray 
     */
    loadImages(inputArray) {
        inputArray.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    moveRight() {
        console.log('Moving right');
    }


    moveLeft(){
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60)
    }
}
