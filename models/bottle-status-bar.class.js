class StatusBarBottle extends DrawableObject {

    IMAGES_STATUS_BAR_BOTTLES = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png',
    ];
    percentage = 0;
    width = 50;
    height = 140;


    /**
     * Loads the relevant imgs as well as default percentage of bottles to 0.
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUS_BAR_BOTTLES);
        this.x = 200;
        this.y = 0;
        this.setPercentage(0);
    }

    
    /**
     * Sets percentage, when character collects one bottle as collisionBottles().
     * @param {*} percentage 
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_STATUS_BAR_BOTTLES[this.resolveImageIndex()];
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