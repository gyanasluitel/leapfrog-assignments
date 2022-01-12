class Background {
  constructor(ctx) {
    this.ctx = ctx;

    this.gateLevelImageWidth = 50;
    this.gateLevelImageHeight = 50;
    this.gateLevelImageX = CANVAS_WIDTH / 2 - 22;
    this.gateLevelImageY = 60;

    this.gateImageWidth = 60;
    this.gateImageHeight = 50;
    this.gateImageX = CANVAS_WIDTH / 2 - 28;
    this.gateImageY = 45 + 50;
  }

  draw = () => {
    if (
      gameStates.current !== gameStates.getReady &&
      gameStates.current !== gameStates.gameOver &&
      gameStates.current !== gameStates.upgrade
    ) {
      this.ctx.drawImage(blackBackgroundImage, 0, 0, CANVAS_WIDTH, 50);
      this.ctx.drawImage(backgroundImage, 0, 50, CANVAS_WIDTH, CANVAS_HEIGHT);

      const gateImage =
        gameStates.current === gameStates.changingLevel
          ? gateOpenImage
          : gateCloseImage;
      // Draw Gates
      this.ctx.drawImage(
        gateImage,
        this.gateImageX,
        this.gateImageY,
        this.gateImageWidth,
        this.gateImageHeight
      );

      // Draw Level Indicator Gate
      this.ctx.drawImage(
        gateLevelImage,
        this.gateLevelImageX,
        this.gateLevelImageY,
        this.gateLevelImageWidth,
        this.gateLevelImageHeight
      );
      // this.ctx.fillstyle = 'white';
      // this.ctx.fillRect(CANVAS_WIDTH / 2 - 30, 200, 10, 100);
      // this.ctx.fillRect(CANVAS_WIDTH / 2 + 30, 200, 10, 100);
    }
  };
}
