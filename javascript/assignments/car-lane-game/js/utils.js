const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}



const randomPositionGenerator = (arr) => {
    let randomIndex = Math.floor(arr.length * Math.random());
    return arr[randomIndex];
  }