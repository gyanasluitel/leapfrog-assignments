class MonsterBullet {
  constructor(
    ctx,
    monsterX,
    monsterY,
    heroX,
    heroY,
    damage,
    weaponImage,
    type
  ) {
    this.ctx = ctx;
    this.x = monsterX;
    this.y = monsterY;
    this.type = type;
    this.width = this.type === 1 ? 15 : 2 ? 20 : 35;
    this.height = this.type === 1 ? 15 : 2 ? 20 : 35;

    this.heroX = heroX;
    this.heroY = heroY;

    this.shotSpeed = this.type === 1 ? 3 : 2 ? 4 : 5;
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
      if (this.type === 1 || this.type === 2) {
        this.collidesWithObstacle();
      }
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

  collidesWithObstacle = () => {
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
