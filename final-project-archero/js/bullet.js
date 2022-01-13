class Bullet {
  constructor(
    ctx,
    heroPositionX,
    heroPositionY,
    monsterX,
    monsterY,
    bulletDamagePower,
    bulletSpeed,
    direction = 'default'
  ) {
    this.ctx = ctx;
    this.x = heroPositionX;
    this.y = heroPositionY;
    this.width = 40;
    this.height = 40;

    this.nearestEnemyX = monsterX;
    this.nearestEnemyY = monsterY;

    this.shotSpeed = bulletSpeed;
    this.damagePower = bulletDamagePower;

    this.dx = this.nearestEnemyX - this.x;
    this.dy = this.nearestEnemyY - this.y;
    this.angle = Math.atan2(this.dx, this.dy);
    this.speed = this.shotSpeed;
    this.vx = Math.sin(this.angle) * this.speed;
    this.vy = Math.cos(this.angle) * this.speed;
    this.direction = direction;
  }

  draw = () => {
    this.ctx.drawImage(weaponImage, this.x, this.y, this.width, this.height);
  };

  move = () => {
    if (
      gameStates.current !== gameStates.getReady &&
      gameStates.current !== gameStates.gameOver &&
      gameStates.current !== gameStates.upgrade
    ) {
      if (this.direction === 'back') {
        this.x -= this.vx;
        this.y -= this.vy;
      }
      // else if (this.direction === 'left') {
      //   this.x -= this.vx;
      //   this.y += this.vy;
      // } else if (this.direction === 'right') {
      //   this.x += this.vx;
      //   this.y += this.vy;
      // }
      else {
        this.x += this.vx;
        this.y += this.vy;
      }
      // Clear Bullet when collides with wall
      this.clearBulletWallCollision();

      // Clear Bullet when collides with obstacle
      this.collidesWith();
    }
  };

  clearBulletWallCollision = () => {
    bullets = bullets.filter((bullet) => {
      return (
        bullet.x > RING_LEFT_BOUNDARY &&
        bullet.x + bullet.width <= RING_RIGHT_BOUNDARY &&
        bullet.y > RING_TOP_BOUNDARY &&
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
