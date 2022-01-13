class ArcheroGame {
  constructor(canvasName) {
    this.canvas = document.getElementById(canvasName);
    this.canvas.width = CANVAS_WIDTH;
    this.canvas.height = CANVAS_HEIGHT;
    // this.canvas.style.margin = '0 50% 0 25%';
    this.ctx = canvas.getContext('2d');
    this.canvas.style =
      'position:absolute; left: 50%; width: 400px; margin-left: -200px;';
    this.canvas.style.border = '2px solid black';

    this.handleCanvasEventListener();

    // Game Background during Gameplay
    this.background = new Background(this.ctx);

    this.hero = new Hero(this.ctx);
    this.score = new Score(this.ctx);
    this.levels = new Levels();

    // Game States
    this.getReady = new GetReady(this.ctx);
    this.gameOver = new GameOver(this.ctx);
    this.changingLevel = new ChangingLevel(this.ctx);
    this.nextLevel = new NextLevel(this.ctx);
    this.gameComplete = new GameComplete(ctx);
    this.selectPowerUp = new SelectPowerUp(ctx);
    this.upgrade = new Upgrade(ctx);
  }

  generateMonsters = () => {
    let monsterArray = this.levels.level[gameStates.currentLevel].monsters;
    for (let i = 0; i < monsterArray.length; i++) {
      monsters.push(new Monster(this.ctx, monsterArray[i]));
    }
  };

  generateObstacles = () => {
    let obstacleArray = this.levels.level[gameStates.currentLevel].obstacles;
    for (let i = 0; i < obstacleArray.length; i++) {
      obstacles.push(new Obstacle(this.ctx, obstacleArray[i]));
    }
  };

  generateLevel = () => {
    if (this.levels.level[gameStates.currentLevel] === undefined) {
      gameStates.current = gameStates.gameComplete;
    } else {
      this.generateMonsters();
      this.generateObstacles();
    }
  };

  draw = () => {
    this.ctx.fillStyle = 'lightblue';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.getReady.draw();
    this.background.draw();
    this.upgrade.draw(this.hero);

    this.hero.draw(this.selectPowerUp);
    monsters.forEach((monster) => monster.draw());
    bullets.forEach((bullet) => bullet.draw());
    obstacles.forEach((obstacle) => obstacle.draw());

    monsterBullets.forEach((bullet) => bullet.draw());
    coins.forEach((coin) => coin.draw());
    healingItems.forEach((healingItem) => healingItem.draw());
    this.gameOver.draw();
    this.score.draw(this.hero);
    this.gameComplete.draw();
    this.selectPowerUp.draw();
  };

  update = () => {
    this.hero.move();
    monsters.forEach((monster) => monster.move(this.hero));
    bullets.forEach((bullet) => bullet.move(this.hero));
    monsterBullets.forEach((bullet) => bullet.move());
    coins.forEach((coin) => coin.move(this.score));
    healingItems.forEach((healingItem) => healingItem.move(this.hero));
    if (
      monsters.length === 0 &&
      gameStates.current === gameStates.gameRunning
    ) {
      gameStates.current = gameStates.changingLevel;
    }

    if (gameStates.current === gameStates.nextLevel) {
      obstacles = [];
      this.nextLevel.update();
      this.generateLevel();
    }
  };

  reset = () => {
    this.hero.reset();
    monsters = [];
    obstacles = [];
    monsterBullets = [];
    bullets = [];
    healingItems = [];
    coins = [];
    gameStates.currentLevel = 1;
  };

  animate = () => {
    this.update();
    this.draw();
    timer++;
    window.requestAnimationFrame(this.animate);
  };

  handleCanvasEventListener = () => {
    this.canvas.addEventListener('click', (event) => {
      let rect = this.canvas.getBoundingClientRect();
      let clickX = event.clientX - rect.left;
      let clickY = event.clientY - rect.top;

      switch (gameStates.current) {
        case gameStates.getReady:
          // Click on Play Button
          if (
            clickX >= this.getReady.playButtonX &&
            clickX <=
              this.getReady.playButtonX + this.getReady.playButtonWidth &&
            clickY >= this.getReady.playButtonY &&
            clickY <= this.getReady.playButtonY + this.getReady.playButtonHeight
          ) {
            gameStates.current = gameStates.gameRunning;
            this.generateLevel();
          }

          // Click on Upgrade Button
          if (
            clickX >= this.getReady.upgradeButtonX &&
            clickX <=
              this.getReady.upgradeButtonX + this.getReady.upgradeButtonWidth &&
            clickY >= this.getReady.upgradeButtonY &&
            clickY <=
              this.getReady.upgradeButtonY + this.getReady.upgradeButtonHeight
          ) {
            gameStates.current = gameStates.upgrade;
          }
          break;

        case gameStates.upgrade:
          // Click on Back Button
          if (
            clickX >= this.upgrade.backButtonX &&
            clickX <= this.upgrade.backButtonX + this.upgrade.backButtonWidth &&
            clickY >= this.upgrade.backButtonY &&
            clickY <= this.upgrade.backButtonY + this.upgrade.backButtonHeight
          ) {
            this.reset();
            gameStates.current = gameStates.getReady;
          }

          // Click on Upgrade Health Button
          if (
            clickX >= this.upgrade.upgradeHealthX &&
            clickX <=
              this.upgrade.upgradeHealthX + this.upgrade.upgradeHealthWidth &&
            clickY >= this.upgrade.upgradeHealthY &&
            clickY <=
              this.upgrade.upgradeHealthY + this.upgrade.upgradeHealthHeight
          ) {
            if (this.score.totalCoinsCollected >= this.hero.totalHealth / 25) {
              this.score.totalCoinsCollected -= this.hero.totalHealth / 25;
              this.hero.totalHealth += 25;
              localStorage.setItem(
                'arcHeroScore',
                this.score.totalCoinsCollected
              );
              localStorage.setItem('arcHeroHealth', this.hero.totalHealth);
            }
          }

          // Click on Upgrade Damage Button
          if (
            clickX >= this.upgrade.upgradeDamageX &&
            clickX <=
              this.upgrade.upgradeDamageX + this.upgrade.upgradeDamageWidth &&
            clickY >= this.upgrade.upgradeDamageY &&
            clickY <=
              this.upgrade.upgradeDamageY + this.upgrade.upgradeDamageHeight
          ) {
            if (this.score.totalCoinsCollected >= 20) {
              this.score.totalCoinsCollected -= 20;
              this.hero.bulletDamagePower += 5;
              localStorage.setItem(
                'arcHeroScore',
                this.score.totalCoinsCollected
              );
              localStorage.setItem(
                'arcHeroBulletDamagePower',
                this.hero.bulletDamagePower
              );
            }
          }

          break;

        case gameStates.gameComplete:
          if (
            clickX >= this.gameComplete.playButtonX &&
            clickX <=
              this.gameComplete.playButtonX +
                this.gameComplete.playButtonWidth &&
            clickY >= this.gameComplete.playButtonY &&
            clickY <=
              this.gameComplete.playButtonY + this.gameComplete.playButtonHeight
          ) {
            gameStates.current = gameStates.getReady;
            this.reset();
          }

          break;

        case gameStates.selectPowerUp:
          // POWER UP OPTION 1
          if (
            clickX >= this.selectPowerUp.powerUpButtonOneX &&
            clickX <=
              this.selectPowerUp.powerUpButtonOneX +
                this.selectPowerUp.powerUpButtonWidth &&
            clickY >= this.selectPowerUp.powerUpButtonY &&
            clickY <=
              this.selectPowerUp.powerUpButtonY +
                this.selectPowerUp.powerUpButtonHeight
          ) {
            this.hero.powerUps[this.selectPowerUp.powerUpOptions[0]] = true;
            gameStates.current = gameStates.gameRunning;
          }

          // POWER UP OPTION 2
          if (
            clickX >= this.selectPowerUp.powerUpButtonTwoX &&
            clickX <=
              this.selectPowerUp.powerUpButtonTwoX +
                this.selectPowerUp.powerUpButtonWidth &&
            clickY >= this.selectPowerUp.powerUpButtonY &&
            clickY <=
              this.selectPowerUp.powerUpButtonY +
                this.selectPowerUp.powerUpButtonHeight
          ) {
            this.hero.powerUps[this.selectPowerUp.powerUpOptions[1]] = true;
            gameStates.current = gameStates.gameRunning;
          }

          // POWER UP OPTION 3
          if (
            clickX >= this.selectPowerUp.powerUpButtonThreeX &&
            clickX <=
              this.selectPowerUp.powerUpButtonThreeX +
                this.selectPowerUp.powerUpButtonWidth &&
            clickY >= this.selectPowerUp.powerUpButtonY &&
            clickY <=
              this.selectPowerUp.powerUpButtonY +
                this.selectPowerUp.powerUpButtonHeight
          ) {
            this.hero.powerUps[this.selectPowerUp.powerUpOptions[2]] = true;
            gameStates.current = gameStates.gameRunning;
          }
          break;

        case gameStates.gameOver:
          if (
            clickX >= this.gameOver.playButtonX &&
            clickX <=
              this.gameOver.playButtonX + this.gameOver.playButtonWidth &&
            clickY >= this.gameOver.playButtonY &&
            clickY <= this.gameOver.playButtonY + this.gameOver.playButtonHeight
          ) {
            this.reset();
            gameStates.current = gameStates.getReady;
          }
          break;
      }
    });
  };
}

const newGame = new ArcheroGame('canvas');
newGame.animate();

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  keyPressed[event.key] = true;
});

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  keyPressed[event.key] = false;
});
