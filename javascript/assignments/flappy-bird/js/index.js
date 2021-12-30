let frames = 0;

class FlappyGame {
    constructor(canvasName) {
        this.canvas = document.querySelector(canvasName);
        this.canvas.width = CANVAS_WIDTH;
        this.canvas.height = CANVAS_HEIGHT;
        this.canvas.style.border = '2px solid black';
        this.canvas.style.display = 'block';
        this.canvas.style.margin = '5% auto';
        this.canvas.tabIndex = '1';

        this.ctx = this.canvas.getContext('2d');

        // this.frames = 0;

        this.background = new Background(this.ctx);
        this.foreground = new ForeGround(this.ctx);
        this.bird = new Bird(this.ctx);
        this.getReady = new GetReady(this.ctx);
        this.gameOver = new GameOver(this.ctx);
        this.start = new Start(this.ctx);
        this.getReadyTap = new GetReadyTap(this.ctx);
        this.scoreBoard = new ScoreBoard(this.ctx);
        this.score = new Score(this.ctx);
        this.pipe = new Pipe(this.ctx, this.bird, this.score);

        this.eventListener();
    };

    eventListener = () => {
        this.canvas.addEventListener('click', (event) => {
            switch(gameStates.current) {
                case gameStates.getReady:
                    gameStates.current = gameStates.gameRunning;
                    break;
                case gameStates.gameRunning:
                    this.bird.flap();
                    break;
                case gameStates.gameOver:
                    let rect = this.canvas.getBoundingClientRect();
                    let clickX = event.clientX - rect.left;
                    let clickY = event.clientY - rect.top;

                    if(clickX >= this.start.x && clickX <= this.start.x + this.start.spriteWidth && clickY >= this.start.y && clickY <= this.start.y + this.start.spriteHeight){
                        this.pipe.reset();
                        this.bird.reset();
                        this.score.reset();
                        gameStates.current = gameStates.getReady;
                        // console.log(clickX, clickY)
                    }
                    gameStates.current = gameStates.getReady;
                    break;

            }
        })
    }


    draw = () => {
        this.ctx.fillStyle = "lightblue";
        this.ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        this.background.draw();
        this.pipe.draw();
        this.foreground.draw();
        this.bird.draw();
        this.getReady.draw();
        this.getReadyTap.draw();
        this.gameOver.draw();
        this.scoreBoard.draw();
        this.start.draw();
        this.score.draw();
    };

    update = () => {
        this.bird.update();
        this.foreground.update();
        this.pipe.update();
    }

    animate = () => {
        this.update();
        this.draw();
        frames++;
        window.requestAnimationFrame(this.animate);
    }
};


const newGame = new FlappyGame('canvas');
newGame.animate();