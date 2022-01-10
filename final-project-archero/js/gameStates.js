class GetReady {
  constructor(ctx) {
    this.ctx = ctx;
    this.playButtonX = CANVAS_WIDTH / 3;
    this.playButtonY = CANVAS_HEIGHT / 4;
    this.playButtonWidth = 150;
    this.playButtonHeight = 50;
  }

  draw = () => {
    if (gameStates.current === gameStates.getReady) {
      // Draw Game Start Background Image
      this.ctx.drawImage(gameStartBgImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Draw Game Start Hero Image
      this.ctx.drawImage(
        gameStartHeroImage,
        0,
        CANVAS_HEIGHT / 2,
        CANVAS_WIDTH,
        CANVAS_HEIGHT / 2
      );

      // Draw Play Button
      this.ctx.drawImage(
        playButtonImage,
        this.playButtonX,
        this.playButtonY,
        this.playButtonWidth,
        this.playButtonHeight
      );
    }
  };
}

class GameOver {
  constructor(ctx) {
    this.ctx = ctx;
    this.playButtonX = CANVAS_WIDTH / 3;
    this.playButtonY = CANVAS_HEIGHT / 4;
    this.playButtonWidth = 150;
    this.playButtonHeight = 50;
  }

  draw = () => {
    if (gameStates.current === gameStates.gameOver) {
      // Draw Game Start Background Image
      this.ctx.drawImage(gameStartBgImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Draw Play Button
      this.ctx.drawImage(
        homeButtonImage,
        this.playButtonX,
        this.playButtonY,
        this.playButtonWidth,
        this.playButtonHeight
      );
    }
  };
}
