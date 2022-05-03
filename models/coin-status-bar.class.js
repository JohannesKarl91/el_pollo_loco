class StatusBarCoin extends DrawableObject {

    IMAGES_STATUS_BAR_COINS = [
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/20_ .png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/80_ _1.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/100__1.png',
    ];
    percentage = 0;
    width = 50;
    height = 150;


    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUS_BAR_COINS);
        this.x = 375;
        this.y = 0;
        this.setPercentage(0);
    }


    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_STATUS_BAR_COINS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        }
        else if (this.percentage >= 80) {
            return 4;
        }
        else if (this.percentage >= 60) {
            return 3;
        }
        else if (this.percentage >= 40) {
            return 2;
        }
        else if (this.percentage >= 20) {
            return 1;
        }
        else {
            return 0;
        }
    }
}