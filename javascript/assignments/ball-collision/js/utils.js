/* Generating random integers between two values, 
    inclusive at both ends
*/
const getRandomInt = (min, max) => {
    let minValue = Math.ceil(min);
    let maxValue = Math.floor(max);
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
};

const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const getDistance = (x1, y1, x2, y2) => {
    return (x2 - x1) ** 2 + (y2 - y1) ** 2;
}