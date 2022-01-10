class Monster {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 50;
    this.height = 50;
    this.x = getRandomPosition(0, CANVAS_WIDTH);
    this.y = getRandomPosition(0, CANVAS_HEIGHT / 2);
    this.dx = 0.5;
    this.dy = 0.5;
    this.health = 100;
  }

  draw = () => {
    if (gameStates.current === gameStates.gameRunning) {
      this.ctx.drawImage(monsterImage, this.x, this.y, this.width, this.height);
      this.drawMonsterHealthBar();
    }
  };

  drawMonsterHealthBar = () => {
    this.ctx.strokeStyle = 'black';
    this.ctx.strokeRect(this.x, this.y - 20, this.width, 10);
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.x, this.y - 20, this.generateHealthPercentage(), 10);
  };

  generateHealthPercentage = () => {
    return (this.health * this.width) / 100;
  };

  detectBoxCollision = () => {
    if (this.x < 0 || this.x + this.width >= canvas.width) {
      this.dx = -this.dx;
    }
    if (this.y - this.width <= 0 || this.y + this.width >= canvas.height) {
      this.dy = -this.dy;
    }
  };

  move = (hero) => {
    if (gameStates.current === gameStates.gameRunning) {
      this.x += this.dx;
      this.y += this.dy;
      this.detectBoxCollision();

      if (timer % 100 === 0) {
        // console.log('monster weapon');
        if (hero.health > 0 && this.health > 0) {
          monsterBullets.push(
            new MonsterBullet(this.ctx, this.x, this.y, hero.x, hero.y)
          );
        }
      }

      this.detectBulletCollision(hero);
    }
  };

  detectBulletCollision = (hero) => {
    bullets.forEach((bullet) => {
      if (
        //Rectangle Collision Detection
        this.x < bullet.x + bullet.width &&
        this.x + this.width > bullet.x &&
        this.y < bullet.y + bullet.height &&
        this.height + this.y > bullet.y
      ) {
        this.health -= bullet.damagePower;
        this.clearBullet(bullet);
        if (this.health === 0) {
          // Remove monster from monster array upon death
          monsters = monsters.filter(
            (killedMonster) =>
              !(killedMonster.x === this.x && killedMonster.y === this.y)
          );
          coins.push(new Coin(this.ctx, this, hero));
          // console.log(coins);
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
