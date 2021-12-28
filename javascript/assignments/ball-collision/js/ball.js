class Ball {
    constructor(radius, x, y, dx, dy, color, mass) {
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.mass = mass;
    };

    drawBall = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    };

    detectBoxCollision = () => {
        if (this.x - this.radius <= 0 || this.x + this.radius >= canvas.width) {
            this.dx = -this.dx;
        }
        if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height) {
            this.dy = -this.dy;
        }
    };

    detectBallCollision = () => {
        for (let i = 0; i < balls.length; i++) {
            if (balls[i] !== this) {
                let distance = getDistance(this.x, this.y, balls[i].x, balls[i].y);
                let radiusSquared = (this.radius + balls[i].radius) ** 2;
                if (distance <= radiusSquared) {
                    this.resolveBallCollision(balls[i]);
                }
            }
        }
    };

    resolveBallCollision = (otherBall) => {
        let collisionVector = {
            x: otherBall.x - this.x,
            y: otherBall.y - this.y
        };

        let distanceOfCollisionVector = Math.sqrt(getDistance(this.x, this.y, otherBall.x, otherBall.y));
        
        let normalizedCollisionVector = {
            x: collisionVector.x / distanceOfCollisionVector,
            y: collisionVector.y / distanceOfCollisionVector
        };

        let relativeVelocityVector = {
            x: this.dx - otherBall.dx,
            y: this.dy - otherBall.dy
        };

        let collisionSpeed = relativeVelocityVector.x * normalizedCollisionVector.x + relativeVelocityVector.y * normalizedCollisionVector.y;
        
        if (collisionSpeed < 0) return;

        let impulse = 2 * collisionSpeed / (this.mass + otherBall.mass);
        this.dx -= (impulse * otherBall.mass * normalizedCollisionVector.x);
        this.dy -= (impulse * otherBall.mass * normalizedCollisionVector.y);
        otherBall.dx += (impulse * this.mass * normalizedCollisionVector.x);
        otherBall.dy += (impulse * this.mass * normalizedCollisionVector.y);
    }

    moveBall = () => {
        this.detectBoxCollision();
        this.detectBallCollision();
        this.x += this.dx;
        this.y += this.dy;
    };
}