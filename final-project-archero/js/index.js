class ArcheroGame {
  constructor(canvasName) {
    this.canvas = document.getElementById(canvasName);
    this.canvas.width = CANVAS_WIDTH;
    this.canvas.height = CANVAS_HEIGHT;
    this.canvas.style.border = '2px solid black';
    this.canvas.style.margin = '0 5% 0 25%';
    this.ctx = canvas.getContext('2d');

    // this.monster = new Monster(this.ctx);
    // this.hero = new Hero(this.ctx, monster);
  }

  draw = () => {
    this.ctx.fillStyle = 'lightblue';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // this.hero.draw();
    hero.draw();
    monster.draw();
    // this.monster.draw();
    bullets.forEach((bullet) => bullet.draw());
    monsterBullets.forEach((bullet) => bullet.draw());
  };

  update = () => {
    // this.hero.move();
    hero.move();
    monster.move();
    // this.monster.move();
    bullets.forEach((bullet) => bullet.move());
    monsterBullets.forEach((bullet) => bullet.move());
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
