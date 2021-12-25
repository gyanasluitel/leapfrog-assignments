
// CREATING CANVAS 
const canvas = document.createElement("div");
canvas.setAttribute("id", "canvas");
canvas.style.width = "500px";
canvas.style.height = "500px";
canvas.style.border = "2px solid black";
canvas.style.position = "relative";
canvas.style.margin = "0 auto";

document.body.appendChild(canvas);

const randomColor = function() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

// CREATING POINTS
var points = [
    {x: 30, y: 50},
    {x: 80, y: 30},
    {x: 100, y: 150},
    {x: 150, y: 100},
    {x: 180, y: 250},
    {x: 210, y: 200},
    {x: 250, y: 230},
    {x: 290, y: 100},
    {x: 330, y: 290},
    {x: 360, y: 310}
]


class Points {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.point = document.createElement("div");
        this.point.style.width = "15px";
        this.point.style.height = "15px";
        this.point.style.backgroundColor = "lightblue";
        this.point.style.borderRadius = "50%";
        this.point.style.position = "absolute";
        this.point.style.top = this.y + "px";
        this.point.style.left = this.x + "px";

        this.point.addEventListener("click", function (){
            this.point.style.backgroundColor = randomColor();
        }.bind(this));

        this.point.addEventListener("dblclick", function (){
            canvas.removeChild(this.point);
        }.bind(this));

        this.point.addEventListener("mouseover", function () {
            this.point.style.cursor = "pointer";
        }.bind(this));

        canvas.appendChild(this.point);
    }
}

for (let i = 0; i < points.length; i++) {
    const newPoint = new Points(points[i].x, points[i].y);
}