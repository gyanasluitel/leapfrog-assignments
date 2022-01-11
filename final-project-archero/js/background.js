class Background {
  constructor(ctx) {
    this.ctx = ctx;

    this.gateLevelImageWidth = 50;
    this.gateLevelImageHeight = 50;
    this.gateLevelImageX = CANVAS_WIDTH / 2 - 22;
    this.gateLevelImageY = 10;
  }

  draw = () => {
    if (
      gameStates.current !== gameStates.getReady &&
      gameStates.current !== gameStates.gameOver
    ) {
      this.ctx.drawImage(backgroundImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Draw Level Indicator Gate
      this.ctx.drawImage(
        gateLevelImage,
        this.gateLevelImageX,
        this.gateLevelImageY,
        this.gateLevelImageWidth,
        this.gateLevelImageHeight
      );
    }
  };
}
