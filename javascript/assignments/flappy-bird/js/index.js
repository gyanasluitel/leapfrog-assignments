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

        this.frames = 0;
    };

    clearCanvas = () => {
        this.ctx.fillStyle = "lightblue";
        this.ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }

    draw = () => {
        //Drawing Background
        this.background = new Background(this.ctx);
        this.background.draw();

        // Drawing Foreground
        this.foreground = new ForeGround(this.ctx);
        this.foreground.draw();
    }

    update = () => {

    }

    animate = () => {
        this.clearCanvas();
        this.draw();
        this.frames++;
        window.requestAnimationFrame(this.animate);
    }
};


const newGame = new FlappyGame('canvas');
newGame.animate();