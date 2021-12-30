class ForeGround {
    constructor(ctx) {
        this.ctx = ctx;
        this.spriteX = 584;
        this.spriteY = 0;
        this.spriteWidth = 336;
        this.spriteHeight = 112;
        this.x = 0;
        this.y = CANVAS_HEIGHT - this.spriteHeight;

        this.dx = 2; // shitfing foreground position
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

    update = () => {
        if (gameStates.current == gameStates.gameRunning) {
            this.x = (this.x - this.dx) % (this.spriteWidth/2)
        }
    }
}