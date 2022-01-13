class Levels {
  constructor() {
    this.level = {
      1: {
        monsters: [
          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 100,
          },
          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 100,
          },
        ],
        obstacles: [],
      },
      2: {
        monsters: [
          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 110,
          },
          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 110,
          },
          {
            image: monster2Image,
            type: 2,
            damage: 20,
            weaponImage: monsterWeapon2Image,
            health: 150,
          },
        ],
        obstacles: [
          { image: obstacle2Image, x: 160, y: 400 },
          { image: obstacle2Image, x: 190, y: 400 },
          { image: obstacle2Image, x: 220, y: 400 },
        ],
      },

      3: {
        monsters: [
          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 150,
          },
          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 150,
          },
          {
            image: monster2Image,
            type: 2,
            damage: 20,
            weaponImage: monsterWeapon2Image,
            health: 150,
          },
        ],
        obstacles: [
          { image: obstacle2Image, x: 100, y: 400 },
          { image: obstacle2Image, x: 150, y: 400 },
          { image: obstacle2Image, x: 200, y: 400 },
          { image: obstacle2Image, x: 250, y: 400 },
        ],
      },

      4: {
        monsters: [
          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 150,
          },
          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 150,
          },
          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 150,
          },
          {
            image: monster2Image,
            type: 2,
            damage: 20,
            weaponImage: monsterWeapon2Image,
            health: 150,
          },
        ],
        obstacles: [
          { image: obstacle2Image, x: 100, y: 400 },
          { image: obstacle2Image, x: 150, y: 400 },
          { image: obstacle2Image, x: 200, y: 400 },
          { image: obstacle2Image, x: 250, y: 400 },
        ],
      },

      5: {
        monsters: [
          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 150,
          },
          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 150,
          },
          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 150,
          },
          {
            image: monster2Image,
            type: 2,
            damage: 20,
            weaponImage: monsterWeapon2Image,
            health: 150,
          },
          {
            image: monster2Image,
            type: 2,
            damage: 20,
            weaponImage: monsterWeapon2Image,
            health: 150,
          },
        ],
        obstacles: [
          { image: obstacle2Image, x: 100, y: 400 },
          { image: obstacle2Image, x: 150, y: 400 },
          { image: obstacle2Image, x: 200, y: 400 },
          { image: obstacle2Image, x: 250, y: 400 },
        ],
      },
    };
  }
}
