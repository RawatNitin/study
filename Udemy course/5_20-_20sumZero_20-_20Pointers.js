// Find pair whose sum is zero

// function sumZero(arr){
//     let keys = {}
//   for(let i = 0; i < arr.length; i++){
//       keys[arr[i]] = arr[i];
//   }
//   for(let j = 0; j < arr.length; j++){
//       var newAr = undefined;
//       if(keys[-arr[j]]){
//         newAr = [arr[j],-arr[j]];
//         console.log("pair", newAr);
//         break;
//       }
//   }
// }

// console.log(sumZero([-4,-3,-2,-1,0,1,2,3]));

function pul(arr){
    let i = 0;
    let j = arr.length - 1;
    while(i < j){
       if(arr[i] + arr[j] == 0){
           return [arr[i], arr[j]];
       } else if(arr[i] + arr[j] > 0){
           j--;
       } else if(arr[i] + arr[j] < 0){
           i++;
       }
    }
}

console.log(pul([-4,-3,-2,-1,0,1,2,3]));




