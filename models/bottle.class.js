class Bottle extends MovableObject {
    IMAGES_COLLECT_BOTTLES = [
        'img/6.botella/2.Botella_enterrada1.png',
        'img/6.botella/2.Botella_enterrada2.png'
    ];

    height = this.height - 150
    width = this.width - 150;
    y = 340;


    constructor() {
        super().loadImage('img/6.botella/2.Botella_enterrada1.png');
        this.x = 700 + Math.random() * (1557);
        this.loadImages(this.IMAGES_COLLECT_BOTTLES);
        this.animate();
    }

    animate() {
        setInterval(() => {
            //Walk animation
            this.playAnimation(this.IMAGES_COLLECT_BOTTLES);
        }, 400)
    }
}