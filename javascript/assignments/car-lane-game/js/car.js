const CAR_WIDTH = 80;
const CAR_HEIGHT = 120;
let score = 0;
let speed = 5;

const possibleObstaclePositions  = [20, 160, 300];


class PlayerCar {
    constructor(ctx) {
        this.playerCarX = (CANVAS_WIDTH/2) - (CAR_WIDTH/2);
        this.playerCarY = CANVAS_HEIGHT - 140;
        this.ctx = ctx;
        this.playerCar = new Image();
        this.playerCar.src = "images/playerCar4.png";
    };

    createPlayer = () => {
        this.ctx.drawImage(this.playerCar, this.playerCarX, this.playerCarY, CAR_WIDTH, CAR_HEIGHT);    
    };

    movePlayer = (position) => {
        if (position === "left" && this.playerCarX > 20) {
            this.playerCarX -= 140;
        }
        if (position === "right" && this.playerCarX < 300) {
            this.playerCarX += 140;

        }
    };
};


class ObstacleCar {
    constructor(ctx, y, playerCar) {
        this.playerCar = playerCar;
        this.ctx = ctx;
        this.obstacleCarX = randomPositionGenerator(possibleObstaclePositions);
        this.obstacleCarY = y ? y : 0;
        this.speed = speed;

        this.obstacleCar = new Image();
        this.obstacleCar.src = "images/obstacleCar.png";
    };

    createObstacle = () => {
        this.ctx.drawImage(this.obstacleCar, this.obstacleCarX, this.obstacleCarY, CAR_WIDTH, CAR_HEIGHT);

        this.obstacleCarY += this.speed;

        if (this.obstacleCarY >= CANVAS_HEIGHT) {
            this.obstacleCarY = -CANVAS_HEIGHT;
            this.obstacleCarX = randomPositionGenerator(possibleObstaclePositions);
            score++;
            if (speed < 25) {
                speed += 0.3;
                this.speed = speed;
            }
        }
        
        this.detectCollision();
    };

    detectCollision = () => {
        if (this.obstacleCarX === this.playerCar.playerCarX 
                && Math.abs(this.playerCar.playerCarY - this.obstacleCarY) <= CAR_HEIGHT - 10) {
                    gameEnd = true;
                    return;
                }
    };

}
