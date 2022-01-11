class Bullet {
  constructor(ctx, heroPositionX, heroPositionY, monsterX, monsterY) {
    this.ctx = ctx;
    this.x = heroPositionX;
    this.y = heroPositionY;
    this.width = 40;
    this.height = 40;

    this.nearestEnemyX = monsterX;
    this.nearestEnemyY = monsterY;

    this.shotSpeed = 10;
    this.damagePower = 10;

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
    if (
      gameStates.current !== gameStates.getReady &&
      gameStates.current !== gameStates.gameOver
    ) {
      this.x += this.vx;
      this.y += this.vy;

      // Clear Bullet when collides with wall
      this.clearBulletWallCollision();

      // Clear Bullet when collides with obstacle
      this.collidesWith();
    }
  };

  clearBulletWallCollision = () => {
    bullets = bullets.filter((bullet) => {
      return (
        bullet.x > 0 &&
        bullet.x + bullet.width <= CANVAS_WIDTH &&
        bullet.y > 0 &&
        bullet.y + bullet.height <= CANVAS_HEIGHT
      );
    });
  };

  collidesWith = () => {
    obstacles.forEach((obstacle) => {
      if (
        this.x < obstacle.x + obstacle.width &&
        this.x + this.width > obstacle.x &&
        this.y < obstacle.y + obstacle.height &&
        this.height + this.y > obstacle.y
      ) {
        this.clearBullet(this);
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
