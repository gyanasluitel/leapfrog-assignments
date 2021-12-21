function renderPattern(numAsterisk) {
    for (let i = numAsterisk; i > 0; i--) {
        let currentRow = "";
            for (let j = 0; j < i; j++) {
                currentRow += "*"
            }
            console.log(currentRow);
    }
}

renderPattern(5);