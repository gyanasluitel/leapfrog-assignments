class Obstacle {
  constructor(ctx, obstacle) {
    this.ctx = ctx;
    this.obstacleImage = obstacle.image;
    this.x = obstacle.x;
    this.y = obstacle.y;
    this.width = 30;
    this.height = 30;
  }

  draw = () => {
    this.ctx.drawImage(
      this.obstacleImage,
      this.x,
      this.y,
      this.width,
      this.height
    );
    // console.log('obstacle');
  };
}
