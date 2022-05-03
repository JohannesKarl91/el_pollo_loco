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


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0);
        //---------- Space for fixed objects ----------
        this.addToMap(this.statusBarLife);
        this.addToMap(this.statusBarBottle);
        this.addToMap(this.statusBarCoin);
        this.ctx.translate(this.camera_x, 0);


        this.addToMap(this.character);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);

        //draw wird immer aufgerufen. 
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            mo.flipImage(this.ctx);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);


        if (mo.otherDirection) {
            mo.flipImageBack(this.ctx);
        }
    }

    setWorld() {
        this.character.world = this;
    }


    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 60);
    }


    checkThrowObjects() {
        if (this.keyboard.THROW && this.character.addedBottles > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.character.addedBottles -= 10;
            this.statusBarBottle.setPercentage(this.character.addedBottles);
            console.log('this.throwableObjects.length', this.throwableObjects.length)
        }
    }


    //---------- Check collision section of charater with enemies, endboss, bottles and coins ----------
    checkCollisions() {
        this.collisionCoins();
        this.collisionBottles();
        this.collisionEndboss();
        this.collisionEnemies();
        this.collisionCharacterAboveEnemies();
        this.collisionThrowableObject();    
    }


    collisionThrowableObject() {
        this.throwableObjects.forEach((throwableObject) => {
            if (this.level.endboss[0].isColliding(throwableObject)) {
                this.level.endboss[0].hitEndboss();
                console.log(this.level.endboss[0].hitEndboss());
                console.log(this.level.endboss[0].energy);
            }
        })
    }


    collisionEnemies() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAboveGround() && !enemy.chickenDead) {
                this.character.hit();
                this.statusBarLife.setPercentage(this.character.energy);
            };
        });
    }


    collisionEndboss() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss) && !this.character.isAboveGround()) {
                this.character.hit();
                this.statusBarLife.setPercentage(this.character.energy);
            };
        });
    }


    collisionBottles() {
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.character.addedBottles += 10;
                console.log(this.character.addedBottles);
                this.statusBarBottle.setPercentage(this.character.addedBottles);
                this.level.bottles.splice(index, 1);
                //sounds.getBottle_sound.play();
            }
        });
    }


    collisionCoins() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.character.addedCoins += 5;
                console.log(this.character.addedCoins);
                this.statusBarCoin.setPercentage(this.character.addedCoins);
                this.level.coins.splice(index, 1);
                //sounds.getBottle_sound.play();
            }
        });
    }


    collisionCharacterAboveEnemies() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround() && !enemy.chickenDead) { // Kill chicken from above
                // let currentTime = new Date().getTime();
                // console.log('currentTime', currentTime);
                //     this.character.chickenCounter += 1;
                enemy.chickenDead = true;
            }
        });
    }
}