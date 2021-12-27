// CREATING CANVAS
const canvas = document.createElement("div");
canvas.setAttribute("id", "canvas");

canvas.style.width = "350px";
canvas.style.height = "400px";
canvas.style.border = "2px solid black";
canvas.style.position = "relative";

document.body.appendChild(canvas);


// CREATING BALL
const ball = document.createElement("div");
ball.style.width = "50px";
ball.style.height = "50px";
ball.style.borderRadius = "50%";
ball.style.position = "absolute";
ball.style.top = "0px";
ball.style.left = "150px";
ball.style.backgroundColor = "#42f5e0";

canvas.appendChild(ball);

let ballDirection = "down";


const animation = () => {
    if (ballDirection === "down") {
        ball.style.top = parseInt(ball.style.top) + 1 + "px";
        if (parseInt(ball.style.top) + 50 >= parseInt(canvas.style.height)) {
            ballDirection = "up";
        }
    } else if (ballDirection === "up") {
        ball.style.top = parseInt(ball.style.top) - 1 + "px";
        if (parseInt(ball.style.top) <= 0) {
            ballDirection = "down";
        }
    }
    
};

setInterval(animation, 5);
