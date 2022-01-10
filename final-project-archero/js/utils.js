const getRandomPosition = (min, max) => {
  let minPos = Math.ceil(min);
  let maxPos = Math.floor(max);
  return Math.floor(Math.random() * (maxPos - minPos) + minPos);
};

const getDistance = (x1, x2, y1, y2) => {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};

const getRandomIntInclusive = (min, max) => {
  let minValue = Math.ceil(min);
  let maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1) + min);
};
