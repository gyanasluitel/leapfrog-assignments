class Coin {
  constructor(ctx, monster, hero) {
    this.ctx = ctx;
    this.monster = monster;
    this.x = this.monster.x;
    this.y = this.monster.y;
    this.width = 30;
    this.height = 30;
    this.hero = hero;

    this.dx = this.hero.x - this.x;
    this.dy = this.hero.y - this.y;
    this.angle = Math.atan2(this.dx, this.dy);
    this.speed = 10;
    this.vx = Math.sin(this.angle) * this.speed;
    this.vy = Math.cos(this.angle) * this.speed;
  }

  draw = () => {
    this.ctx.drawImage(coinImage, this.x, this.y, this.width, this.height);
  };

  move = () => {
    setInterval(() => {
      if (this.monster.health === 0) {
        this.x += this.vx;
        this.y += this.vy;
      }
    }, 2000);
  };
}
