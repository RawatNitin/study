function selectionSort(arr){
    if(!arr.length){
        return;
    }
    for(let i = 0; i < arr.length; i++){
        let min = i;
        for(let j = i + 1; j < arr.length - 1; j++ ){
            if(arr[j] < arr[min]){
               min = j;
            }
        }

        if(min !== i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

selectionSort([23,12,43,54,14,34]);