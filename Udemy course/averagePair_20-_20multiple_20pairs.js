// O(n)
function averagePair(arr, avg){
  // add whatever parameters you deem necessary - good luck!
  let i = 0;
  let j = 1;
  while((i < arr.length - 1) && (j <= arr.length - 1)){
    if((arr[i] + arr[j])/2 == avg){
        return [arr[i], arr[j]];
    } else if(j == arr.length - 1){
        i = i + 1;
        j = i + 1;
    } else {
        j = j + 1;
    }
  }
  return [];
}

averagePair([1,2,3], 1.5)