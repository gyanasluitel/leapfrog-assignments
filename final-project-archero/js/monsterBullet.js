class MonsterBullet {
  constructor(ctx, heroPositionX, heroPositionY) {
    this.ctx = ctx;
    this.x = heroPositionX;
    this.y = heroPositionY;
    this.width = 40;
    this.height = 40;

    this.nearestEnemyX = monsterX;
    this.nearestEnemyY = monsterY;

    this.shotSpeed = 6;
    this.shotPower = 10;

    this.dx = this.nearestEnemyX - this.x;
    this.dy = this.nearestEnemyY - this.y;
    this.angle = Math.atan2(this.dx, this.dy);
    this.speed = this.shotSpeed;
    this.vx = Math.sin(this.angle) * this.speed;
    this.vy = Math.cos(this.angle) * this.speed;
  }

  draw = () => {
    this.ctx.drawImage(weaponImage, this.x, this.y, this.width, this.height);
  };

  move = () => {
    this.x += this.vx;
    this.y += this.vy;

    // Clear Bullet when collides with wall
    this.clearBullet();
  };

  clearBullet = () => {
    bullets = bullets.filter((bullet) => {
      return (
        bullet.x > 0 &&
        bullet.x + bullet.width <= CANVAS_WIDTH &&
        bullet.y > 0 &&
        bullet.y + bullet.height <= CANVAS_HEIGHT
      );
    });
  };
}
