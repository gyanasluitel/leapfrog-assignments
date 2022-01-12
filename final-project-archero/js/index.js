class ArcheroGame {
  constructor(canvasName) {
    this.canvas = document.getElementById(canvasName);
    this.canvas.width = CANVAS_WIDTH;
    this.canvas.height = CANVAS_HEIGHT;
    this.canvas.style.border = '2px solid black';
    this.canvas.style.margin = '0 5% 0 25%';
    this.ctx = canvas.getContext('2d');

    this.handleCanvasEventListener();

    // this.monster = new Monster(this.ctx);
    this.background = new Background(this.ctx);
    this.hero = new Hero(this.ctx);
    this.getReady = new GetReady(this.ctx);
    this.gameOver = new GameOver(this.ctx);
    this.score = new Score(this.ctx);
    this.changingLevel = new ChangingLevel(this.ctx);
    this.nextLevel = new NextLevel(this.ctx);
    this.levels = new Levels();
    this.gameComplete = new GameComplete(ctx);
    this.selectPowerUp = new SelectPowerUp(ctx);
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
    // console.log(this.levels.level[gameStates.currentLevel]);
    if (this.levels.level[gameStates.currentLevel] === undefined) {
      gameStates.current = gameStates.gameComplete;
      // console.log('game complete');
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
    this.hero.draw(this.selectPowerUp);
    // this.monster.draw();
    monsters.forEach((monster) => monster.draw());
    bullets.forEach((bullet) => bullet.draw());
    obstacles.forEach((obstacle) => obstacle.draw());

    monsterBullets.forEach((bullet) => bullet.draw());
    coins.forEach((coin) => coin.draw());
    healingItems.forEach((healingItem) => healingItem.draw());
    this.gameOver.draw();
    this.score.draw(this.hero);
    // this.changingLevel.draw();
    this.gameComplete.draw();
    this.selectPowerUp.draw();
  };

  update = () => {
    this.hero.move();
    // this.monster.move(this.hero);
    monsters.forEach((monster) => monster.move(this.hero));
    bullets.forEach((bullet) => bullet.move());
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
      // if (timer %)
      obstacles = [];
      this.nextLevel.update();
      this.generateLevel();
    }

    // if (gameStates.current === gameStates.gameComplete) {
    //   this.reset();
    // }
  };

  reset = () => {
    this.hero.reset();
    monsters = [];
    obstacles = [];
    monsterBullets = [];
    healingItems = [];
    coins = [];
    gameStates.currentLevel = 1;
  };
  animate = () => {
    this.update();
    this.draw();
    timer++;
    // console.log(timer);
    window.requestAnimationFrame(this.animate);
  };

  handleCanvasEventListener = () => {
    this.canvas.addEventListener('click', (event) => {
      let rect = this.canvas.getBoundingClientRect();
      let clickX = event.clientX - rect.left;
      let clickY = event.clientY - rect.top;

      switch (gameStates.current) {
        case gameStates.getReady:
          if (
            clickX >= this.getReady.playButtonX &&
            clickX <=
              this.getReady.playButtonX + this.getReady.playButtonWidth &&
            clickY >= this.getReady.playButtonY &&
            clickY <= this.getReady.playButtonY + this.getReady.playButtonHeight
          ) {
            gameStates.current = gameStates.gameRunning;
            this.generateLevel();
            break;
          }
        case gameStates.gameOver:
          if (
            clickX >= this.gameOver.playButtonX &&
            clickX <=
              this.gameOver.playButtonX + this.gameOver.playButtonWidth &&
            clickY >= this.gameOver.playButtonY &&
            clickY <= this.gameOver.playButtonY + this.gameOver.playButtonHeight
          ) {
            gameStates.current = gameStates.getReady;
            this.reset();
          }
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
            this.hero.powerUps[this.selectPowerUp.powerUpOptions[3]] = true;
            gameStates.current = gameStates.gameRunning;
          }
      }
    });
  };
}

const newGame = new ArcheroGame('canvas');
newGame.animate();

document.addEventListener('keydown', (event) => {
  //   console.log(event.key);
  event.preventDefault();
  keyPressed[event.key] = true;
});

document.addEventListener('keyup', (event) => {
  //   console.log(event.key);
  event.preventDefault();
  keyPressed[event.key] = false;
  //   console.log(keyPressed);
});
