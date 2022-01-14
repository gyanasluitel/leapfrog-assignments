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
            x: RING_LEFT_BOUNDARY + 50,
            y: RING_TOP_BOUNDARY + 100,
          },
          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 100,
            x: RING_RIGHT_BOUNDARY - 120,
            y: RING_TOP_BOUNDARY + 150,
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
            x: RING_LEFT_BOUNDARY + 50,
            y: RING_TOP_BOUNDARY + 60,
          },

          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 110,
            x: getRandomPosition(
              RING_LEFT_BOUNDARY + 50,
              RING_RIGHT_BOUNDARY - 50
            ),
            y: CANVAS_HEIGHT - 150,
          },

          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 110,
            x: getRandomPosition(
              RING_LEFT_BOUNDARY + 50,
              RING_RIGHT_BOUNDARY - 50
            ),
            y: CANVAS_HEIGHT - 200,
          },

          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 110,
            x: RING_RIGHT_BOUNDARY - 120,
            y: RING_TOP_BOUNDARY + 150,
          },
        ],
        obstacles: [
          { image: obstacle2Image, x: 100, y: 400 },
          { image: obstacle2Image, x: 150, y: 400 },
          { image: obstacle2Image, x: 200, y: 400 },
          { image: obstacle2Image, x: 250, y: 400 },
        ],
      },

      3: {
        monsters: [
          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 120,
            x: RING_LEFT_BOUNDARY + 50,
            y: RING_TOP_BOUNDARY + 80,
          },
          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 120,
            x: RING_RIGHT_BOUNDARY - 150,
            y: CANVAS_HEIGHT - 150,
          },
          {
            image: monster2Image,
            type: 2,
            damage: 15,
            weaponImage: monsterWeapon2Image,
            health: 150,
            x: RING_WIDTH / 2,
            y: RING_TOP_BOUNDARY + 120,
          },
          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 120,
            x: RING_RIGHT_BOUNDARY - 200,
            y: RING_TOP_BOUNDARY + 250,
          },
        ],
        obstacles: [
          { image: obstacle1Image, x: 100, y: RING_TOP_BOUNDARY + 160 },
          { image: obstacle1Image, x: 100, y: RING_TOP_BOUNDARY + 200 },
          { image: obstacle1Image, x: 100, y: RING_TOP_BOUNDARY + 240 },
          { image: obstacle1Image, x: 100, y: RING_TOP_BOUNDARY + 280 },

          { image: obstacle1Image, x: 300, y: RING_TOP_BOUNDARY + 160 },
          { image: obstacle1Image, x: 300, y: RING_TOP_BOUNDARY + 200 },
          { image: obstacle1Image, x: 300, y: RING_TOP_BOUNDARY + 240 },
          { image: obstacle1Image, x: 300, y: RING_TOP_BOUNDARY + 280 },
        ],
      },

      4: {
        monsters: [
          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 130,
            x: RING_WIDTH / 2 + 80,
            y: RING_TOP_BOUNDARY + 120,
          },

          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 130,
            x: RING_WIDTH / 4,
            y: RING_TOP_BOUNDARY + 120,
          },

          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 130,
            x: RING_WIDTH / 2 + 80,
            y: RING_TOP_BOUNDARY + 120,
          },

          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 130,
            x: RING_WIDTH / 4,
            y: RING_TOP_BOUNDARY + 120,
          },

          {
            image: monster2Image,
            type: 2,
            damage: 15,
            weaponImage: monsterWeapon2Image,
            health: 170,
            x: RING_LEFT_BOUNDARY + 60,
            y: RING_TOP_BOUNDARY + 60,
          },

          {
            image: monster3Image,
            type: 3,
            damage: 20,
            weaponImage: monsterWeapon3Image,
            health: 200,
            x: RING_WIDTH / 2,
            y: RING_TOP_BOUNDARY + 80,
          },
        ],
        obstacles: [],
      },

      5: {
        monsters: [
          {
            image: bossMonsterImage,
            type: 5,
            damage: 40,
            weaponImage: bossMonsterWeaponImage,
            health: 500,
          },
        ],
        obstacles: [],
      },

      6: {
        monsters: [
          {
            image: monster3Image,
            type: 3,
            damage: 20,
            weaponImage: monsterWeapon3Image,
            health: 200,
            x: RING_RIGHT_BOUNDARY - 80,
            y: RING_HEIGHT - 150,
          },

          {
            image: monster3Image,
            type: 3,
            damage: 20,
            weaponImage: monsterWeapon3Image,
            health: 220,
            x: RING_LEFT_BOUNDARY + 20,
            y: RING_HEIGHT - 150,
          },

          {
            image: monster3Image,
            type: 3,
            damage: 20,
            weaponImage: monsterWeapon3Image,
            health: 220,
            x: RING_LEFT_BOUNDARY + 150,
            y: RING_HEIGHT - 150,
          },

          {
            image: monster3Image,
            type: 3,
            damage: 20,
            weaponImage: monsterWeapon3Image,
            health: 220,
            x: RING_LEFT_BOUNDARY + 150,
            y: RING_TOP_BOUNDARY + 60,
          },

          {
            image: monster2Image,
            type: 2,
            damage: 20,
            weaponImage: monsterWeapon2Image,
            health: 100,
            x: RING_WIDTH / 2,
            y: RING_TOP_BOUNDARY + 120,
          },
        ],
        obstacles: [],
      },

      7: {
        monsters: [
          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 150,
            x: RING_WIDTH / 2 + 80,
            y: RING_TOP_BOUNDARY + 120,
          },

          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 150,
            x: RING_WIDTH / 4,
            y: RING_TOP_BOUNDARY + 120,
          },

          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 150,
            x: RING_WIDTH / 2 + 80,
            y: RING_TOP_BOUNDARY + 120,
          },

          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 150,
            x: RING_WIDTH / 4,
            y: RING_TOP_BOUNDARY + 120,
          },

          {
            image: monster2Image,
            type: 2,
            damage: 15,
            weaponImage: monsterWeapon2Image,
            health: 190,
            x: RING_LEFT_BOUNDARY + 60,
            y: RING_TOP_BOUNDARY + 60,
          },

          {
            image: monster2Image,
            type: 2,
            damage: 15,
            weaponImage: monsterWeapon2Image,
            health: 190,
            x: RING_RIGHT_BOUNDARY - 80,
            y: RING_TOP_BOUNDARY + 60,
          },

          {
            image: monster3Image,
            type: 3,
            damage: 20,
            weaponImage: monsterWeapon3Image,
            health: 240,
            x: RING_RIGHT_BOUNDARY - 80,
            y: RING_HEIGHT - 180,
          },

          {
            image: monster3Image,
            type: 3,
            damage: 20,
            weaponImage: monsterWeapon3Image,
            health: 240,
            x: RING_LEFT_BOUNDARY + 20,
            y: RING_HEIGHT - 180,
          },
        ],
        obstacles: [
          { image: obstacle2Image, x: 80, y: 400 },
          { image: obstacle2Image, x: 200, y: 400 },
          { image: obstacle2Image, x: 250, y: 400 },
        ],
      },

      8: {
        monsters: [
          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 200,
            x: RING_WIDTH / 2 + 80,
            y: RING_TOP_BOUNDARY + 160,
          },

          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 200,
            x: RING_WIDTH / 4,
            y: RING_TOP_BOUNDARY + 160,
          },

          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 200,
            x: RING_WIDTH / 4,
            y: RING_TOP_BOUNDARY + 160,
          },

          {
            image: monster2Image,
            type: 2,
            damage: 15,
            weaponImage: monsterWeapon2Image,
            health: 210,
            x: RING_LEFT_BOUNDARY + 60,
            y: RING_TOP_BOUNDARY + 60,
          },

          {
            image: monster2Image,
            type: 2,
            damage: 15,
            weaponImage: monsterWeapon2Image,
            health: 210,
            x: RING_RIGHT_BOUNDARY - 80,
            y: RING_TOP_BOUNDARY + 60,
          },

          {
            image: monster3Image,
            type: 3,
            damage: 20,
            weaponImage: monsterWeapon3Image,
            health: 300,
            x: RING_LEFT_BOUNDARY + 80,
            y: RING_HEIGHT - 180,
          },
        ],
        obstacles: [
          { image: obstacle2Image, x: 90, y: 500 },
          { image: obstacle2Image, x: 120, y: 500 },
          { image: obstacle2Image, x: 150, y: 500 },
          { image: obstacle2Image, x: 180, y: 500 },

          { image: obstacle2Image, x: 180, y: RING_TOP_BOUNDARY + 100 },
          { image: obstacle2Image, x: 210, y: RING_TOP_BOUNDARY + 100 },
          { image: obstacle2Image, x: 240, y: RING_TOP_BOUNDARY + 100 },
          { image: obstacle2Image, x: 270, y: RING_TOP_BOUNDARY + 100 },
        ],
      },

      9: {
        monsters: [
          {
            image: monster2Image,
            type: 2,
            damage: 15,
            weaponImage: monsterWeapon2Image,
            health: 230,
            x: RING_LEFT_BOUNDARY + 60,
            y: RING_TOP_BOUNDARY + 60,
          },

          {
            image: monster2Image,
            type: 2,
            damage: 15,
            weaponImage: monsterWeapon2Image,
            health: 230,
            x: RING_LEFT_BOUNDARY + 60,
            y: RING_TOP_BOUNDARY + 120,
          },

          {
            image: monster2Image,
            type: 2,
            damage: 15,
            weaponImage: monsterWeapon2Image,
            health: 230,
            x: RING_RIGHT_BOUNDARY - 80,
            y: RING_TOP_BOUNDARY + 60,
          },

          {
            image: monster3Image,
            type: 3,
            damage: 20,
            weaponImage: monsterWeapon3Image,
            health: 350,
            x: RING_LEFT_BOUNDARY + 80,
            y: RING_HEIGHT - 180,
          },
        ],
        obstacles: [
          { image: obstacle2Image, x: 90, y: 500 },
          { image: obstacle2Image, x: 120, y: 500 },
          { image: obstacle2Image, x: 150, y: 500 },
          { image: obstacle2Image, x: 180, y: 500 },

          { image: obstacle2Image, x: 180, y: RING_TOP_BOUNDARY + 100 },
          { image: obstacle2Image, x: 210, y: RING_TOP_BOUNDARY + 100 },
          { image: obstacle2Image, x: 240, y: RING_TOP_BOUNDARY + 100 },
          { image: obstacle2Image, x: 270, y: RING_TOP_BOUNDARY + 100 },
        ],
      },

      10: {
        monsters: [
          {
            image: bossMonsterImage,
            type: 10,
            damage: 50,
            weaponImage: bossMonsterWeaponImage,
            health: 800,
          },

          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 200,
            x: RING_WIDTH / 2 + 80,
            y: RING_TOP_BOUNDARY + 160,
          },

          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 200,
            x: RING_WIDTH / 4,
            y: RING_TOP_BOUNDARY + 160,
          },

          {
            image: monsterImage,
            type: 1,
            damage: 10,
            weaponImage: monsterWeaponImage,
            health: 200,
            x: RING_WIDTH / 4,
            y: RING_TOP_BOUNDARY + 160,
          },
        ],
        obstacles: [],
      },
    };
  }
}
