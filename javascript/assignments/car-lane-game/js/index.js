const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 600;
const LANE_SEPARATOR_WIDTH = 12;

var gameEnd = false;
var highScore = +localStorage.getItem('highScore') || 0;

class CarGame {
    constructor(canvasName) {
        this.canvas = document.querySelector(canvasName);
        this.canvas.width = CANVAS_WIDTH;
        this.canvas.height = CANVAS_HEIGHT;
        this.canvas.style.border = '2px solid black';
        this.canvas.tabIndex = '1';
        
        this.ctx = this.canvas.getContext('2d');

        this.lineDashOffset = 0;
        this.laneSpeed = 5;
        this.gameStart = false;
        this.playerCar = new PlayerCar(this.ctx);

        this.canvas.addEventListener('keydown', (event) => {
            if (event.keyCode === 37) {
                this.playerCar.movePlayer("left")
            } 
            if (event.keyCode === 39) {
                this.playerCar.movePlayer("right");
            } 
        });

        this.obstacleCar = new ObstacleCar(this.ctx, -100, this.playerCar);
        this.obstacleCar2 = new ObstacleCar(this.ctx, -600, this.playerCar);
       
    };

    drawLane = () => {
        this.ctx.fillStyle = 'gray';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.setLineDash([42]);
        this.ctx.lineDashOffset = -(this.lineDashOffset += this.laneSpeed);
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = LANE_SEPARATOR_WIDTH;
        this.ctx.beginPath();
        this.ctx.moveTo(132, 0);
        this.ctx.lineTo(132, this.canvas.height);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(268, 0);
        this.ctx.lineTo(268, this.canvas.height);
        this.ctx.stroke();
    };

    drawStartMenu = () => {
        this.ctx.fillStyle = '#e3b944';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.font = 'bold 40px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText('CAR LANE RACE', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 5);
        this.ctx.font = 'italic 24px Arial';
        this.ctx.fillText('For Game Play: ', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 3 + 45);
        this.ctx.font = 'italic 14px Arial';
        this.ctx.fillText(
            'Use left arrow key to move left & right arrow key to move right',
            CANVAS_WIDTH / 2,
            CANVAS_HEIGHT / 3 + 80
        );
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText(
            'Click on this box & Press "Enter" to start the game',
            CANVAS_WIDTH / 2,
            CANVAS_HEIGHT - 200
        );
    };

    // drawScoreBoard = () => {
    //     this.ctx.fillStyle = '#9E2A2B';
    //     this.ctx.textAlign = 'center';
    //     this.ctx.textBaseline = 'middle';
    //     this.ctx.font = 'bold 16px Arial';
    //     this.ctx.fillText(
    //         'Score: ' + this.score, 40, 12
    //     )

    //     // Update HighScore
    //     let highScore = Math.max(parseInt(localStorage.getItem('highScore')), this.score);
    //     localStorage.setItem('highScore', highScore);
    //     this.ctx.fillText(
    //         'High Score: ' + localStorage.getItem('highScore'), CANVAS_WIDTH - 60, 12
    //     )
    // }

    drawGameEnd = () => {
        this.ctx.fillStyle = '#e3b944';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillStyle = 'white';
        this.ctx.font = 'italic 24px Arial';
        this.ctx.fillText('THE GAME HAS ENDED !', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 3);
        this.ctx.font = 'italic 14px Arial';

        this.ctx.font = 'italic 24px Arial';
        this.ctx.fillText(`Your score is: ${score}`, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 3 + 100);
        this.ctx.font = 'italic 14px Arial';


        this.ctx.font = 'italic 24px Arial';
        this.ctx.fillText(`Your High Score is: ${highScore}`, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 3 + 200);
        this.ctx.font = 'italic 20px Arial';
        this.ctx.fillText(`Reload the browser to restart the game`, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 3 + 300);
    };

    render = () => {
        window.requestAnimationFrame(this.render);
        this.canvas.addEventListener('keydown', (event) => {
            if (event.keyCode === 13) {
                this.gameStart = true;
            } 
            // if (event.keyCode === 82) {
            //     gameEnd = false;
            //     this.gameStart = true;
            //     console.log(gameEnd, this.gameStart);
            // }
        })

        if (this.gameStart === false) {
            this.drawStartMenu();
        }
        else if (this.gameStart === true) {
            if (gameEnd === false) {
                this.drawLane();
                // this.drawScoreBoard();
                this.playerCar.createPlayer();

                this.obstacleCar.createObstacle();
                this.obstacleCar2.createObstacle();
            } else if (gameEnd === true) {
                if (score > highScore) {
                    highScore = score;
                    localStorage.setItem('highScore', score);
                };
                this.drawGameEnd();
            }

        }
        }
}

const game = new CarGame('canvas');
game.render();