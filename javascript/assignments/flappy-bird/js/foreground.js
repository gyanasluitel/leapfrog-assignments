class ForeGround {
    constructor(ctx) {
        this.ctx = ctx;
        this.spriteX = 584;
        this.spriteY = 0;
        this.spriteWidth = 336;
        this.spriteHeight = 112;
        this.x = 0;
        this.y = CANVAS_HEIGHT - this.spriteHeight;
    };

    draw = () => {
        for (let count = 0; count < 2; count++) {
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