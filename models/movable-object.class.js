class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    addedBottles = 0;
    addedCoins = 0;

    
    /**
     * Mathematical definition of gravity in class world.
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);

    }


    /**
     * Checks status of an element, wheter it is above ground (certain y value).
     * @returns 
     */
    isAboveGround() {
        // Trowable objects should always fall.
        if (this instanceof ThrowableObject) {
            return true;
        }
        else {
            return this.y < 180;
        }
    }


    /**
     * Plays animation of relevant element in class world.
     * @param {*} images 
     */
    playAnimation(images) {
        let i = this.currentImage % images.length; // % => Modulo Operator --> Shows quotient of two elements.; let i = 7 % 6 => 1, Rest 1
        // i = 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    /**
     * Certain element moves to right hand side by constant increase of x value. 
     */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }


    /**
     * Certain element moves to right hand side by constant decrease of x value. 
     */
    moveLeft() {
        this.x -= this.speed;
    }


    /**
     * Character is  able to jump by constant speed Y and in combination to gravity function.
     */
    jump() {
        this.speedY = 30;
    }


    /**
     * Checks an element, whether it's colliding to another element in class world.
     * @param {*} mo 
     * @returns 
     */
    isColliding(mo) {
        return this.x + this.height > mo.x &&
            this.y + this.width > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.width;
    }


    /**
     * Flips an element, when variable otherDirection is true.
     * @param {*} ctx 
     */
    flipImage(ctx) {
        ctx.save();
        ctx.translate(this.height, 0);
        ctx.scale(-1, 1);
        this.x = this.x * -1;
    }


    /**
     * After an an element has been flipped, it flips the same element back when otherDirection is false.
     * @param {*} ctx 
     */
    flipImageBack(ctx) {
        this.x = this.x * -1;
        ctx.restore();
    }


    /**
     * Loss of life energy by hit between character and an other element (enemy or endboss).
     */
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


    /**
     * Loss of life energy for endboss, when it exists a collision between endboss and thrown bottle.
     */
    hitEndboss() {
        if (this.energy < 0) {
            this.energy = 0;
        }
        else {
            this.energy -= 3;
        }
    }


    /**
     * Common status of one element, when life energy value is 0. (character & endboss). 
     * @returns 
     */
    isDead() {
        return this.energy == 0;
    }


    /**
     * Characters looses life energy and is getting into status hurt.
     * @returns 
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; // Difference in ms.
        timePassed = timePassed / 1000; // Difference in s.
        return timePassed < 0.5;
    }
}





