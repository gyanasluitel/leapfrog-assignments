/* 
Write a function that transforms an array of inputs 
into a new array based on a provided transformation function.

var numbers = [1, 2, 3, 4];

function transform(collection, tranFunc) { …TODO }

var output = transform(numbers, function(num) {
    return num * 2;
});

// output should be [2, 4, 6, 8]

*/

var numbers = [1, 2, 3, 4];
var numbers2 = [10, 11, 12, 13];

function transform(collection, tranFunc) {
    let newArray = [];
    
    for (let i = 0; i < collection.length; i++) {
        newArray.push(tranFunc(collection[i]));
    }

    return newArray;
};

var output = transform(numbers, function (num) {
    return num * 2;
});

var output2 = transform(numbers2, function (num) {
    return num * 2;
});

console.log(output);
console.log(output2);

