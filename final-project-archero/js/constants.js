// CANVAS
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 600;
const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

// RING
const RING_LEFT_BOUNDARY = 25;
const RING_RIGHT_BOUNDARY = 375;
const RING_TOP_BOUNDARY = 128;

// GAME STATES
const gameStates = {
  current: 0,
  getReady: 0,
  gameRunning: 1,
  changingLevel: 2,
  gameOver: 3,
  nextLevel: 4,
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

// MONSTER
const MONSTER_PATH = 'assets/monster.png';
const monsterImage = new Image();
monsterImage.src = MONSTER_PATH;

// HERO WEAPON
const WEAPON_PATH = 'assets/weapon.png';
const weaponImage = new Image();
weaponImage.src = WEAPON_PATH;

// MONSTER WEAPON
const MONSTER_WEAPON_PATH = 'assets/monsterWeapon.png';
const monsterWeaponImage = new Image();
monsterWeaponImage.src = MONSTER_WEAPON_PATH;

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

const obstacleArray = [
  { image: obstacle2Image, x: 100, y: 200 },
  { image: obstacle2Image, x: 150, y: 250 },
  { image: obstacle1Image, x: 200, y: 300 },
  { image: obstacle2Image, x: 250, y: 400 },
];

let obstacles = [];

// GATE LEVEL INDICATOR
const GATE_LEVEL_PATH = 'assets/gate-level.png';
const gateLevelImage = new Image();
gateLevelImage.src = GATE_LEVEL_PATH;
