class Background {
    constructor(ctx) {
        this.ctx = ctx;
        this.spriteX = 0;
        this.spriteY = 0;
        this.spriteWidth = 288;
        this.spriteHeight = 512;
        this.x = 0;
        this.y = 0;
    };

    draw = () => {
        for (let count = 0; count < 3; count++) {
            this.ctx.drawImage(
                spriteImage, 
                this.spriteX, 
                this.spriteY, 
                this.spriteWidth, 
                this.spriteHeight, 
                this.x + count * this.spriteWidth, 
                this.y,
                this.spriteWidth,
                this.spriteHeight);
        }
    };
}
