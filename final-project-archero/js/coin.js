class Coin {
  constructor(ctx, monsterX, monsterY) {
    this.ctx = ctx;
    this.x = monsterX;
    this.y = monsterY;
    this.width = 30;
    this.height = 30;
  }

  draw = () => {
    this.ctx.drawImage(coinImage, this.x, this.y, this.width, this.height);
  };
}
