class MonsterBullet {
  constructor(ctx, monsterX, monsterY, heroX, heroY) {
    this.ctx = ctx;
    this.x = monsterX;
    this.y = monsterY;
    this.width = 20;
    this.height = 20;

    this.heroX = heroX;
    this.heroY = heroY;

    this.shotSpeed = 2;
    this.damagePower = 10;

    this.dx = this.heroX - this.x;
    this.dy = this.heroY - this.y;
    this.angle = Math.atan2(this.dx, this.dy);
    this.speed = this.shotSpeed;
    this.vx = Math.sin(this.angle) * this.speed;
    this.vy = Math.cos(this.angle) * this.speed;
  }

  draw = () => {
    this.ctx.drawImage(
      monsterWeaponImage,
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
    }
  };

  clearBulletWallCollision = () => {
    monsterBullets = monsterBullets.filter((bullet) => {
      return (
        bullet.x > 0 &&
        bullet.x + bullet.width <= CANVAS_WIDTH &&
        bullet.y > 0 &&
        bullet.y + bullet.height <= CANVAS_HEIGHT
      );
    });
  };
}
