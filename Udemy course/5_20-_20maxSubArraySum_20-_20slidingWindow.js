// Find maximum sum of n consecutive elements in an array

// O(n^2)
// function maxSubArraSum(arr, n){
//     let prevMaxSum = 0;
//     for(let i = 0 ; i < arr.length - 1 + n; i++){
//         let sum = 0;
//         for(let j = i; j < i + n ; j++ ){
//             sum = sum + arr[j];
//         }
//         if(sum > prevMaxSum){
//             prevMaxSum = sum;
//         }
//     }
//     console.log(prevMaxSum);
// }

// Sliding Window****************************************************************
// O(n)
function maxSubArraSum(arr, n){
   // Find sum for first n numbers
   // find sum of next n by subtracting first and adding next number
   let maxSum = 0;
   for(let i = 0; i < n; i++){
       maxSum = maxSum + arr[i];
   }
   let tempSum = maxSum;
   for(let j = n; j < arr.length; j++){
      tempSum = tempSum + arr[j] - arr[j-n];
      if(tempSum > maxSum){
          maxSum = tempSum;
      }
      console.log(maxSum);
   }
   console.log('Final Max Sum: ', maxSum);
}

maxSubArraSum([1,2,5,2,8,3,1,5],3);