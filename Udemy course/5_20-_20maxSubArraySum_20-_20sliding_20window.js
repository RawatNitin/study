function maxSubarraySum(arr, num){
  // add whatever parameters you deem necessary - good luck!
  if(num <= 0 || num > arr.length){
      return
  }
  let tempSum = 0;
  let maxSum = 0;
  for(let i = 0; i <= num - 1; i++){
    tempSum = tempSum + arr[i];
  }

  maxSum = tempSum;

  for(let i = num; i < arr.length; i++){
      tempSum = tempSum - arr[i - num] + arr[i];
      if(tempSum > maxSum){
          maxSum = tempSum;
      } 
  }

  return maxSum;
}

maxSubarraySum([-3,4,0,-2,6,-1],2)