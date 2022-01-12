// CANVAS
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 650;
const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

// RING
const RING_LEFT_BOUNDARY = 25;
const RING_RIGHT_BOUNDARY = 375;
const RING_TOP_BOUNDARY = 128 + 50;

// GAME STATES
const gameStates = {
  current: 0,
  getReady: 0,
  gameRunning: 1,
  changingLevel: 2,
  gameOver: 3,
  nextLevel: 4,
  selectPowerUp: 5,
  gameComplete: 6,
  upgrade: 7,
  currentLevel: 1,
};

// KEY PRESS DETECTION
const keyPressed = {};

let timer = 0;

let bullets = [];
let monsterBullets = [];
let coins = [];
let healingItems = [];
let monsters = [];

// HERO
const HERO_PATH = 'assets/hero.png';
const heroImage = new Image();
heroImage.src = HERO_PATH;

// HERO WEAPON
const WEAPON_PATH = 'assets/weapon.png';
const weaponImage = new Image();
weaponImage.src = WEAPON_PATH;

// MONSTER
const MONSTER_PATH = 'assets/monster.png';
const monsterImage = new Image();
monsterImage.src = MONSTER_PATH;

// MONSTER 2
const MONSTER_2_PATH = 'assets/monster2.png';
const monster2Image = new Image();
monster2Image.src = MONSTER_2_PATH;

// MONSTER 3
const MONSTER_3_PATH = 'assets/monster3.png';
const monster3Image = new Image();
monster3Image.src = MONSTER_3_PATH;

// MONSTER WEAPON 1
const MONSTER_WEAPON_PATH = 'assets/monsterWeapon.png';
const monsterWeaponImage = new Image();
monsterWeaponImage.src = MONSTER_WEAPON_PATH;

// MONSTER WEAPON 2
const MONSTER_WEAPON_2_PATH = 'assets/monsterWeapon2.png';
const monsterWeapon2Image = new Image();
monsterWeapon2Image.src = MONSTER_WEAPON_2_PATH;

// MONSTER WEAPON 3
const MONSTER_WEAPON_3_PATH = 'assets/monsterWeapon3.png';
const monsterWeapon3Image = new Image();
monsterWeapon3Image.src = MONSTER_WEAPON_3_PATH;

// COINS
const COIN_PATH = 'assets/coins.png';
const coinImage = new Image();
coinImage.src = COIN_PATH;

// HEALING ITEM
const HEALING_ITEM_PATH = 'assets/healing-item.png';
const healingItemImage = new Image();
healingItemImage.src = HEALING_ITEM_PATH;

// GAME START BACKGROUND IMAGE
const GAME_START_BG_PATH = 'assets/game-start-bg.jpg';
const gameStartBgImage = new Image();
gameStartBgImage.src = GAME_START_BG_PATH;

// GAME START HERO IMAGE
const GAME_START_HERO_PATH = 'assets/game-start-hero.png';
const gameStartHeroImage = new Image();
gameStartHeroImage.src = GAME_START_HERO_PATH;

//BLACK BACKGROUND IMAGE
const BLACK_BAKGROUND_PATH = 'assets/black-rectangle.png';
const blackBackgroundImage = new Image();
blackBackgroundImage.src = BLACK_BAKGROUND_PATH;

// PLAY BUTTON
const PLAY_BUTTON_PATH = 'assets/btn-play.png';
const playButtonImage = new Image();
playButtonImage.src = PLAY_BUTTON_PATH;

// HOME BUTTON
const HOME_BUTTON_PATH = 'assets/home.png';
const homeButtonImage = new Image();
homeButtonImage.src = HOME_BUTTON_PATH;

// BACKGROUND
const BACKGROUND_IMAGE_PATH = 'assets/background.jpg';
const backgroundImage = new Image();
backgroundImage.src = BACKGROUND_IMAGE_PATH;

// OBSTACLE - ROCK
const OBSTACLE_1_IMAGE_PATH = 'assets/obstacles/rock.png';
const obstacle1Image = new Image();
obstacle1Image.src = OBSTACLE_1_IMAGE_PATH;

// OBSTACLE - ROCK
const OBSTACLE_2_IMAGE_PATH = 'assets/obstacles/trunk.png';
const obstacle2Image = new Image();
obstacle2Image.src = OBSTACLE_2_IMAGE_PATH;

let obstacles = [];

// GATE LEVEL INDICATOR
const GATE_LEVEL_PATH = 'assets/gate-level.png';
const gateLevelImage = new Image();
gateLevelImage.src = GATE_LEVEL_PATH;

// GATE CLOSE
const GATE_CLOSE_PATH = 'assets/gate-close.png';
const gateCloseImage = new Image();
gateCloseImage.src = GATE_CLOSE_PATH;

// GATE OPEN
const GATE_OPEN_PATH = 'assets/gate-open.png';
const gateOpenImage = new Image();
gateOpenImage.src = GATE_OPEN_PATH;

// POWER UP

// Power - Multi shot
const POWER_MULTISHOT_PATH = 'assets/power-multiShot.png';
const powerMultiShotImage = new Image();
powerMultiShotImage.src = POWER_MULTISHOT_PATH;

// Power - Arrowside
const POWER_ARROWSIDE_PATH = 'assets/power-arrowSide.png';
const powerArrowSideImage = new Image();
powerArrowSideImage.src = POWER_ARROWSIDE_PATH;

// Power - Arrow Diagonal
const POWER_ARROWDIAGONAL_PATH = 'assets/power-arrowDiagonal.png';
const powerArrowDiagonalImage = new Image();
powerArrowDiagonalImage.src = POWER_ARROWDIAGONAL_PATH;

// UPGRADE BUTTON
const UPGRADE_BUTTON_PATH = 'assets/upgrade.png';
const upgradeButtonImage = new Image();
upgradeButtonImage.src = UPGRADE_BUTTON_PATH;
