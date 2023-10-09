'use strict'

function removeElementByIndex(arr, index) {
    arr.splice(index, 1);
    console.log(arr)
}

removeElementByIndex([1, 2, 3, 4, 5], 2);







function calculateAverage(myArray) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < myArray.length; i++) {
        if (typeof myArray[i] === 'number') {
            sum += myArray[i];
            count++;
        }
    }
    if (count === 0) {
        return 0;
    }
    let average = sum / count
    console.log(average)


}

calculateAverage([1, 2, 'three', 4, 'five', 6])






function removeCharacters(inputString, charactersToRemove) {
    let result = "";

    for (let i = 0; i < inputString.length; i++) {

        if (!charactersToRemove.includes(inputString[i])) {
            result += inputString[i];
        }
    }

    console.log(result);
}


removeCharacters("hello world",['l', 'd'])




