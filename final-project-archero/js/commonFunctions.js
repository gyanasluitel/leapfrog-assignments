generateHealthPercentage = () => {
  return (this.health * this.width) / 100;
};

const calculateNearestMonster = () => {
  let nearestDistance = 99999999;
  let nearestMonster;
  monsters.forEach((monster) => {
    let distance = getDistance(this.x, this.y, monster.x, monster.y);
    if (distance <= nearestDistance) {
      nearestDistance = distance;
      nearestMonster = monster;
    }
  });
  return nearestMonster;
};
