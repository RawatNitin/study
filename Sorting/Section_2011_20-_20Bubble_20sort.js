// Bubble sort - because in each pass largest value bubbles to the top of the array;
// use noSwap variable to stop iterations when there was no swapping in the last pass, that means 
// the array has already been sorted
// 
function bubbleSort(arr){
    if(!arr.length){
        return;
    }
    let noSwap;
    for(let i = 0; i < arr.length; i++){
        noSwap = true;
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                noSwap = false;
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }
        console.log(arr);
        console.log('PASS Complete');
        if(noSwap) break;
    }
    return arr;
}

// bubbleSort([23,12,43,54,14,34]);
bubbleSort([8,1,2,3,4]);
