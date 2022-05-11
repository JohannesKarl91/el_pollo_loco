class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    addedBottles = 0;
    addedCoins = 0;

    
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);

    }


    isAboveGround() {
        if (this instanceof ThrowableObject) { // Trowablw objects should always fall.
            return true;
        }
        else {
            return this.y < 180;
        }
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
    }


    moveLeft() {
        this.x -= this.speed;
    }


    jump() {
        this.speedY = 30;
    }


    isColliding(mo) {
        return this.x + this.height > mo.x &&
            this.y + this.width > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.width;
    }

    flipImage(ctx) {
        ctx.save();
        ctx.translate(this.height, 0);
        ctx.scale(-1, 1);
        this.x = this.x * -1;
    }


    flipImageBack(ctx) {
        this.x = this.x * -1;
        ctx.restore();
    }


    hit() {
        if (!this.isAboveGround()) {
            this.energy -= 3;
        }

        if (this.energy < 0) {
            this.energy = 0;
        }

        else {
            this.lastHit = new Date().getTime();
        }
    }


    hitEndboss() {
        if (this.energy < 0) {
            this.energy = 0;
        }
        else {
            this.energy -= 3;
        }
    }


    isDead() {
        return this.energy == 0;
    }


    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; // Difference in ms.
        timePassed = timePassed / 1000; // Difference in s.
        return timePassed < 0.5;
    }
}





