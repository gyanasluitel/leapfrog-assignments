// CREATING CANVAS
const canvas = document.createElement("div");
canvas.setAttribute("id", "canvas");

canvas.style.width = "500px";
canvas.style.height = "500px";
canvas.style.border = "2px solid black";
canvas.style.position = "relative";

document.body.appendChild(canvas);


var points = [
    {x: 50, width: 50, height:50, ballColor: "red"},
    {x: 150, width: 60, height:60, ballColor: "blue"},
    {x: 250, width: 80, height:80, ballColor: "green"}
];

//CREATING BALL
class Ball {
    constructor(x, width, height, ballColor) {
        this.x = x;
        this.width = width;
        this.height = height;
        this.ballColor = ballColor;

        this.ball = document.createElement("div");
        this.ball.style.width = this.width + "px";
        this.ball.style.height = this.height + "px";
        this.ball.style.borderRadius = "50%";
        this.ball.style.position = "absolute";
        this.ball.style.top = "0px";
        this.ball.style.left = this.x + "px";
        this.ball.style.backgroundColor = this.ballColor;

        canvas.appendChild(this.ball);

        this.ballDirection = "down";

        this.animation = function() {
            // window.requestAnimationFrame(this.animation.bind(this));
            if (this.ballDirection === "down") {
                this.ball.style.top = parseInt(this.ball.style.top) + 1 + "px";
                if (parseInt(this.ball.style.top) + this.height >= parseInt(canvas.style.height)) {
                    this.ballDirection = "up";
                }   else if (this.ballDirection === "up") {
                    this.ball.style.top = parseInt(this.ball.style.top) - 1 + "px";
                    if (parseInt(this.ball.style.top) <= 0) {
                        this.ballDirection = "down";
                    }
                }
            }      
            window.requestAnimationFrame(this.animation.bind(this));
        };
    };
}


// for (let i = 0; i < points.length; i++) {
//     console.log(points[i]);
//     const newBall = new Ball(points[i].x, points[i].width, points[i].height, points[i].ballColor);
// }

const newBall = new Ball(50, 50, 50, "red");
console.log(newBall);

newBall.animation();

// setInterval(newBall.animation, 1);
