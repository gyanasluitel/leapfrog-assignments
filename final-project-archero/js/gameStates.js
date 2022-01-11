// Get Ready
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

// Game Over
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

// Changing Level
class ChangingLevel {
  constructor(ctx) {
    this.ctx = ctx;
  }

  draw = () => {
    if (gameStates.current === gameStates.changingLevel) {
      this.ctx.fillStyle = 'white';
      this.ctx.font = 'bold 20px Arial';
      this.ctx.fillText('Please Wait', 200, 200);
    }
  };
}

class NextLevel {
  constructor(ctx) {
    this.ctx = ctx;
  }

  update = () => {
    gameStates.currentLevel++;
    gameStates.current = gameStates.gameRunning;
  };
}

// Game Complete
class GameComplete {
  constructor(ctx) {
    this.ctx = ctx;
    this.playButtonX = CANVAS_WIDTH / 3;
    this.playButtonY = CANVAS_HEIGHT / 2;
    this.playButtonWidth = 150;
    this.playButtonHeight = 50;
  }

  draw = () => {
    if (gameStates.current === gameStates.gameComplete) {
      this.ctx.drawImage(gameStartBgImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      this.ctx.drawImage(
        homeButtonImage,
        this.playButtonX,
        this.playButtonY,
        this.playButtonWidth,
        this.playButtonHeight
      );

      this.ctx.fillStyle = 'white';
      this.ctx.font = 'bold 20px Arial';
      this.ctx.fillText('Congratulations!', CANVAS_WIDTH / 3 - 5, 200);
      this.ctx.fillText('You have won the game!', CANVAS_WIDTH / 4, 250);
    }
  };
}
