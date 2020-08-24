function binarySearch(arr, val){
    if(!arr.length){
        return -1;
    }
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        if(arr[left] === val){
            return left;
        } else if (arr[right] === val){
            return right;
        } else {
            let mid = Math.ceil((left + right)/2);
           if( val >= arr[mid]){
               left = mid;
           } else if(val <= arr[mid]){
               right = mid;
           }
        }
    }
    return -1;
}

binarySearch([1,2,3,4,5], 2)