class ThrowableObject extends MovableObject {
    IMAGES_THROW = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];

    IMAGES_SPLASH = [
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png'
    ];


    /**
     * Loads all relevant imgs, define starting values of throwable object.
     * @param {*} x 
     * @param {*} y 
     * @param {*} otherDirection 
     */
    constructor(x, y, otherDirection) {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.loadImages(this.IMAGES_THROW);
        this.loadImages(this.IMAGES_SPLASH);
        this.x = x;
        this.y = y;
        this.otherDirection = otherDirection;
        this.width = 80;
        this.height = 60;
        this.throw();
        this.animate();
    }


    /**
     * Throw functionality for character.
     */
    throw() {
        //Throws in left direction, when character.otherDirection is true.
        if (this.otherDirection) {
            this.speedY = 30;
            this.applyGravity();
            setInterval(() => {
                this.x -= 10;
            }, 20);
        }
        //Throws in right direction, when character.otherDirection is false.
        else {
            this.speedY = 30;
            this.applyGravity();
            setInterval(() => {
                this.x += 8;
            }, 20);
        }
    }


    /**
     * Animation of throwable objects in two avaibale status: throw & splash.
     */
    animate() {
        setInterval(() => {
            if (this.y > 280) {
                //Bottle splash animation.
                this.playAnimation(this.IMAGES_SPLASH);
            }
            else {
                //Bottle throw animation.
                this.playAnimation(this.IMAGES_THROW);
            }
        }, 90)

    }
}