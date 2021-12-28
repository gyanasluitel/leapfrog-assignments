class Ant {
    constructor(radius, x, y, dx, dy, antImage) {
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.ant = antImage;
        this.mass = 1;
    };

    drawAnt = () => {
        ctx.drawImage(this.ant, this.x - this.radius, this.y - this.radius);
    };

    detectBoxCollision = () => {
        if (this.x - this.radius <= 0 || this.x + this.radius >= canvas.width) {
            this.dx = -this.dx;
        }
        if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height) {
            this.dy = -this.dy;
        }
    };

    detectAntCollision = () => {
        for (let i = 0; i < ants.length; i++) {
            if (ants[i] !== this) {
                let distance = getDistance(this.x, this.y, ants[i].x, ants[i].y);
                let radiusSquared = (this.radius + ants[i].radius) ** 2;
                if (distance <= radiusSquared) {
                    this.resolveAntCollision(ants[i]);
                }
            }
        }
    };

    resolveAntCollision = (otherAnt) => {
        let collisionVector = {
            x: otherAnt.x - this.x,
            y: otherAnt.y - this.y
        };

        let distanceOfCollisionVector = Math.sqrt(getDistance(this.x, this.y, otherAnt.x, otherAnt.y));
        
        let normalizedCollisionVector = {
            x: collisionVector.x / distanceOfCollisionVector,
            y: collisionVector.y / distanceOfCollisionVector
        };

        let relativeVelocityVector = {
            x: this.dx - otherAnt.dx,
            y: this.dy - otherAnt.dy
        };

        let collisionSpeed = relativeVelocityVector.x * normalizedCollisionVector.x + relativeVelocityVector.y * normalizedCollisionVector.y;
        
        if (collisionSpeed < 0) return;

        let impulse = 2 * collisionSpeed / (this.mass + otherAnt.mass);
        this.dx -= (impulse * otherAnt.mass * normalizedCollisionVector.x);
        this.dy -= (impulse * otherAnt.mass * normalizedCollisionVector.y);
        otherAnt.dx += (impulse * this.mass * normalizedCollisionVector.x);
        otherAnt.dy += (impulse * this.mass * normalizedCollisionVector.y);
    }

    moveAnt = () => {
        this.detectBoxCollision();
        this.detectAntCollision();
        this.x += this.dx;
        this.y += this.dy;
    };
}