class Hero {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 50;
    this.height = 50;
    this.x = CANVAS_WIDTH / 2 - 25;
    this.y = CANVAS_HEIGHT - 50;
    this.dx = 5;
    this.dy = 5;
    this.totalHealth = parseInt(localStorage.getItem('arcHeroHealth')) || 100;
    this.health = this.totalHealth;
    this.previousX = this.x;
    this.previousY = this.y;
    this.level = 1;
    this.experience = 0;
    this.heroLevelWidth = 220;
    this.bulletDamagePower =
      parseInt(localStorage.getItem('arcHeroBulletDamagePower')) || 10;
    this.bulletSpeed = 6;

    //Power Ups
    this.powerUps = {
      powerMultiShot: false,
      powerArrowSide: false,
      powerArrowDiagonal: false,
      powerArrowFront: false,
      powerArrowBack: false,
      powerBouncyWall: false,
      powerHeal: false,
      powerHpBoost: false,
    };
  }

  // Draw Hero Sprite
  draw = (selectPowerUp) => {
    if (
      gameStates.current !== gameStates.getReady &&
      gameStates.current !== gameStates.gameOver &&
      gameStates.current !== gameStates.upgrade
    ) {
      this.ctx.drawImage(heroImage, this.x, this.y, this.width, this.height);
      this.drawHeroHealthBar();
      this.drawHeroLevel(selectPowerUp);
    }
  };

  drawHeroLevel = (selectPowerUp) => {
    this.ctx.fillStyle = 'white';
    this.ctx.font = 'bold 20px Arial';
    this.ctx.fillText(`Level ${this.level}`, 160, 20);

    this.ctx.strokeStyle = 'white';
    this.ctx.strokeRect(80, 28, this.heroLevelWidth, 20);
    this.ctx.fillStyle = 'rgb(240, 206, 17)';
    this.ctx.fillRect(
      80,
      28,
      this.generateHeroLevelPercentage(selectPowerUp),
      20
    );
  };

  generateHeroLevelPercentage = (selectPowerUp) => {
    let percentage = (this.experience * this.heroLevelWidth) / 100;
    if (percentage >= this.heroLevelWidth) {
      this.level++;
      this.experience = 0;
      selectPowerUp.getPowerUpOptions(this);
      POWER_UP_SELECT_AUDIO.play();
      gameStates.current = gameStates.selectPowerUp;
    }
    return percentage;
  };

  drawHeroHealthBar = () => {
    this.ctx.fillStyle = 'white';
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillText(this.health, this.x + 15, this.y - 25);

    this.ctx.strokeStyle = 'black';
    this.ctx.strokeRect(this.x, this.y - 20, this.width, 10);
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.x, this.y - 20, this.generateHealthPercentage(), 10);
  };

  generateHealthPercentage = () => {
    return (this.health * this.width) / this.totalHealth;
  };

  /*--------------------------------
    PLAYER MOVEMENT AND UPGRADES
  -----------------------------------*/
  move = () => {
    if (
      gameStates.current !== gameStates.getReady &&
      gameStates.current !== gameStates.gameOver &&
      gameStates.current !== gameStates.upgrade
    ) {
      this.detectLevelChange();
      this.detectRingCollision();
      this.detectMonsterBulletCollision();
      this.detectObstacleCollision();
      this.detectMonsterCollision();
      this.detectHealthPowerUp();

      if (this.health <= 0) {
        gameStates.current = gameStates.gameOver;
      }

      if (
        (keyPressed.ArrowUp || keyPressed.Up) &&
        (keyPressed.ArrowLeft || keyPressed.Left)
      ) {
        this.y -= this.dy;
        this.x -= this.dx;
      } else if (
        (keyPressed.ArrowUp || keyPressed.Up) &&
        (keyPressed.ArrowRight || keyPressed.Right)
      ) {
        this.y -= this.dy;
        this.x += this.dx;
      } else if (
        (keyPressed.ArrowDown || keyPressed.Down) &&
        (keyPressed.ArrowLeft || keyPressed.Left)
      ) {
        this.y += this.dy;
        this.x -= this.dx;
      } else if (
        (keyPressed.ArrowDown || keyPressed.Down) &&
        (keyPressed.ArrowRight || keyPressed.Right)
      ) {
        this.y += this.dy;
        this.x += this.dx;
      } else if (keyPressed.ArrowUp || keyPressed.Up) {
        this.y -= this.dy;
      } else if (keyPressed.ArrowDown || keyPressed.Down) {
        this.y += this.dy;
      } else if (keyPressed.ArrowLeft || keyPressed.Left) {
        this.x -= this.dx;
      } else if (keyPressed.ArrowRight || keyPressed.Right) {
        this.x += this.dx;
      } else {
        if (monsters.length > 0 && timer % 35 === 0) {
          this.shoot();
        }
      }
    }
  };

  detectHealthPowerUp = () => {
    if (this.powerUps.powerHeal) {
      if (this.health <= this.totalHealth) {
        this.health += Math.floor(0.4 * this.totalHealth);
        if (this.health > this.totalHealth) {
          this.health = this.totalHealth;
        }
        this.powerUps.powerHeal = false;
      }
    }

    if (this.powerUps.powerHpBoost) {
      this.totalHealth += Math.floor(0.2 * this.totalHealth);
      this.health += Math.floor(0.2 * this.totalHealth);
      this.powerUps.powerHpBoost = false;
    }
  };

  shoot = () => {
    let nearestMonster = this.getNearestMonster();
    PLAYER_SHOT_AUDIO.play();

    /*---------------------------
      STRAIGHT ONLY ARROW SHOT
    -----------------------------*/
    bullets.push(
      new Bullet(
        this.ctx,
        this.x,
        this.y,
        nearestMonster.x,
        nearestMonster.y,
        this.bulletDamagePower,
        this.bulletSpeed
      )
    );

    if (this.powerUps.powerMultiShot === true) {
      bullets.push(
        new Bullet(
          this.ctx,
          this.x - 10,
          this.y,
          nearestMonster.x,
          nearestMonster.y,
          0.9 * this.bulletDamagePower,
          0.85 * this.bulletSpeed
        )
      );
    }

    /*------------------------------
      STRAIGHT ONLY ARROW SHOT ENDS
    --------------------------------*/

    /*---------------------------
      SIDE ARROW SHOT
    -----------------------------*/
    if (this.powerUps.powerArrowSide) {
      // Shoot Left
      bullets.push(
        new Bullet(
          this.ctx,
          this.x + 10,
          this.y,
          RING_LEFT_BOUNDARY,
          this.y,
          this.bulletDamagePower,
          this.bulletSpeed,
          'left'
        )
      );

      // Shoot Right
      bullets.push(
        new Bullet(
          this.ctx,
          this.x + 10,
          this.y,
          RING_RIGHT_BOUNDARY,
          this.y,
          this.bulletDamagePower,
          this.bulletSpeed,
          'right'
        )
      );

      // Multiple Shot
      if (this.powerUps.powerMultiShot === true) {
        // Shoot Left
        bullets.push(
          new Bullet(
            this.ctx,
            this.x - 10,
            this.y,
            RING_LEFT_BOUNDARY,
            this.y,
            0.9 * this.bulletDamagePower,
            0.85 * this.bulletSpeed,
            'left'
          )
        );

        // Shoot Right
        bullets.push(
          new Bullet(
            this.ctx,
            this.x - 10,
            this.y,
            RING_RIGHT_BOUNDARY,
            this.y,
            0.9 * this.bulletDamagePower,
            0.85 * this.bulletSpeed,
            'right'
          )
        );
      }
    }

    /*---------------------------
      SIDE ARROW SHOT ENDS
    -----------------------------*/

    /*---------------------------
      DIAGONAL ARROW SHOT
    -----------------------------*/
    if (this.powerUps.powerArrowDiagonal) {
      // Shoot Left
      bullets.push(
        new Bullet(
          this.ctx,
          this.x + 10,
          this.y,
          nearestMonster.x - RING_WIDTH / 2,
          nearestMonster.y - RING_HEIGHT / 2,
          this.bulletDamagePower,
          this.bulletSpeed
        )
      );

      // Shoot Right
      bullets.push(
        new Bullet(
          this.ctx,
          this.x + 10,
          this.y,
          nearestMonster.x + RING_WIDTH / 2,
          nearestMonster.y + RING_HEIGHT / 2,
          this.bulletDamagePower,
          this.bulletSpeed
        )
      );

      // Multiple Shot
      if (this.powerUps.powerMultiShot === true) {
        // Shoot Left
        bullets.push(
          new Bullet(
            this.ctx,
            this.x - 10,
            this.y,
            nearestMonster.x - RING_WIDTH / 2,
            nearestMonster.y - RING_HEIGHT / 2,
            0.9 * this.bulletDamagePower,
            0.85 * this.bulletSpeed
          )
        );

        // Shoot Right
        bullets.push(
          new Bullet(
            this.ctx,
            this.x - 10,
            this.y,
            nearestMonster.x + RING_WIDTH / 2,
            nearestMonster.y + RING_HEIGHT / 2,
            0.9 * this.bulletDamagePower,
            0.85 * this.bulletSpeed
          )
        );
      }
    }

    /*---------------------------
      DIAGONAL ARROW SHOT ENDS
    -----------------------------*/

    /*---------------------------
      ARROW FRONT SHOT
    -----------------------------*/
    if (this.powerUps.powerArrowFront) {
      bullets.push(
        new Bullet(
          this.ctx,
          this.x + 20,
          this.y + 10,
          nearestMonster.x,
          nearestMonster.y,
          0.75 * this.bulletDamagePower,
          this.bulletSpeed
        )
      );

      if (this.powerUps.powerMultiShot === true) {
        bullets.push(
          new Bullet(
            this.ctx,
            this.x - 20,
            this.y - 10,
            nearestMonster.x,
            nearestMonster.y,
            0.9 * 0.75 * this.bulletDamagePower,
            0.85 * this.bulletSpeed
          )
        );
      }
    }

    /*---------------------------
      ARROW FRONT SHOT ENDS
    -----------------------------*/

    /*---------------------------
      ARROW BACK SHOT
    -----------------------------*/

    if (this.powerUps.powerArrowBack) {
      bullets.push(
        new Bullet(
          this.ctx,
          this.x + 20,
          this.y + 10,
          nearestMonster.x,
          nearestMonster.y,
          0.75 * this.bulletDamagePower,
          this.bulletSpeed,
          'back'
        )
      );

      if (this.powerUps.powerMultiShot === true) {
        bullets.push(
          new Bullet(
            this.ctx,
            this.x - 20,
            this.y - 10,
            nearestMonster.x,
            nearestMonster.y,
            0.9 * 0.75 * this.bulletDamagePower,
            0.85 * this.bulletSpeed,
            'back'
          )
        );
      }
    }
    /*---------------------------
      ARROW BACK SHOT ENDS
    -----------------------------*/
  };

  getNearestMonster = () => {
    let monstersDistance = [];
    monsters.forEach((monster) => {
      let distance = getDistance(this.x, this.y, monster.x, monster.y);
      monstersDistance.push({
        distance: distance,
        x: monster.x,
        y: monster.y,
      });
    });
    monstersDistance.sort((a, b) => a.distance - b.distance);
    return monstersDistance[0];
  };

  /*---------------------------------------------------------------
  DETECT CHANGE OF LEVEL WHEN HERO MOVES TOP AND CHANGE GAMESTATE
  -----------------------------------------------------------------*/
  detectLevelChange = () => {
    if (
      gameStates.current === gameStates.changingLevel &&
      this.y === RING_TOP_BOUNDARY &&
      this.x > CANVAS_WIDTH / 2 - 50 &&
      this.x < CANVAS_WIDTH / 2
    ) {
      this.x = CANVAS_WIDTH / 2 - 30;
      this.y = CANVAS_HEIGHT;
      gameStates.current = gameStates.nextLevel;
      LEVEL_UP_AUDIO.play();
    }
  };

  // Wall (Ring) Collision
  detectRingCollision = () => {
    // Left Wall
    if (this.x < RING_LEFT_BOUNDARY) {
      this.x = RING_LEFT_BOUNDARY;
    }

    // Right Wall
    if (this.x + this.width >= RING_RIGHT_BOUNDARY) {
      this.x = RING_RIGHT_BOUNDARY - this.width;
    }

    // Top Wall
    if (this.y < RING_TOP_BOUNDARY) {
      this.y = RING_TOP_BOUNDARY;
    }

    // Bottom Wall
    if (this.y + this.height >= CANVAS_HEIGHT) {
      this.y = CANVAS_HEIGHT - this.height;
    }
  };

  /*--------------------------
  OBSTACLE COLLISION DETECTION
  ----------------------------*/
  detectObstacleCollision = () => {
    obstacles.forEach((obstacle) => {
      if (
        // Collision with Bottom of Obstacle
        this.y <= obstacle.y + obstacle.height &&
        this.y >= obstacle.y &&
        this.x + this.width >= obstacle.x &&
        this.x <= obstacle.x + obstacle.width &&
        this.y + this.height > obstacle.y + obstacle.height
      ) {
        this.y = obstacle.y + obstacle.height;
        return;
      } else if (
        // Collision with Top of Obstacle
        this.y + this.height >= obstacle.y &&
        this.y + this.height <= obstacle.y + obstacle.height &&
        this.x + this.width >= obstacle.x &&
        this.x <= obstacle.x + obstacle.width &&
        this.y < obstacle.y
      ) {
        this.y = obstacle.y - this.height;
        return;
      } else if (
        // Collision with Left of Obstacle
        this.y + this.height >= obstacle.y &&
        this.y <= obstacle.y + obstacle.height &&
        this.x + this.width >= obstacle.x &&
        this.x < obstacle.x
      ) {
        this.x = obstacle.x - this.width;
        return;
      } else if (
        // Collision with Right of Obstacle
        this.y + this.height >= obstacle.y &&
        this.y <= obstacle.y + obstacle.height &&
        this.x <= obstacle.x + obstacle.width &&
        this.x + this.width > obstacle.x + obstacle.width
      ) {
        this.x = obstacle.x + obstacle.width;
        return;
      }
    });
  };

  /*---------------------------------
    DETECT COLLISION WITH MONSTER
  ----------------------------------- */
  detectMonsterCollision = () => {
    monsters.forEach((monster) => {
      if (
        this.x < monster.x + monster.width &&
        this.x + this.width > monster.x &&
        this.y < monster.y + monster.height &&
        this.y + this.height > monster.y
      ) {
        if (timer % 30 === 0) {
          this.health -= 2;
        }
      }
    });
  };

  /*---------------------------------
    DETECT COLLISION WITH MONSTER BULLET
  ----------------------------------- */
  detectMonsterBulletCollision = () => {
    monsterBullets.forEach((bullet) => {
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

  // Remove Monster Bullet on Collision
  clearBullet(bulletToClear) {
    monsterBullets = monsterBullets.filter(
      (bullet) =>
        !(bulletToClear.x === bullet.x && bulletToClear.y === bullet.y)
    );
  }

  reset = () => {
    this.health = this.totalHealth;
    this.x = CANVAS_WIDTH / 2 - 25;
    this.y = CANVAS_HEIGHT - 50;
    this.experience = 0;
    this.level = 1;

    this.powerUps = {
      powerMultiShot: false,
      powerArrowSide: false,
      powerArrowDiagonal: false,
      powerArrowFront: false,
      powerArrowBack: false,
    };
  };
}
