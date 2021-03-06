class Endboss extends MovableObject {
    width = 400;
    height = 300;
    y = this.y - 65;
    counterEndboss = 0;
    endbossHurt = false;
    endbossDead = false;
    energy = this.energy

    IMAGES_STANDING = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png'
    ];

    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png'
    ];

    IMAGES_HURTING = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png'
    ];

    IMAGES_DYING = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png'
    ];


    /**
     * Animation & connection between endboss behavior and relevant endboss animations.
     */
    constructor() {
        super().loadImage(this.IMAGES_STANDING[0]);
        this.loadImages(this.IMAGES_STANDING);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURTING);
        this.loadImages(this.IMAGES_DYING);
        this.x = 3 * 719;
        this.animate();
    }

    /**
     * Animates all revelant endboss movement & status during game. (e.g. endboss is dead, hurt).
     */
    animate() {
        setInterval(() => {
            //console.log('this.isDead()', this.isDead());
            //console.log('this.endbossDead', this.endbossDead)
            if (this.isDead() || this.endbossDead) {
                this.endbossIsDead();
                showEndGameScreen();
            }
            if (this.endbossHurt && !this.isDead()) {
                this.endbossIsHurt();
            }
            if (this.counterEndboss < 51 && !this.endbossHurt && !this.endbossDead) {
                this.returnLeftBorder();
            }
            if (this.x > 2200 && !this.endbossHurt && !this.endbossDead) {
                this.returnRightBorder();
            }
            if (this.counterEndboss > 50 && this.x > 51 && !this.endbossHurt && !this.endbossDead) {
                this.walkFromRightToLeft();
            }
            if (this.x < 50 && !this.endbossHurt && !this.endbossDead) {
                this.standingLeftBorder();
            }
            if (this.counterEndboss > 185 && !this.endbossHurt && !this.endbossDead) {
                this.walkFromLeftToRight();
            }
        }, 100);
    }


    /**
     * Endboss status, that it stands or doesn't move.
     */
    stand() {
        this.playAnimation(this.IMAGES_STANDING);
        this.speed = 0;
    }


    /**
     * Endboss moves from right to left hand side.
     */
    walkLeft() {
        this.otherDirection = false;
        setInterval(() => {
            this.moveLeft();
        }, 200)
    }


    /**
     * Endboss moves from left to right hand side.
     */
    walkRight() {
        this.otherDirection = true;
        setInterval(() => {
            this.x -= this.speed;
        }, 200)
    }


    /**
     * Endboss status, that it stands at the left hand side in canvas element.
     */
    standingLeftBorder() {
        this.stand();
        this.otherDirection = true;
        this.playAnimation(this.IMAGES_STANDING);
        this.counterEndboss++;
    }


    /**
     * Endboss status, that it stands or doesn't move on briefly at the left hand side at canvas element.
     */
    returnLeftBorder() {
        this.stand();
        this.counterEndboss++;
    }


    /**
     * Sets counterEndboss to 0
     */
    returnRightBorder() {
        this.counterEndboss = 0;
        this.otherDirection = false;
        this.x = 3 * 719;
    }


    /**
     * Animates and execute the walkLeft() from right to left hand side.
     */
    walkFromRightToLeft() {
        this.speed = 0.35;
        this.walkLeft();
        this.playAnimation(this.IMAGES_WALKING);
        this.counterEndboss++;
    }


    /**
     * Animates and execute the walkRight() from left to right hand side.
     */
    walkFromLeftToRight() {
        this.speed = -0.3;
        this.walkRight();
        this.playAnimation(this.IMAGES_WALKING);
        this.counterEndboss++;
    }


    /**
     * Animates hurt status of endboss by collision between endboss and thrown bottle.
     */
    endbossIsHurt() {
        this.playAnimation(this.IMAGES_HURTING);
        this.speed = 0;
    }


    /**
     * Animates dead status of endboss by energy level value of 0.
     */
    endbossIsDead() {
        this.playAnimation(this.IMAGES_DYING);
        this.speed = 0;
        this.endbossDead = true;
    }
}