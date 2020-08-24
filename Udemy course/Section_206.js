// if two numbers have same frequency of digits

function averagePair(arr, avg){
    let i = 0;
    let j = 1;
    while(i < j){
        let sum = arr[i] + arr[j];
        if(sum/2 === avg){
            return [arr[i], arr[j]];
        } else if( j === arr.length - 1){
            i++;
            j = i + 1;
        } else {
            j++;
        }
    }
    return false;
}

function isSubsequence(a, b){
    for(let i = 0; i < b.length; i++){
        
    }
    let i = 0;
    let j = 0;
    while(i < j){
        
    }
}