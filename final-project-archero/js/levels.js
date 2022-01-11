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
          },
          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
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
          },
          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
          },
          {
            image: monster2Image,
            type: 2,
            damage: 20,
            weaponImage: monsterWeapon2Image,
          },
        ],
        obstacles: [
          { image: obstacle2Image, x: 100, y: 400 },
          { image: obstacle2Image, x: 150, y: 400 },
          { image: obstacle2Image, x: 200, y: 400 },
        ],
      },
    };
  }
}