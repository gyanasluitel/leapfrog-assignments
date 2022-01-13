class Monster {
  constructor(ctx, monster) {
    this.ctx = ctx;
    this.image = monster.image;
    this.weaponImage = monster.weaponImage;
    this.damage = monster.damage;
    this.type = monster.type;
    this.totalHealth = monster.health;
    this.health = this.totalHealth;
    this.width = 50;
    this.height = 50;
    this.x = getRandomPosition(
      RING_LEFT_BOUNDARY + 50,
      RING_RIGHT_BOUNDARY - 50
    );
    this.y = getRandomPosition(RING_TOP_BOUNDARY + 10, CANVAS_HEIGHT / 2);
    this.dx = 0;
    this.dy = 0;
  }

  draw = () => {
    if (gameStates.current === gameStates.gameRunning) {
      this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
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
    return (this.health * this.width) / this.totalHealth;
  };

  // Monster Movement and Update
  move = (hero) => {
    if (gameStates.current === gameStates.gameRunning) {
      if (this.health <= 0) {
        this.clearMonster(this, hero);
      }

      // Monster Movement Calculation
      if (this.type === 1) {
        if (timer % 200 === 0) {
          this.dx = getRandomIntInclusive(-1, 1);
          this.dy = getRandomIntInclusive(-1, 1);
        } else if (timer % 100 === 0) {
          if (getRandomIntInclusive(0, 1) === 0) {
            this.dx = 0;
            this.dy = 0;
          }
        } else if (this.type === 2) {
          if (timer % 200 === 0) {
            this.dx = getRandomIntInclusive(-2, 2);
            this.dy = getRandomIntInclusive(-2, 2);
          } else if (timer % 100 === 0) {
            if (getRandomIntInclusive(0, 1) === 0) {
              this.dx = 0;
              this.dy = 0;
            }
          }
        } else if (this.type === 3) {
          this.dx = 0;
          this.dy = 0;
        }
      }

      // Move Monster
      this.x += this.dx;
      this.y += this.dy;

      // Collision Detection
      this.detectBoxCollision();
      if (this.type !== 2) {
        this.detectObtsacleCollision();
      }

      // Monster shoot

      if (hero.health > 0 && this.health > 0) {
        if (this.type === 1 || this.type === 2) {
          if (timer % 300 === 0) {
            monsterBullets.push(
              new MonsterBullet(
                this.ctx,
                this.x,
                this.y,
                hero.x,
                hero.y,
                this.damage,
                this.weaponImage,
                this.type
              )
            );
          }
        } else if (this.type === 3) {
          if (timer % 200 === 0) {
            monsterBullets.push(
              new MonsterBullet(
                this.ctx,
                this.x,
                this.y,
                hero.x,
                hero.y,
                this.damage,
                this.weaponImage,
                this.type
              )
            );

            monsterBullets.push(
              new MonsterBullet(
                this.ctx,
                this.x + 10,
                this.y,
                hero.x + 50,
                hero.y,
                this.damage,
                this.weaponImage,
                this.type
              )
            );

            monsterBullets.push(
              new MonsterBullet(
                this.ctx,
                this.x - 10,
                this.y,
                hero.x - 50,
                hero.y,
                this.damage,
                this.weaponImage,
                this.type
              )
            );
          }
        }
      }

      this.detectBulletCollision();
    }
  };

  detectBoxCollision = () => {
    if (
      this.x < RING_LEFT_BOUNDARY ||
      this.x + this.width >= RING_RIGHT_BOUNDARY
    ) {
      this.dx = -this.dx;
    }
    if (
      this.y - this.width <= RING_TOP_BOUNDARY ||
      this.y + this.width >= canvas.height
    ) {
      this.dy = -this.dy;
    }
  };

  detectObtsacleCollision = () => {
    obstacles.forEach((obstacle) => {
      if (
        this.x < obstacle.x + obstacle.width &&
        this.x + this.width > obstacle.x &&
        this.y < obstacle.y + obstacle.height &&
        this.y + this.height > obstacle.y
      ) {
        this.dx = 0;
        this.dy = 0;
      }
    });
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
        this.clearBullet(bullet);
      }
    });
  };

  // Clear Monster from 'monster' array on death
  clearMonster(monsterToClear, hero) {
    monsters = monsters.filter(
      (monster) =>
        !(monster.x === monsterToClear.x && monster.y === monsterToClear.y)
    );
    coins.push(new Coin(this.ctx, monsterToClear, hero));

    // Spawn HealingItem at probability of 33.33%
    if (getRandomIntInclusive(1, 3) === 1) {
      healingItems.push(new HealingItem(this.ctx, monsterToClear, hero));
    }
  }

  // Clear bullet after collision with monster
  clearBullet(bulletToClear) {
    bullets = bullets.filter(
      (bullet) =>
        !(bulletToClear.x === bullet.x && bulletToClear.y === bullet.y)
    );
  }
}
