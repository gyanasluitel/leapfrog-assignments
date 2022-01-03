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

class Start {
    constructor(ctx) {
            this.ctx = ctx;
            this.spriteX = 708;
            this.spriteY = 236;
            this.spriteWidth = 104;
            this.spriteHeight = 58;
            this.x = CANVAS_WIDTH / 2 - 60;
            this.y = CANVAS_HEIGHT / 3 + 150;
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
};

class Score {
    constructor(ctx) {
        this.ctx = ctx;
        this.highScore = localStorage.getItem('flappyHighScore') || 0;
        this.score = 0;
    };

    draw = () => {
        this.ctx.fillStyle = "#FFF";
        this.ctx.strokeStyle = "#000";
        
        if(gameStates.current == gameStates.gameRunning){
            // this.ctx.lineWidth = 2;
            this.ctx.font = "35px bold Arial";
            this.ctx.fillText(this.score, CANVAS_WIDTH/2 - 25, 50);
            this.ctx.strokeText(this.score, CANVAS_WIDTH/2 -25, 50);
            
        }
        else if(gameStates.current == gameStates.gameOver){

            this.ctx.font = "25px Arial";
            this.ctx.fillText(this.score, 360, 248);
            this.ctx.strokeText(this.score, 360, 248);
            this.ctx.fillText(this.highScore, 360, 290);
            this.ctx.strokeText(this.highScore, 360, 290);
        }
    };

    reset = () => {
        this.score = 0;
    }
}

