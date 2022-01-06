class Monster {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 50;
    this.height = 50;
    this.x = CANVAS_WIDTH / 2;
    this.y = 50;
  }

  draw = () => {
    this.ctx.drawImage(monsterImage, this.x, this.y, this.width, this.height);
  };

  move = () => {
    this.x += 0.5;
    this.y += 0.2;

    if (frames % 60 === 0) {
      monsterBullets.push(new monsterBullet(this.ctx));
    }
  };
}
