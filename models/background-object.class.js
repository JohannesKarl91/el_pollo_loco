class BackgroundObject extends MovableObject {

    height = 720;
    width= 480;

    
    /**
     * Loads all relevant backgrounds as background class via class world & level1.
     * @param {*} imagePath 
     * @param {*} x 
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480- this.width;
    }
}