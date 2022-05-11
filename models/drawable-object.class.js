class DrawableObject {
    x = 120;
    y = 120;
    width = 240;
    height = 100;
    img;
    imageCache = {};
    currentImage = 0;


    //loadImage('./img/test.png');
    loadImage(path) {
        this.img = new Image(); //this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }

    
    /**
     * Draws necessary context of canvas element.
     * @param {HTMLCanvasElement} ctx 
     */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.height, this.width);
        } catch (e) {
            console.warn('Error loading image', e);
            console.log('Could not load image', this.img.src);
        }
    }


    /**
    * Loads imgs for relevant element as precondition for drawing in class world.
    * @param {Array} inputArray 
    */
    loadImages(inputArray) {
        inputArray.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    // drawFrame(ctx) {
    //     if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
    //         ctx.beginPath();
    //         ctx.lineWidth = '3';
    //         ctx.strokeStyle = 'none';
    //         ctx.rect(this.x, this.y, this.height, this.width);
    //         ctx.stroke();
    //     }
    // }
}