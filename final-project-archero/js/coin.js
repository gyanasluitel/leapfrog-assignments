class Coin {
  constructor(ctx, monster, hero) {
    this.ctx = ctx;
    this.monster = monster;
    this.x = this.monster.x;
    this.y = this.monster.y;
    this.width = 30;
    this.height = 30;
    this.hero = hero;
    this.speed = 10;
  }

  draw = () => {
    this.ctx.drawImage(coinImage, this.x, this.y, this.width, this.height);
  };

  move = (score) => {
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

      this.detectCoinCollision(score);
    }
  };

  detectCoinCollision = (score) => {
    if (
      //Rectangle Collision Detection
      this.x < this.hero.x + this.hero.width &&
      this.x + this.width > this.hero.x &&
      this.y < this.hero.y + this.hero.height &&
      this.height + this.y > this.hero.y
    ) {
      this.clearCoin(this, score);
    }
  };

  clearCoin = (coinToClear, score) => {
    coins = coins.filter(
      (coin) => !(coinToClear.x === coin.x && coinToClear.y === coin.y)
    );
    console.log(coins);
    score.coinsCollectedPerGame++;
    score.totalCoinsCollected++;
    localStorage.setItem('arcHeroScore', score.totalCoinsCollected);
    // console.log(score.coinsCollected);
  };
}
