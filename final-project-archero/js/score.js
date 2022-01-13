class Score {
  constructor(ctx) {
    this.ctx = ctx;
    this.coinsCollectedPerGame = 0;
    this.totalCoinsCollected = localStorage.getItem('arcHeroScore') || 0;
    this.scoreBoardWidth = 60;
    this.scoreBoardHeight = 20;

    this.coinWidth = 20;
    this.coinHeight = 20;

    this.x = CANVAS_WIDTH - 70;
    this.y = 20;
  }

  draw = () => {
    if (
      gameStates.current !== gameStates.getReady &&
      gameStates.current !== gameStates.gameOver
    ) {
      this.drawCoinScore();
      if (gameStates.current !== gameStates.upgrade) this.drawCurrentLevel();
    }
  };

  drawCoinScore = () => {
    // this.ctx.strokeStyle = 'gray';

    // // Draw Score Board
    // this.ctx.strokeRect(
    //   this.x,
    //   this.y,
    //   this.scoreBoardWidth,
    //   this.scoreBoardHeight
    // );
    this.ctx.drawImage(
      coinImage,
      this.x,
      this.y,
      this.coinWidth,
      this.coinHeight
    );

    // Draw Score
    this.ctx.fillStyle = 'white';
    this.ctx.font = 'bold 18px Arial';
    this.ctx.fillText(this.totalCoinsCollected, this.x + 20, this.y + 15);
  };

  drawCurrentLevel = () => {
    this.ctx.fill = 'white';
    this.ctx.font = 'bold 25px Arial';
    this.ctx.fillText(gameStates.currentLevel, CANVAS_WIDTH / 2 - 5, 95);
  };
}
