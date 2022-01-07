class GetReady {
  constructor(ctx) {
    this.ctx = ctx;
  }

  draw = () => {
    if (gameStates.current === gameStates.getReady) {
      this.ctx.drawImage(gameStartBgImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      this.ctx.drawImage(
        gameStartHeroImage,
        0,
        CANVAS_HEIGHT / 2,
        CANVAS_WIDTH,
        CANVAS_HEIGHT / 2
      );
    }
  };
}
