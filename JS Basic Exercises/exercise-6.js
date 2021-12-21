/*
Write a program to sort an array of object by a target key. 
The original array should remain unchanged.
*/

var arr = [{
    id: 1,
    name: 'John',
}, {
    id: 2,
    name: 'Mary',
}, {
    id: 3,
    name: 'Andrew',
}];


function sortBy(array, key) {
    //Copying array by value
    let tempArray = array.slice();

    return tempArray.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
};

var sorted = sortBy(arr, 'name');

console.log('Original Array: ', arr);
console.log("")
console.log('Sorted Array: ', sorted);