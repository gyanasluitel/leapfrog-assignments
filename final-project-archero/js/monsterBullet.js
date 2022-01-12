class MonsterBullet {
  constructor(ctx, monsterX, monsterY, heroX, heroY, damage, weaponImage) {
    this.ctx = ctx;
    this.x = monsterX;
    this.y = monsterY;
    this.width = 15;
    this.height = 15;

    this.heroX = heroX;
    this.heroY = heroY;

    this.shotSpeed = 2;
    this.damagePower = damage;
    this.weaponImage = weaponImage;

    this.dx = this.heroX - this.x;
    this.dy = this.heroY - this.y;
    this.angle = Math.atan2(this.dx, this.dy);
    this.speed = this.shotSpeed;
    this.vx = Math.sin(this.angle) * this.speed;
    this.vy = Math.cos(this.angle) * this.speed;
  }

  draw = () => {
    this.ctx.drawImage(
      this.weaponImage,
      this.x,
      this.y,
      this.width,
      this.height
    );
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
      this.collidesWith();
    }
  };

  clearBulletWallCollision = () => {
    monsterBullets = monsterBullets.filter((bullet) => {
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
    monsterBullets = monsterBullets.filter(
      (bullet) =>
        !(bulletToClear.x === bullet.x && bulletToClear.y === bullet.y)
    );
  }
}
