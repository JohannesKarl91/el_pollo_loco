class Chicken extends MovableObject {

    height = this.height - 60;
    width = this.width - 170;
    y = this.y + 165;
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];


    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');

        this.x = 200 + Math.random() * 500; // range of numbers between 200 and 700.
        this.loadImages(this.IMAGES_WALKING);
        this.speed = 0.15 + Math.random() * 0.15;
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.moveLeft();
            let i = this.currentImage % this.IMAGES_WALKING.length; // % => Modulo Operator --> Shows quotient of two elements.; let i = 7 % 6 => 1, Rest 1
            // i = 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 200)
    }
}