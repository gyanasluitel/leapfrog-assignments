/*
Write a function that searches for an object by a 
specific key value in an array of objects:

var fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
]

searchByName(fruits, 'apple');
Should return: {id: 2, name: 'Apple', color: 'Red'}

Also try searchByKey(fruits, 'name', 'apple');
*/ 

var fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
];

function searchByName(arr, name) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name.toLowerCase() === name.toLowerCase()) {
            return arr[i];
        } 
    }
    return "NO RESULTS FOUND!"
};

function searchByKey(arr, key, name) {
    let valueToMatch = name;
    let valueOfKey;
    for (let i = 0; i < arr.length; i++) {
        valueOfKey = arr[i][key]
        if(valueOfKey.toLowerCase() === valueToMatch.toLowerCase()) {
            return arr[i];
        }
    }
    return "NO RESULTS FOUND!";
};

console.log(searchByName(fruits, 'Apple'));
console.log(searchByName(fruits, 'Orange'));


console.log(searchByKey(fruits, 'color', 'Red'));
console.log(searchByKey(fruits, 'name', 'Banana'));
console.log(searchByName(fruits, 'Orange'));


