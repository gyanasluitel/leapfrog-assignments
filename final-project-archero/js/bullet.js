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
    this.bounceCount = 0;
  }

  draw = () => {
    this.ctx.drawImage(weaponImage, this.x, this.y, this.width, this.height);
  };

  move = (hero) => {
    if (
      gameStates.current !== gameStates.getReady &&
      gameStates.current !== gameStates.gameOver &&
      gameStates.current !== gameStates.upgrade
    ) {
      this.updateMovement();

      // Clear Bullet When Collides with Wall
      this.clearBulletWallCollision(hero);

      // Clear Bullet when collides with obstacle
      this.collidesWith();
    }
  };

  updateMovement = () => {
    if (this.direction === 'back') {
      this.x -= this.vx;
      this.y -= this.vy;
    } else {
      this.x += this.vx;
      this.y += this.vy;
    }
  };

  clearBulletWallCollision = (hero) => {
    if (hero.powerUps.powerBouncyWall && this.bounceCount < 1) {
      if (this.x <= RING_LEFT_BOUNDARY) {
        this.angle = Math.atan2(5, 3);
        this.vx = Math.sin(this.angle) * this.speed;
        this.vy = -Math.cos(this.angle) * this.speed;
        this.damagePower = 0.5 * this.damagePower;
        this.updateMovement();
        this.bounceCount++;
      } else if (this.x + this.width >= RING_RIGHT_BOUNDARY) {
        this.angle = Math.atan2(5, 3);
        this.vx = -Math.sin(this.angle) * this.speed;
        this.vy = Math.cos(this.angle) * this.speed;
        this.damagePower = 0.5 * this.damagePower;

        this.updateMovement();
        this.bounceCount++;
      }
      if (this.y - this.width <= RING_TOP_BOUNDARY) {
        this.angle = Math.atan2(5, 3);
        this.vx = Math.sin(this.angle) * this.speed;
        this.vy = Math.cos(this.angle) * this.speed;
        this.damagePower = 0.5 * this.damagePower;
        this.updateMovement();
        this.bounceCount++;
      } else if (this.y + this.width >= canvas.height) {
        this.angle = Math.atan2(5, 3);
        this.vx = -Math.sin(this.angle) * this.speed;
        this.vy = Math.cos(this.angle) * this.speed;
        this.damagePower = 0.5 * this.damagePower;
        this.updateMovement();
        this.bounceCount++;
      }
    } else {
      bullets = bullets.filter((bullet) => {
        return (
          bullet.x > RING_LEFT_BOUNDARY &&
          bullet.x + bullet.width <= RING_RIGHT_BOUNDARY &&
          bullet.y > RING_TOP_BOUNDARY &&
          bullet.y + bullet.height <= CANVAS_HEIGHT
        );
      });
    }
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
