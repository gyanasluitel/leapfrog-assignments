class ArcheroGame {
  constructor(canvasName) {
    this.canvas = document.getElementById(canvasName);
    this.canvas.width = CANVAS_WIDTH;
    this.canvas.height = CANVAS_HEIGHT;
    this.canvas.style.border = '2px solid black';
    this.canvas.style.margin = '0 5% 0 25%';
    this.ctx = canvas.getContext('2d');

    this.handleCanvasEventListener();

    // this.monsters = [];

    // for (let i = 0; i < 3; i++) {
    //   this.monsters.push(new Monster(this.ctx));
    // }

    // console.log(this.monsters);

    this.monster = new Monster(this.ctx);
    this.hero = new Hero(this.ctx);
    this.getReady = new GetReady(this.ctx);
  }

  draw = () => {
    this.ctx.fillStyle = 'lightblue';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.getReady.draw();
    this.hero.draw();
    this.monster.draw();
    // this.monsters.forEach((monster) => monster.draw());
    bullets.forEach((bullet) => bullet.draw());
    monsterBullets.forEach((bullet) => bullet.draw());
    coins.forEach((coin) => coin.draw());
  };

  update = () => {
    this.hero.move(this.monster);
    this.monster.move(this.hero);
    // this.monsters.forEach((monster) => monster.move(this.hero));
    bullets.forEach((bullet) => bullet.move());
    monsterBullets.forEach((bullet) => bullet.move());
    coins.forEach((coin) => coin.move());
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
            break;
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
