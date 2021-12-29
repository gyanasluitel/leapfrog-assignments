const CANVAS_WIDTH = 320;
const CANVAS_HEIHT = 480;

class FlappyGame {
    constructor(canvasName) {
        this.canvas = document.querySelector(canvasName);
        this.canvas.width = CANVAS_WIDTH;
        this.canvas.height = CANVAS_HEIHT;
        this.canvas.style.border = '2px solid black';
        this.canvas.style.display = 'block';
        this.canvas.style.margin = '5% auto';
        this.canvas.tabIndex = '1';

        this.ctx = this.canvas.getContext('2d');
    };
};


const newGame = new FlappyGame('canvas');