// *************************

var longestPalindrome = function(s) {
    if(s.length <= 1) return s;
    let longest = "";
  
    for(let i = 0; i < s.length; i++){
      let temp = isPalin(s, i, i);
      if(temp.length > longest.length){
        longest = temp;
      }
      temp = isPalin(s, i, i + 1);
      if(temp.length > longest.length){
        longest = temp;
      }
    }
  
    return longest;
  };
  
  var isPalin = function (s, begin, end) {
  while(begin >= 0 && end < s.length){
    if(s[begin] === s[end]) {
      begin--; end++;
    } else {
      break;
    }
  }
  
  return s.substring(begin + 1, end);
  };