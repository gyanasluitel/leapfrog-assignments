class ArcheroGame {
  constructor(canvasName) {
    this.canvas = document.getElementById(canvasName);
    this.canvas.width = CANVAS_WIDTH;
    this.canvas.height = CANVAS_HEIGHT;
    this.canvas.style.border = '2px solid black';
    this.canvas.style.margin = '0 5% 0 25%';
    this.ctx = canvas.getContext('2d');

    this.monster = new Monster(this.ctx);
    this.hero = new Hero(this.ctx);
  }

  draw = () => {
    this.ctx.fillStyle = 'lightblue';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.hero.draw();
    this.monster.draw();
    bullets.forEach((bullet) => bullet.draw());
    monsterBullets.forEach((bullet) => bullet.draw());
    coins.forEach((coin) => coin.draw());
  };

  update = () => {
    this.hero.move(this.monster);
    this.monster.move(this.hero);
    bullets.forEach((bullet) => bullet.move());
    monsterBullets.forEach((bullet) => bullet.move());
    coins.forEach((coin) => coin.move());
  };

  animate = () => {
    this.update();
    this.draw();
    timer++;
    // console.log(timer);
    window.requestAnimationFrame(this.animate);
  };
}

const newGame = new ArcheroGame('canvas');
newGame.animate();

document.addEventListener('keydown', (event) => {
  //   console.log(event.key);
  event.preventDefault();
  keyPressed[event.key] = true;
});

document.addEventListener('keyup', (event) => {
  //   console.log(event.key);
  event.preventDefault();
  keyPressed[event.key] = false;
  //   console.log(keyPressed);
});
