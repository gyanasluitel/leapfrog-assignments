class Score {
  constructor(ctx) {
    this.ctx = ctx;
    this.coinsCollectedPerGame = 0;
    this.totalCoinsCollected = localStorage.getItem('arcHeroScore') || 0;
    this.scoreBoardWidth = 50;
    this.scoreBoardHeight = 20;

    this.coinWidth = 20;
    this.coinHeight = 20;

    this.x = CANVAS_WIDTH - 60;
    this.y = 20;
  }

  draw = () => {
    if (gameStates.current === gameStates.gameRunning) {
      this.ctx.strokeStyle = 'gray';

      // Draw Score Board
      this.ctx.strokeRect(
        this.x,
        this.y,
        this.scoreBoardWidth,
        this.scoreBoardHeight
      );

      // Draw Coin Image
      this.ctx.drawImage(
        coinImage,
        this.x,
        this.y,
        this.coinWidth,
        this.coinHeight
      );

      // Draw Score
      this.ctx.fillStyle = 'white';
      this.ctx.font = 'bold 20px Arial';
      this.ctx.fillText(this.totalCoinsCollected, this.x + 30, this.y + 17);
    }
  };
}
