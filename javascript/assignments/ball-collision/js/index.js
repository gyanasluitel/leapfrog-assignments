// CANVAS
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 50;
canvas.style.border = '2px solid black';
const ctx = canvas.getContext('2d');


// BALL PARAMETERS
let minRadius = 5;
let maxRadius = 10;

let balls = [];

const ballGenerator = (numOfBalls) => {
    for (let i = 0; i < numOfBalls; i++) {
        let radius = getRandomInt(minRadius, maxRadius);
        let x = getRandomInt(radius, canvas.width - radius);
        let y = getRandomInt(radius, canvas.height - radius);
        let dx = getRandomInt(-3, 3);
        let dy = getRandomInt(-3, 3);
        let color = getRandomColor();
        let mass = getRandomInt(1, 5);

        // Collision Detection while spawning
        if (i !== 0) {
            for (let j = 0; j < i; j++) {
                let distance = getDistance(x, y, balls[j].x, balls[j].y);
                let radiusSquared = (radius + balls[j].radius) ** 2;
                if (distance < radiusSquared) {
                    x = getRandomInt(radius, canvas.width - radius);
                    y = getRandomInt(radius, canvas.width - radius);
                    j = -1;
                }
            }
        }

        let newBall = new Ball(radius, x, y, dx, dy, color, mass);
        balls.push(newBall);
    };
}


const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i =0 ; i < balls.length; i++) {
        balls[i].drawBall();
        balls[i].moveBall();
    }
};

ballGenerator(1000);
animate();