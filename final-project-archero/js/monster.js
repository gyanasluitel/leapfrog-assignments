class Monster {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 50;
    this.height = 50;
    this.x = CANVAS_WIDTH / 2;
    this.y = 50;
    this.health = 100;
  }

  draw = () => {
    this.ctx.drawImage(monsterImage, this.x, this.y, this.width, this.height);
  };

  move = () => {
    this.x -= 0.5;
    this.y += 0.2;
    // if (frames % 60 === 0) {
    //   monsterBullets.push(new monsterBullet(this.ctx));
    // }
    this.detectBulletCollision();
  };

  detectBulletCollision = () => {
    bullets.forEach((bullet) => {
      if (
        //Rectangle Collision Detection
        this.x < bullet.x + bullet.width &&
        this.x + this.width > bullet.x &&
        this.y < bullet.y + bullet.height &&
        this.height + this.y > bullet.y
      ) {
        this.health -= bullet.damagePower;
        console.log(this.health);
        this.clearBullet(bullet);
        if (this.health === 0) {
          console.log('monster killed');
        }
      }
    });
  };

  clearBullet(bulletToClear) {
    bullets = bullets.filter(
      (bullet) =>
        !(bulletToClear.x === bullet.x && bulletToClear.y === bullet.y)
    );
  }
}
