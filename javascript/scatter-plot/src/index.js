// CREATING CANVAS 
const canvas = document.createElement("div");
canvas.setAttribute("id", "canvas");
canvas.style.width = "500px";
canvas.style.height = "500px";
canvas.style.border = "2px solid black";

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

const createPoint = (x, y) => {
    const point = document.createElement("div");
    point.style.width = "15px";
    point.style.height = "15px";
    point.style.backgroundColor = "lightblue";
    point.style.borderRadius = "50%";
    point.style.position = "absolute";
    point.style.top = y + "px";
    point.style.left = x + "px";
    
    point.addEventListener("click", (event) => {
        console.log(event.target);
        event.target.style.backgroundColor = randomColor();
    });
    
    point.addEventListener("dblclick", (event) => {
        console.log(event.target);
        canvas.removeChild(event.target);
    });

    point.addEventListener("mouseover", (event) => {
        console.log(event.target);
        event.target.style.cursor = "pointer";
    })

    return point;
}


for (let i = 0; i < points.length; i++) {
    const newPoint = createPoint(points[i].x, points[i].y);
    canvas.appendChild(newPoint);
}
