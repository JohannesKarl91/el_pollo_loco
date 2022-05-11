class Cloud extends MovableObject {
    y = 20;
    height = 500;
    width = 250;


    /**
     * Loads image, animates and sets x coordinate for cloud element. 
     */
    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = Math.random() * 500; // range of numbers between 200 and 700.
        this.animateCloud()
    }


    /**
     * Animation of cloud elements in class world.
     */
    animateCloud() {
        this.moveLeft();
    }
}