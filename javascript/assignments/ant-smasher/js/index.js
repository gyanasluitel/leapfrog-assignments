// CANVAS
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 100;
canvas.style.border = '1px solid black';
const ctx = canvas.getContext('2d');

let ants = [];
let score = 0;

const domScore = document.getElementById('score');

const antGenerator = (numOfAnts) => {
    const img = new Image();
    img.src = '../images/ant.png';
    img.onload = () => {
        for (let i = 0; i < numOfAnts; i++) {
            let radius = 18;
            let x = getRandomInt(radius, canvas.width - radius);
            let y = getRandomInt(radius, canvas.height - radius);
            let dx = getRandomInt(-3, 3);
            let dy = getRandomInt(-3, 3);
            let color = getRandomColor();
            let mass = getRandomInt(1, 5);
    
            // Collision Detection while spawning
            if (i !== 0) {
                for (let j = 0; j < i; j++) {
                    let distance = getDistance(x, y, ants[j].x, ants[j].y);
                    let radiusSquared = (radius + ants[j].radius) ** 2;
                    if (distance < radiusSquared) {
                        x = getRandomInt(radius, canvas.width - radius);
                        y = getRandomInt(radius, canvas.width - radius);
                        j = -1;
                    }
                }
            }
    
            let newAnt = new Ant(radius, x, y, dx, dy,img);
            ants.push(newAnt);
        };
    };
};

canvas.addEventListener('mouseover', (event) => {
    canvas.style.cursor = "pointer";
})

const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i =0 ; i < ants.length; i++) {
        ants[i].drawAnt();
        ants[i].moveAnt();
    }
};

antGenerator(50);
animate();

const destruct = (ant) => {
    const updatedAnts = ants.filter((items, index) => ant !== index);
    ants = updatedAnts;
    score++;
    domScore.innerHTML = score;
};

canvas.addEventListener('mousedown', (event) => {
    let x = event.x;
    let y = event.y;

    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    for (let i = 0; i < ants.length; i++) {
      if (getDistance(x, y, ants[i].x, ants[i].y) <= ants[i].radius ** 2) {
        destruct(i);
        }
    }
});