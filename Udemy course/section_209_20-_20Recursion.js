

// **********returns true if any single value in the array returns true, otherwise false**********
// function someRecursive(arr, fn){
//   if(!arr.length) {
//       return false;
//   } else {
//      if(fn(arr[0])){
//          return true;
//      } else {
//          return someRecursive(arr.slice(1), fn)
//      }
//   }
// }
// someRecursive([4,6,8], val => val > 5);


//******************************* if a string is palindrome or not************************
// function isPalindrome(str) {
//   if(!str.length){
//       return true;
//   } else {
//       if(str[0] === str[str.length - 1]){
//           return isPalindrome(str.slice(1,str.length -1))
//       } else {
//           return false;
//       }
//   }
//   return true;
// }
// isPalindrome('amanaplanacanalpanama')

// *************************Reverse a string******************************************
// function reverse(str){
//     let finalStr = '';
//     function doReverse(str) {
//         if(!str.length){
//             return '';
//         } else {
//             finalStr =  finalStr + str.slice(str.length - 1);
//             str = str.slice(0, str.length - 1);
//             doReverse(str);
//         }
//     }
//     if(str.length){
//         doReverse(str)
//     }  else{
//        return finalStr; 
//     }
// }
// reverse('awesome')tion