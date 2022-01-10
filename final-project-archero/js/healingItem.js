class HealingItem {
  constructor(ctx, monster, hero) {
    this.ctx = ctx;
    this.monster = monster;
    this.x = this.monster.x;
    this.y = this.monster.y;
    this.width = 20;
    this.height = 20;
    this.hero = hero;
    this.speed = 10;
  }

  draw = () => {
    this.ctx.drawImage(
      healingItemImage,
      this.x - 10,
      this.y - 10,
      this.width,
      this.height
    );
  };

  move = () => {
    if (monsters.length === 0) {
      if (this.x < this.hero.x) {
        this.x += this.speed;
      } else if (this.x > this.hero.x) {
        this.x -= this.speed;
      }
      if (this.y < this.hero.y) {
        this.y += this.speed;
      } else if (this.y > this.hero.y) {
        this.y -= this.speed;
      }

      this.detectCollision();
    }
  };

  detectCollision = () => {
    if (
      //Rectangle Collision Detection
      this.x < this.hero.x + this.hero.width &&
      this.x + this.width > this.hero.x &&
      this.y < this.hero.y + this.hero.height &&
      this.height + this.y > this.hero.y
    ) {
      this.clear(this);
    }
  };

  clear = (healingItemToClear) => {
    healingItems = healingItems.filter(
      (healingItem) =>
        !(
          healingItemToClear.x === healingItem.x &&
          healingItemToClear.y === healingItem.y
        )
    );
    if (this.hero.health > 0 && this.hero.health < 100) {
      this.hero.health += 10;
    }
    //   console.log(coins);
  };
}
