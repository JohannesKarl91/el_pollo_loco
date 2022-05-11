class Chicken extends MovableObject {

    height = this.height - 60;
    width = this.width - 170;
    y = this.y + 235;
    chickenDead = false;

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];

    IMAGES_DEAD =[
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ];

    chicken_sound = new Audio('audio/chicken.mp3');


    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');

        this.x = 700 + Math.random() * (2 * 719); // range of numbers between 200 and 700.
        this.loadImages(this.IMAGES_WALKING);
        this.speed = 0.6 + Math.random() * 0.5;
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.otherDirection = false;
            this.moveLeft();
        }, 1000 / 60)

        setInterval(() => {
            //Walk animation
            if (this.chickenDead) {
                this.loadImage(this.IMAGES_DEAD);
                this.speed = 0;
            }
            else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200)
    }
}