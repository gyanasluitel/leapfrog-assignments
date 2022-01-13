class Monster {
  constructor(ctx, monster) {
    this.ctx = ctx;
    this.image = monster.image;
    this.weaponImage = monster.weaponImage;
    this.damage = monster.damage;
    this.type = monster.type;
    this.width = 50;
    this.height = 50;
    this.x = getRandomPosition(
      RING_LEFT_BOUNDARY + 50,
      RING_RIGHT_BOUNDARY - 50
    );
    this.y = getRandomPosition(RING_TOP_BOUNDARY + 10, CANVAS_HEIGHT / 2);
    this.dx = 0;
    this.dy = 0;
    this.totalHealth = 100;
    this.health = this.totalHealth;
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

      if (timer % 200 === 0) {
        this.dx = getRandomIntInclusive(-1.5, 1.5);
        this.dy = getRandomIntInclusive(-1.5, 1.5);
      } else if (timer % 100 === 0) {
        if (getRandomIntInclusive(2, 4) % 2 === 0) {
          this.dx = 0;
          this.dy = 0;
        }
      }

      // Move Monster

      this.x += this.dx;
      this.y += this.dy;
      this.detectBoxCollision();
      this.detectObtsacleCollision();

      if (timer % 300 === 0) {
        if (hero.health > 0 && this.health > 0) {
          monsterBullets.push(
            new MonsterBullet(
              this.ctx,
              this.x,
              this.y,
              hero.x,
              hero.y,
              this.damage,
              this.weaponImage
            )
          );
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
        // console.log('monster obstacle collision');
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
        // console.log(this.health);
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
