// CANVAS
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 600;
const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

// GAME STATES
const gameStates = {
  current: 0,
  getReady: 0,
  gameOn: 1,
  gameOver: 2,
};

// KEY PRESS DETECTION
const keyPressed = {};

let timer = 0;

let bullets = [];
let monsterBullets = [];
let coins = [];

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

// GAME START BACKGROUND IMAGE
const GAME_START_BG_PATH = 'assets/game-start-bg.jpg';
const gameStartBgImage = new Image();
gameStartBgImage.src = GAME_START_BG_PATH;

// GAME START HERO IMAGE
const GAME_START_HERO_PATH = 'assets/game-start-hero.png';
const gameStartHeroImage = new Image();
gameStartHeroImage.src = GAME_START_HERO_PATH;
