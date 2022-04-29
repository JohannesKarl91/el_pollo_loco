class ThrowableObject extends MovableObject {
    IMAGES_THROW = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 12.png'
    ]

    constructor(x,y) {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.loadImages(this.IMAGES_THROW);
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 60;
        this.throw();
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
                this.x += 10;
        }, 20);
    }
}