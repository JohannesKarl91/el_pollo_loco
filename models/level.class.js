class Level {
    enemies;
    endboss;
    clouds;
    backgroundObjects;
    bottles;
    coins;
    level_end_x = 719*3;

    
    /**
     * Creates the level1 for class world.
     * @param {*} enemies 
     * @param {*} endboss 
     * @param {*} clouds 
     * @param {*} backgroundObjects 
     * @param {*} bottles 
     * @param {*} coins 
     */
    constructor(enemies, endboss, clouds, backgroundObjects, bottles, coins){
        this.enemies = enemies;
        this.endboss=endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottles = bottles;
        this.coins = coins;
    }
}