class BossMonster {
  constructor(ctx, monster) {
    this.ctx = ctx;
    this.image = monster.image;
    this.weaponImage = monster.weaponImage;
    this.damage = monster.damage;
    this.type = monster.type;
    this.totalHealth = monster.health;
    this.health = this.totalHealth;
    this.width = 80;
    this.height = 80;
    this.x = RING_WIDTH / 2;
    this.y = RING_TOP_BOUNDARY + 80;
  }

  draw = () => {
    if (gameStates.current === gameStates.gameRunning) {
      this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      this.drawMonsterHealthBarSkull();
      this.drawMonsterHealthBar();
    }
  };

  drawMonsterHealthBarSkull = () => {
    this.ctx.drawImage(
      bossIconIndicatorImage,
      this.x + 15,
      this.y - 60,
      50,
      50
    );
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

      // Monster shoot
      if (hero.health > 0 && this.health > 0) {
        if (timer % 100 === 0) {
          monsterBullets.push(
            new MonsterBullet(
              this.ctx,
              this.x + this.width / 2,
              this.y + this.height / 4,
              hero.x - 200,
              hero.y,
              this.damage,
              this.weaponImage,
              this.type
            )
          );
          monsterBullets.push(
            new MonsterBullet(
              this.ctx,
              this.x + this.width / 2,
              this.y + this.height / 4,
              hero.x - 100,
              hero.y,
              this.damage,
              this.weaponImage,
              this.type
            )
          );
          monsterBullets.push(
            new MonsterBullet(
              this.ctx,
              this.x + this.width / 2,
              this.y + this.height / 4,
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
              this.x + this.width / 2,
              this.y + this.height / 4,
              hero.x + 80,
              hero.y,
              this.damage,
              this.weaponImage,
              this.type
            )
          );

          monsterBullets.push(
            new MonsterBullet(
              this.ctx,
              this.x + this.width / 2,
              this.y + this.height / 4,
              hero.x + 160,
              hero.y,
              this.damage,
              this.weaponImage,
              this.type
            )
          );
        }
      }
      this.detectBulletCollision();
    }
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
