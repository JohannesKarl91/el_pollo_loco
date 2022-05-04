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


    constructor() {
        super().loadImage(this.IMAGES_STANDING[0]);
        this.loadImages(this.IMAGES_STANDING);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURTING);
        this.loadImages(this.IMAGES_DYING);
        this.x = 3 * 719;
        this.animate();
    }


    animate() {
        setInterval(() => {
            console.log('this.isDead()', this.isDead());
            console.log('this.endbossDead', this.endbossDead)
            if (this.isDead() || this.endbossDead) {
                this.endbossIsDead();
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
        }, 250);
    }


    stand() {
        this.playAnimation(this.IMAGES_STANDING);
        this.speed = 0;
    }


    walkLeft() {
        this.otherDirection = false;
        setInterval(() => {
            this.moveLeft();
        }, 200)
    }

    walkRight() {
        this.otherDirection = true;
        setInterval(() => {
            this.x -= this.speed;
        }, 200)
    }


    standingLeftBorder() {
        this.stand();
        this.otherDirection = true;
        this.playAnimation(this.IMAGES_STANDING);
        this.counterEndboss++;
    }


    returnLeftBorder() {
        this.stand();
        this.counterEndboss++;
    }


    returnRightBorder() {
        this.counterEndboss = 0;
        this.otherDirection = false;
        this.x = 3 * 719;
    }


    walkFromRightToLeft() {
        this.speed = 0.35;
        this.walkLeft();
        this.playAnimation(this.IMAGES_WALKING);
        this.counterEndboss++;
    }


    walkFromLeftToRight() {
        this.speed = -0.3;
        this.walkRight();
        this.playAnimation(this.IMAGES_WALKING);
        this.counterEndboss++;
    }

    endbossIsHurt(){
        this.playAnimation(this.IMAGES_HURTING);
        this.speed = 0;
    }

    endbossIsDead(){
        this.playAnimation(this.IMAGES_DYING);
        this.endbossDead = true;
        this.speed = 0;
        this.endbossDead = true;
    }
}