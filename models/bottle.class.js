class Bottle extends MovableObject {
    IMAGES_COLLECT_BOTTLES = [
        'img/6.botella/2.Botella_enterrada1.png',
        'img/6.botella/2.Botella_enterrada2.png'
    ];
    
    x = 100;
    y = 100;


    constructor() {
        super();
        this.loadImages(this.IMAGES_COLLECT_BOTTLES);
        this.x = x;
        this.y = y;
        this.animate();
    }

    animate() {
        setInterval(() => {
            //Walk animation
            this.playAnimation(this.IMAGES_COLLECT_BOTTLES);
        }, 100)
    }
}