class Bird {
    constructor(ctx) {
        this.ctx = ctx;
        this.animation = [
            {spriteX: 6, spriteY: 982},
            {spriteX: 62, spriteY: 982},
            {spriteX: 118, spriteY: 982},
            {spriteX: 62, spriteY: 982}
        ];
        this.spriteWidth = 34;
        this.spriteHeight = 24;
        this.x = CANVAS_WIDTH / 2 - 30;
        this.y = CANVAS_HEIGHT / 3 + 25;
        this.frame = 0;
        this.speed = 0;
        this.gravity = 0.2;
        this.jump = 3;
        this.rotation = 0;
        this.radius = 12;
    };

    draw = () => {
        let birdImage = this.animation[this.frame];

        this.ctx.save(); // save context state of canvas
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(this.rotation);
        this.ctx.drawImage(
            spriteImage, 
            birdImage.spriteX, 
            birdImage.spriteY, 
            this.spriteWidth, 
            this.spriteHeight, 
            - this.spriteWidth/2, 
            - this.spriteHeight/2,
            this.spriteWidth,
            this.spriteHeight);

            this.ctx.restore();
    };

    update = () => {
        // IF GET READY GAME STATE = SLOW BIRD FLAP
        this.period = gameStates.current === gameStates.getReady ? 10 : 5;
        // INCREMENT FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period === 0 ? 1 : 0;
        // FRAME GOES FROM 4 TO 0;
        this.frame = this.frame % this.animation.length;

        if (gameStates.current === gameStates.getReady) {
            this.y = CANVAS_HEIGHT / 3 + 25;
            this.rotation = 0 * DEGREE;
        } else {
            this.speed += this.gravity;
            this.y += this.speed;

            if (this.y + this.spriteHeight/2 >=CANVAS_HEIGHT - 112) {
                this.y = CANVAS_HEIGHT - 112 - this.spriteHeight/2;
                if (gameStates.current === gameStates.gameRunning) {
                    gameStates.current = gameStates.gameOver;
                }
            }
            // If THE SPEED IS GREATER THAN JUMP, BIRD IS FALLING DOWN
            if  (this.speed >= this.jump) {
                this.rotation = 90 * DEGREE;
                this.frame = 1;
            } else {
                this.rotation = -25 * DEGREE;
            }
        }

        // for (let i = 0; i < xPostionPipes.length; i++) {

        // }
    }

    flap = () => {
        this.speed = - this.jump;
    };

    reset = () => {
        this.speed = 0;
    }
}