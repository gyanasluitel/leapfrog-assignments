class Hero {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 50;
    this.height = 50;
    this.x = CANVAS_WIDTH / 2 - 25;
    this.y = CANVAS_HEIGHT - 50;
    this.dx = 5;
    this.dy = 5;
    // this.speed = 3;
    this.health = 100;
    this.previousX = this.x;
    this.previousY = this.y;
  }

  // Draw Hero Sprite
  draw = () => {
    if (
      gameStates.current !== gameStates.getReady &&
      gameStates.current !== gameStates.gameOver
    ) {
      this.ctx.drawImage(heroImage, this.x, this.y, this.width, this.height);
      this.drawHeroHealthBar();
    }
  };

  drawHeroHealthBar = () => {
    this.ctx.strokeStyle = 'black';
    this.ctx.strokeRect(this.x, this.y - 20, this.width, 10);
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.x, this.y - 20, this.generateHealthPercentage(), 10);
  };

  generateHealthPercentage = () => {
    return (this.health * this.width) / 100;
  };

  move = () => {
    if (
      gameStates.current !== gameStates.getReady &&
      gameStates.current !== gameStates.gameOver
    ) {
      this.previousX = this.x;
      this.previousY = this.y;
      this.detectLevelChange();
      this.detectBoxCollision();
      this.detectMonsterBulletCollision();
      this.detectObstacleCollision();

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
        if (monsters.length > 0 && timer % 50 === 0) {
          this.shoot();
        }
      }
    }
  };

  shoot = () => {
    let nearestMonster = this.getNearestMonster();
    bullets.push(
      new Bullet(this.ctx, this.x, this.y, nearestMonster.x, nearestMonster.y)
    );
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

  detectLevelChange = () => {
    if (
      gameStates.current === gameStates.changingLevel &&
      this.y === RING_TOP_BOUNDARY
    ) {
      this.x = CANVAS_WIDTH / 2 - 25;
      this.y = CANVAS_HEIGHT - 50;
      gameStates.current = gameStates.nextLevel;
    }
  };
  // Wall-Box Collision
  detectBoxCollision = () => {
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

  // Obstacle Collision
  detectObstacleCollision = () => {
    obstacles.forEach((obstacle) => {
      if (
        this.x < obstacle.x + obstacle.width &&
        this.x + this.width > obstacle.x &&
        this.y < obstacle.y + obstacle.height &&
        this.y + this.height > obstacle.y &&
        this.previousY < obstacle.y
      ) {
        this.y = obstacle.y - this.height;
      }
      if (
        this.x < obstacle.x + obstacle.width &&
        this.x + this.width > obstacle.x &&
        this.y < obstacle.y + obstacle.height &&
        this.y + this.height > obstacle.y &&
        this.previousY + this.height > obstacle.y
      ) {
        this.y = obstacle.y + obstacle.height;
      }
      if (
        this.x < obstacle.x + obstacle.width &&
        this.x + this.width > obstacle.x &&
        this.y < obstacle.y + obstacle.height &&
        this.y + this.height > obstacle.y &&
        this.previousX < obstacle.x
      ) {
        this.x = obstacle.x - this.width;
        this.y = this.y + 50;
      }
      if (
        this.x < obstacle.x + obstacle.width &&
        this.x + this.width > obstacle.x &&
        this.y < obstacle.y + obstacle.height &&
        this.y + this.height > obstacle.y &&
        this.previousX + this.width > obstacle.x
      ) {
        this.x = obstacle.x + obstacle.width;
        this.y = this.y + 50;
      }
    });
  };

  // Detect Collision with Monster Bullet
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
        // console.log('Hero health: ', this.health);
        // Remove Bullet on Collision
        this.clearBullet(bullet);
        if (this.health === 0) {
          gameStates.current = gameStates.gameOver;
          // console.log('hero killed');
        }
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
    this.health = 100;
    this.x = CANVAS_WIDTH / 2 - 25;
    this.y = CANVAS_HEIGHT - 50;
  };
}
