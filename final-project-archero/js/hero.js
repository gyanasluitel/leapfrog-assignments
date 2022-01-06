class Hero {
  constructor(ctx, monster) {
    this.ctx = ctx;
    this.width = 50;
    this.height = 50;
    this.x = CANVAS_WIDTH / 2 - 25;
    this.y = CANVAS_HEIGHT - 50;
    this.dx = 5;
    this.dy = 5;
    // this.speed = 3;
    this.health = 100;

    // this.bullets = [];

    this.monster = monster;
  }

  // Draw Hero Sprite
  draw = () => {
    this.ctx.drawImage(heroImage, this.x, this.y, this.width, this.height);
    // console.log('hero');
    // if (this.bullets.length !== 0) {
    //   this.bullets.forEach((bullet) => bullet.draw());
    // }
  };

  detectBoxCollision = () => {
    // LEFT WALL
    if (this.x < 0) {
      this.x = 0;
    }

    // RIGHT WALL
    if (this.x + this.width >= CANVAS_WIDTH) {
      this.x = CANVAS_WIDTH - this.width;
    }

    // TOP WALL
    if (this.y < 0) {
      this.y = 0;
    }

    // BOTTOM WALL
    if (this.y + this.height >= CANVAS_HEIGHT) {
      this.y = CANVAS_HEIGHT - this.height;
    }
  };

  move = () => {
    this.detectBoxCollision();

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
      if (timer % 50 === 0) {
        bullets.push(
          new Bullet(this.ctx, this.x, this.y, this.monster.x, this.monster.y)
        );
      }
      // console.log(bullets);
    }

    // if (this.bullets.length !== 0) {
    //   this.bullets.forEach((bullet) => bullet.move());
    // }

    // bullets.forEach((bullet) => bullet.move());
  };
}

document.addEventListener('keydown', (event) => {
  //   console.log(event.key);
  event.preventDefault();
  keyPressed[event.key] = true;
});

document.addEventListener('keyup', (event) => {
  //   console.log(event.key);
  event.preventDefault();
  keyPressed[event.key] = false;
  //   console.log(keyPressed);
});

hero = new Hero();
