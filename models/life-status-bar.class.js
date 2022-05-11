class StatusBarLife extends DrawableObject {

    IMAGES_LIFE = [
        'img/7.Marcadores/Barra/Marcador vida/verde/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/100_.png',
    ];
    percentage = 100;
    width = 50;
    height = 140;

    /**
     * Loads the relevant imgs as well as default percentage of character life to 100.
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES_LIFE);
        this.x = 25;
        this.y = 0;
        this.setPercentage(100);
    }


    /**
     * Sets percentage, when character looses energy after colliding with enemies or endboss.
     * @param {*} percentage 
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_LIFE[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    /**
     * Compares current percentage to status bar img value.
     * @returns 
     */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        }
        else if (this.percentage > 80) {
            return 4;
        }
        else if (this.percentage > 60) {
            return 3;
        }
        else if (this.percentage > 40) {
            return 2;
        }
        else if (this.percentage > 20) {
            return 1;
        }
        else {
            return 0;
        }
    }
}