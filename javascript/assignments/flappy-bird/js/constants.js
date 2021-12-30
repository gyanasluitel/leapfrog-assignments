const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 512;

const spriteImage = new Image();
spriteImage.src = 'images/flappyBird.png';

const gameStates = {
    current: 0,
    getReady: 0,
    gameRunning: 1,
    gameOver: 2
};

const DEGREE = Math.PI / 180;

let xPostionPipes = [];