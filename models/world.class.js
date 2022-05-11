class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBarLife = new StatusBarLife();
    statusBarBottle = new StatusBarBottle();
    statusBarCoin = new StatusBarCoin();
    throwableObjects = [];
    coin_sound = new Audio('audio/coin.mp3');
    hurt_sound = new Audio('audio/hurt.mp3');
    chicken_sound = new Audio('audio/chicken.mp3');
    bottle_sound = new Audio('audio/bottle.mp3');
    chicken_dead_sound = new Audio('audio/chicken_dead.mp3');
    thrownBottle = false;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.chicken_sound.play();
    }


    /**
     * Draws entire world in canvas element.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);

        this.drawBackground();
        this.drawStatusBars();
        this.drawMovableObjects();

        //draw has already been carried out. 
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    /**
     * Draws all relevant status bars (life energy, collected bottles and coins).
     */
    drawStatusBars() {
        this.addToMap(this.statusBarLife);
        this.addToMap(this.statusBarBottle);
        this.addToMap(this.statusBarCoin);
    }


    /**
     * Draws all movable objects into world.
     */
    drawMovableObjects() {
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);
    }


    /**
     * Draws background von canvas element.
     */
    drawBackground() {
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0);
    }


    /**
     * Adds requested objects to the addToMap().
     * @param {*} objects 
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    /**
     * Adds requested movableObjects to the world map for each element.
     * @param {*} mo 
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            mo.flipImage(this.ctx);
        }
        mo.draw(this.ctx);
        //mo.drawFrame(this.ctx);


        if (mo.otherDirection) {
            mo.flipImageBack(this.ctx);
        }
    }


    setWorld() {
        this.character.world = this;
    }


    /**
     * Checks all collisions between the movable as well as non-movable elements (e.g. Coins and bottles) & bottle throw of character. 
     */
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 60);
    }


    /**
     * Checks the throw of a bottle from character.
     */
    checkThrowObjects() {
        if (this.keyboard.THROW && this.character.addedBottles > 0 && !this.thrownBottle) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100, this.character.otherDirection);
            this.throwableObjects.push(bottle);
            this.character.addedBottles -= 10;
            this.statusBarBottle.setPercentage(this.character.addedBottles);
            this.thrownBottle = true;
            setTimeout(() => {
                this.thrownBottle = false;
            }, 600)
            //console.log('this.throwableObjects.length', this.throwableObjects.length)
        }
    }


    //---------- Check collision section of charater with enemies, endboss, bottles and coins ----------//
    checkCollisions() {
        this.collisionCoins();
        this.collisionBottles();
        this.collisionEndboss();
        this.collisionEnemies();
        this.collisionCharacterAboveEnemies();
        this.collisionThrowableObject();
    }

    /**
     * Checks collision between bottle and endboss.
     */
    collisionThrowableObject() {
        this.throwableObjects.forEach((throwableObject) => {
            if (this.level.endboss[0].isColliding(throwableObject)) {
                this.level.endboss[0].hitEndboss();
                this.level.endboss[0].endbossHurt = true;
                //console.log('this.level.endboss[0].endbossHurt', this.level.endboss[0].endbossHurt);
                //console.log(this.level.endboss[0].hitEndboss());
                //console.log(this.level.endboss[0].energy);
            }
            else {
                this.level.endboss[0].endbossHurt = false;
            }
        })
    }


    /**
    * Checks collision between character and enemies (only chickens).
    */
    collisionEnemies() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAboveGround() && !enemy.chickenDead) {
                this.character.hit();
                this.statusBarLife.setPercentage(this.character.energy);

                if (!this.character.isDead()) {
                    this.hurt_sound.play();
                }
            };
        });
    }


    /**
     * Checks collision between character and endboss.
     */
    collisionEndboss() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss) && !this.character.isAboveGround()) {
                this.character.hit();
                this.statusBarLife.setPercentage(this.character.energy);
                this.hurt_sound.play();
            };
        });
    }


    /**
     * Checks collision between character and collected bottles on the ground.
     */
    collisionBottles() {
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.character.addedBottles += 10;
                console.log(this.character.addedBottles);
                this.statusBarBottle.setPercentage(this.character.addedBottles);
                this.level.bottles.splice(index, 1);
                this.bottle_sound.play();
            }
        });
    }


    /**
     * Checks collision between character and collected coins
     */
    collisionCoins() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.character.addedCoins += 5;
                console.log(this.character.addedCoins);
                this.statusBarCoin.setPercentage(this.character.addedCoins);
                this.level.coins.splice(index, 1);
                this.coin_sound.play();
            }
        });
    }


    /**
     * Checks collision between character and enemies (only chicken), whether character is above and can jump on it. 
     */
    collisionCharacterAboveEnemies() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround() && !enemy.chickenDead) { // Kill chicken from above
                // let currentTime = new Date().getTime();
                // console.log('currentTime', currentTime);
                //     this.character.chickenCounter += 1;
                enemy.chickenDead = true;
                this.chicken_dead_sound.play();
            }
        });
    }
}