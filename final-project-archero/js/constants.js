// CANVAS
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 500;

const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

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

const keyPressed = {};

let bullets = [];
let monsterBullets = [];

let timer = 0;
