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
      powerArrowFront: powerArrowFrontImage,
      powerArrowBack: powerArrowBackImage,
      powerBouncyWall: powerBouncyWallImage,
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

    // The Fisher-Yates algorithm for shuffling array
    const shuffledArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    };

    this.powerUpOptions = shuffledArray(availablePowerUpOptions).slice(0, 3);
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

  reset = () => {
    this.powerUpOptions = [];
  };
}

class Upgrade {
  constructor(ctx) {
    this.ctx = ctx;
    this.backButtonX = 30;
    this.backButtonY = 30;
    this.backButtonWidth = 50;
    this.backButtonHeight = 50;

    this.heroWidth = 80;
    this.heroHeight = 80;
    this.heroX = 20;
    this.heroY = CANVAS_HEIGHT / 3;

    this.healthWidth = 30;
    this.healthHeight = 30;
    this.healthX = 120;
    this.healthY = CANVAS_HEIGHT / 3;

    this.damageWidth = 30;
    this.damageHeight = 30;
    this.damageX = 120;
    this.damageY = CANVAS_HEIGHT / 3 + 40;

    this.upgradeHealthX = 30;
    this.upgradeHealthY = CANVAS_HEIGHT / 3 + 100;
    this.upgradeHealthWidth = 150;
    this.upgradeHealthHeight = 50;

    this.upgradeDamageX = CANVAS_WIDTH - 180;
    this.upgradeDamageY = CANVAS_HEIGHT / 3 + 100;
    this.upgradeDamageWidth = 150;
    this.upgradeDamageHeight = 50;
  }

  draw = (hero) => {
    if (gameStates.current === gameStates.upgrade) {
      // Draw Background
      this.ctx.drawImage(
        upgradeBackgroundImage,
        0,
        0,
        CANVAS_WIDTH,
        CANVAS_HEIGHT
      );

      // Draw Back Button
      this.ctx.drawImage(
        backButtonImage,
        this.backButtonX,
        this.backButtonY,
        this.backButtonWidth,
        this.backButtonHeight
      );

      // Draw Hero Image
      this.ctx.drawImage(
        heroImage,
        this.heroX,
        this.heroY,
        this.heroWidth,
        this.heroHeight
      );

      // Health Indicator
      this.ctx.drawImage(
        healthIndicatorImage,
        this.healthX,
        this.healthY,
        this.healthWidth,
        this.healthHeight
      );

      this.ctx.fillStyle = 'white';
      this.ctx.font = 'bold 18px Arial';
      this.ctx.fillText(
        hero.totalHealth,
        this.healthX + this.healthWidth + 2,
        this.healthY + this.healthHeight / 2 + 5
      );

      // Damage Indicator
      this.ctx.drawImage(
        weaponImage,
        this.damageX,
        this.damageY,
        this.damageWidth,
        this.damageHeight
      );

      // Draw Upgrade Health Button
      this.ctx.drawImage(
        upgradeHealthButtonImage,
        this.upgradeHealthX,
        this.upgradeHealthY,
        this.upgradeHealthWidth,
        this.upgradeHealthHeight
      );

      this.ctx.drawImage(
        healthIndicatorImage,
        this.upgradeHealthX + this.upgradeHealthWidth - 25,
        this.upgradeHealthY + this.upgradeHealthHeight / 2 - 10,
        this.healthWidth - 10,
        this.healthHeight - 10
      );

      // Coin Image
      this.ctx.drawImage(
        coinImage,
        this.upgradeHealthX + this.upgradeHealthWidth / 2 - 25,
        this.upgradeHealthY + this.upgradeHealthHeight + 5,
        30,
        30
      );

      // No of Coins Required
      this.ctx.fillStyle = 'white';
      this.ctx.font = 'bold 18px Arial';
      this.ctx.fillText(
        hero.totalHealth / 25,
        this.upgradeHealthX + this.upgradeHealthWidth / 2 + 5,
        this.upgradeHealthY + this.upgradeHealthHeight + 25
      );

      // Draw Upgrade Damage Button
      this.ctx.drawImage(
        upgradeDamageButtonImage,
        this.upgradeDamageX,
        this.upgradeDamageY,
        this.upgradeDamageWidth,
        this.upgradeDamageHeight
      );

      this.ctx.drawImage(
        weaponImage,
        this.upgradeDamageX + this.upgradeDamageWidth - 25,
        this.upgradeDamageY + this.upgradeDamageHeight / 2 - 10,
        this.damageWidth - 10,
        this.damageHeight - 10
      );

      this.ctx.fillStyle = 'white';
      this.ctx.font = 'bold 18px Arial';
      this.ctx.fillText(
        hero.bulletDamagePower,
        this.damageX + this.damageWidth + 2,
        this.damageY + this.damageHeight / 2 + 5
      );

      // Coin Image
      this.ctx.drawImage(
        coinImage,
        this.upgradeDamageX + this.upgradeDamageWidth / 2 - 25,
        this.upgradeDamageY + this.upgradeDamageHeight + 5,
        30,
        30
      );

      // No of Coins Required
      this.ctx.fillStyle = 'white';
      this.ctx.font = 'bold 18px Arial';
      this.ctx.fillText(
        20,
        this.upgradeDamageX + this.upgradeDamageWidth / 2 + 5,
        this.upgradeDamageY + this.upgradeDamageHeight + 25
      );
    }
  };
}
