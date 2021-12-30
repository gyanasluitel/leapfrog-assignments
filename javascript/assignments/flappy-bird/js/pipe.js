class Pipe {
    constructor(ctx, bird, score) {
        this.ctx = ctx;
        this.xPositonPipes = [];
        this.bird = bird;
        this.score = score;
        this.topPipe = {
            spriteX: 112,
            spriteY: 646 
        };

        this.bottomPipe = {
            spriteX: 167,
            spriteY: 646
        };

        this.spriteWidth = 53;
        this.spriteHeight = 320;
        this.gapBetweenPipes = 120;
        this.maxYPostionPipe = -150;
        this.dx = 2;
    };  
    
    draw = () => {
        for (let count = 0; count < this.xPositonPipes.length; count++) {
            let p = this.xPositonPipes[count];

            let topYPositionPipe = p.y;
            let bottomYPositionPipe = p.y + this.spriteHeight + this.gapBetweenPipes;
        
            // Top pipe
            this.ctx.drawImage(
                spriteImage, 
                this.topPipe.spriteX, 
                this.topPipe.spriteY, 
                this.spriteWidth, 
                this.spriteHeight, 
                p.x, 
                topYPositionPipe,
                this.spriteWidth,
                this.spriteHeight);

            this.ctx.drawImage(
                spriteImage, 
                this.bottomPipe.spriteX, 
                this.bottomPipe.spriteY, 
                this.spriteWidth, 
                this.spriteHeight, 
                p.x, 
                bottomYPositionPipe,
                this.spriteWidth,
                this.spriteHeight);
        }
    };

    update = () => {
        if (gameStates.current !== gameStates.gameRunning) return;

        if (frames % 100 === 0) {
            this.xPositonPipes.push({
                x: CANVAS_WIDTH - 10,
                y: this.maxYPostionPipe * ( Math.random() + 1)
            });
        }

        for (let count = 0; count < this.xPositonPipes.length; count++) {
            let p = this.xPositonPipes[count];
            p.x = p.x - this.dx;

            let bottomYPositionPipe = p.y + this.spriteHeight + this.gapBetweenPipes;
            
            // DETECTING COLLISION
            // for top pipe
            if (this.bird.x + this.bird.radius > p.x 
                && this.bird.x - this.bird.radius < p.x + this.spriteWidth 
                && this.bird.y + this.bird.radius > p.y 
                && this.bird.y - this.bird.radius < p.y + this.spriteHeight
                )  {
                   gameStates.current = gameStates.gameOver; 
                }

            // for bottom pipe
            if (this.bird.x + this.bird.radius > p.x 
                && this.bird.x - this.bird.radius < p.x + this.spriteWidth 
                && this.bird.y + this.bird.radius > bottomYPositionPipe 
                && this.bird.y - this.bird.radius < bottomYPositionPipe + this.spriteHeight
                )  {
                   gameStates.current = gameStates.gameOver; 
                }

            // if pipe crosses the canvas
            if (p.x + this.spriteWidth <= 0) {
                this.xPositonPipes.shift(); //delete from the pipe position array
                this.score.score += 1;
                this.score.highScore = Math.max(this.score.score, this.score.highScore);
                console.log(this.score.score);
                localStorage.setItem('flappyHighScore', this.score.highScore);
            }
        }


        // xPositonPipes = this.xPositonPipes;
    };

    reset = () => {
        this.xPositonPipes = [];
    }
}