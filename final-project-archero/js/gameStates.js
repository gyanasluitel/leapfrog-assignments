// Get Ready
class GetReady {
  constructor(ctx) {
    this.ctx = ctx;
    this.playButtonX = CANVAS_WIDTH / 3;
    this.playButtonY = CANVAS_HEIGHT / 4;
    this.playButtonWidth = 150;
    this.playButtonHeight = 50;

    this.upgradeButtonX = CANVAS_WIDTH / 2 - 20;
    this.upgradeButtonY = CANVAS_HEIGHT / 3 + 30;
    this.upgradeButtonWidth = 50;
    this.upgradeButtonHeight = 50;
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

      // Upgrade Button
      this.ctx.drawImage(
        upgradeButtonImage,
        this.upgradeButtonX,
        this.upgradeButtonY,
        this.upgradeButtonWidth,
        this.upgradeButtonHeight
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

class SelectPowerUp {
  constructor(ctx) {
    this.ctx = ctx;
    this.powerUpOptions = [];

    this.powerUps = {
      powerMultiShot: powerMultiShotImage,
      powerArrowSide: powerArrowSideImage,
      powerArrowDiagonal: powerArrowDiagonalImage,
    };

    this.powerUpButtonWidth = 60;
    this.powerUpButtonHeight = 60;
    this.powerUpButtonY = 280;

    this.powerUpButtonOneX = 50;
    this.powerUpButtonTwoX = 180;
    this.powerUpButtonThreeX = 300;
  }

  getPowerUpOptions = (hero) => {
    let availablePowerUpOptions = [];

    for (let key of Object.keys(hero.powerUps)) {
      availablePowerUpOptions.push(key);
    }

    this.powerUpOptions = availablePowerUpOptions;
    // console.log(this.powerUpOptions);
  };

  draw = () => {
    if (gameStates.current === gameStates.selectPowerUp) {
      this.ctx.fillStyle = 'white';
      this.ctx.font = 'bold 20px Arial';
      this.ctx.fillText('Select Power Up!', CANVAS_WIDTH / 4, 250);

      this.ctx.drawImage(
        this.powerUps[this.powerUpOptions[0]],
        this.powerUpButtonOneX,
        this.powerUpButtonY,
        this.powerUpButtonWidth,
        this.powerUpButtonHeight
      );

      this.ctx.drawImage(
        this.powerUps[this.powerUpOptions[1]],
        this.powerUpButtonTwoX,
        this.powerUpButtonY,
        this.powerUpButtonWidth,
        this.powerUpButtonHeight
      );

      this.ctx.drawImage(
        this.powerUps[this.powerUpOptions[2]],
        this.powerUpButtonThreeX,
        this.powerUpButtonY,
        this.powerUpButtonWidth,
        this.powerUpButtonHeight
      );
    }
  };
}
