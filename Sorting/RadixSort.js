
// https://alligator.io/js/radix-sort/

// Return maximum number of characters in any number of the array
let getMaxChar =(arr) => {
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        const len = String(arr[i]).length;
        if(len > max){
            max = len;
        }
    }
    return max;
}

// Return character at a specific place in the number. Start from 1s goes towards 10s, 100s, 1000s and so on.
// returns 0 if no number at a specif place
let getCharAtIndex = (num, i) => {
    const str = String(num);
    const char = str.charAt(str.length - 1 - i);
    return char ? char : 0;
}


let radixSort = (arr) => {
    if(arr.length <= 1){
        return arr;
    }

    const maxChar = getMaxChar(arr);
    // Runs as many times as any number has maximum number of characters
    for(let i = 0; i < maxChar; i++){
        const sortedArr = Array.from({length: 10}, () => []); // Creates an array with 10 empty arrays in it
        for(let j = 0; j < arr.length; j++){
            const charAtI = getCharAtIndex(arr[j], i);  //Get charatcer at ith place in the number
            sortedArr[charAtI].push(arr[j]); // Pushes number in the array which is at the index equal number at the ith place
        }
        arr = sortedArr.flat(); // Flattens all arrays and returns new array
    }

    return arr;
}

let unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];
radixSort(unsortedArr);