class MovableObject {
    x = 120;
    y = 120;
    img;
    width = 240;
    height = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);

    }

    isAboveGround() {
        return this.y < 180;
    }


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


    playAnimation(images) {
        let i = this.currentImage % images.length; // % => Modulo Operator --> Shows quotient of two elements.; let i = 7 % 6 => 1, Rest 1
        // i = 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
        this.walking_sound.play();
    }


    moveLeft() {
        this.x -= this.speed;
    }

    jump(){
        this.speedY = 30;
    }
}
