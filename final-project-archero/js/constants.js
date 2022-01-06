// CANVAS
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 500;

// HERO
const HERO_PATH = 'assets/hero.png';
const heroImage = new Image();
heroImage.src = HERO_PATH;

// MONSTER
const MONSTER_PATH = 'assets/monster.png';
const monsterImage = new Image();
monsterImage.src = MONSTER_PATH;

// WEAPON
const WEAPON_PATH = 'assets/weapon.png';
const weaponImage = new Image();
weaponImage.src = WEAPON_PATH;

const keyPressed = {};

let bullets = [];
let monsterBullets = [];

let timer = 0;
