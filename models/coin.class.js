class Coin extends MovableObject {
    IMAGES_COLLECT_COIN = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ];

    height = this.height - 200;
    width = this.width - 150;
    y = 100;
    x = 100;


    /**
     * Loads images, animates and sets x, y coordinate for coin element. 
     */
    constructor() {
        super().loadImage('img/8.Coin/Moneda1.png');
        this.loadImages(this.IMAGES_COLLECT_COIN);
        this.x = 700 + Math.random() * 1500;
        this.y = 100 + Math.random() * 100;
        
    }


    /**
     * Opportunity to animate the coins.
     */
    animate() {
        setInterval(() => {
            //Walk animation
            this.playAnimation(this.IMAGES_COLLECT_COIN);
        }, 400)
    }
}