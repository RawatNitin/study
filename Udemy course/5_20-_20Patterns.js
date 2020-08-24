// Frequency Counters
// Sliding Window
// Multiple Pointers


// ******************************* Frequency Counters **************
function validAnagram(a, b){
    let obj = {};
    for(let i = 0; i < a.length; i++){
        obj[a[i]] = obj[a[i]]++ || 1;
    }

    for(let i = 0; i < b.length; b++){
        if(!obj[b[i]]){
            return false;
        } else {
            obj[b[i]] = obj[b[i]] - 1;
        }
    }

    return true;
}

// ******************************** Multiple Pointers ********************************

function sumZero(arr){
    if(!arr.length) return undefined;
    let i = 0;
    let j = 1;
    while(i < j){
        if(arr[i] + arr[j] === 0){
            return [arr[i], arr[j]];
        } else if(j === arr.length - 1){
            i = i + 1;
            j = i + 1;
        } else if(i === arr.length - 1) {
            return undefined;
        } else {
            j++;
        }
    }
}

// sumZero([-3, -2, -1, 0 , 1, 2, 3])

// ******************* Sliding Window ********************************

function maxSubArraySum(arr, n){
    if(!arr.length || n <= 0){
        return;
    }
    let tempSum = 0;
    let maxSum = 0;

    for(let i = 0; i < 2; i++){
        tempSum += arr[i];
    }
    maxSum = tempSum;
    for(i = 2; i < arr.length; i++){
        tempSum = tempSum - arr[i - 2] + arr[i];
        if(tempSum > maxSum){
            maxSum = tempSum;
        }
    }

    return maxSum;
}

// maxSubArraySum([1,2,5,2,8,1,5], 2)

// ********************************* Divide and Conquer ******************

// Binary Search types