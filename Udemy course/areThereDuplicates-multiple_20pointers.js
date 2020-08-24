
// O(n) *Frequency Counters*
// function areThereDuplicates() {
//   var args = Array.from(arguments);
//   var obj = {};
//   for(let i of arguments){
//     if(obj[args[i]]){
//         return true;
//     } else {
//         obj[args[i]] = args[i];
//     }
//   }
//   return false;
// }

// O(n) *multiple pointers*
function areThereDuplicates() {
  var args = Array.from(arguments);
  if(args.length < 2) {
      return false;
  }
  let i = 0;
  let j = 1;
while(i < args.length - 1){
    if(args[i] == args[j]){
        return true;
    } else if(j == args.length - 1){
        i = i + 1;
        j = i + 1;
    } else {
        ++j;
    }
}
  return false;
}

areThereDuplicates(1,3,4,2,2);