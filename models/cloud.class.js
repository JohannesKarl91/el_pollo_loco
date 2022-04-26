class Cloud extends MovableObject {
    y = 20;
    height = 500;
    width = 250;

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = Math.random() * 500; // range of numbers between 200 and 700.
        this.animateCloud()
    }


    animateCloud() {
        this.moveLeft();
    }
}