// class Assets {
//     constructor(sx, sy, width, height)
// }

class GetReady {
    constructor(ctx) {
        this.ctx = ctx;
        this.spriteX = 588;
        this.spriteY = 118;
        this.spriteWidth = 186;
        this.spriteHeight = 56;
        this.x = CANVAS_WIDTH / 2 - 100;
        this.y = CANVAS_HEIGHT / 4;
    };

    draw = () => {
        if (gameStates.current === gameStates.getReady) {
            this.ctx.drawImage(
                spriteImage, 
                this.spriteX, 
                this.spriteY, 
                this.spriteWidth, 
                this.spriteHeight, 
                this.x, 
                this.y,
                this.spriteWidth,
                this.spriteHeight);
        }
    };
};

class GetReadyTap {
    constructor(ctx) {
        this.ctx = ctx;
        this.spriteX = 586;
        this.spriteY = 182;
        this.spriteWidth = 110;
        this.spriteHeight = 98;
        this.x = CANVAS_WIDTH / 2 - 75;
        this.y = CANVAS_HEIGHT / 3 + 25;
    };

    draw = () => {
        if (gameStates.current === gameStates.getReady) {
            this.ctx.drawImage(
                spriteImage, 
                this.spriteX, 
                this.spriteY, 
                this.spriteWidth, 
                this.spriteHeight, 
                this.x, 
                this.y,
                this.spriteWidth,
                this.spriteHeight);
        }
    };
};


class GameOver {
    constructor(ctx) {
        this.ctx = ctx;
        this.spriteX = 790;
        this.spriteY = 118;
        this.spriteWidth = 192;
        this.spriteHeight = 47;
        this.x = CANVAS_WIDTH / 2 - 100;
        this.y = CANVAS_HEIGHT / 4;
    };

    draw = () => {
        if (gameStates.current === gameStates.gameOver) {
            this.ctx.drawImage(
                spriteImage, 
                this.spriteX, 
                this.spriteY, 
                this.spriteWidth, 
                this.spriteHeight, 
                this.x, 
                this.y,
                this.spriteWidth,
                this.spriteHeight);
        }
    };
};


class ScoreBoard {
    constructor(ctx) {
        this.ctx = ctx;
        this.spriteX = 6;
        this.spriteY = 518;
        this.spriteWidth = 226;
        this.spriteHeight = 114;
        this.x = CANVAS_WIDTH / 2 - 120;
        this.y = CANVAS_HEIGHT / 3 + 25;
    };

    draw = () => {
        if (gameStates.current === gameStates.gameOver) {
            this.ctx.drawImage(
                spriteImage, 
                this.spriteX, 
                this.spriteY, 
                this.spriteWidth, 
                this.spriteHeight, 
                this.x, 
                this.y,
                this.spriteWidth,
                this.spriteHeight);
        }
    };
}

