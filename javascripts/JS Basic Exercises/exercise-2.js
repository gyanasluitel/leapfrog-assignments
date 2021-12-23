/*
Write a function to render the following pattern in the console:
* * * * *
* * * *
* * *
* * 
*
The function needs to take a number as a parameter which represents how many asterisks are rendered on the first row.
*/

function renderPattern(numAsterisk) {
    for (let i = 0; i < numAsterisk; i++) {
        let currentRow = "";
            for (let j = i; j < numAsterisk; j++) {
                currentRow += "*"
            }
            console.log(currentRow);
    }
}

renderPattern(5);