// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
function sameFrequency(a,b){

  a = '' + a;
  b = '' + b;
  if(a.length != b.length){
      return false;
  }
  let lookup = {};
  for(let i = 0; i < a.length; i++){
      console.log(a[i])
      lookup[a[i]] ? lookup[a[i]]++ : lookup[a[i]] = 1;
  }
  for(let j = 0; j < b.length; j++){
      debugger;
      if(lookup[b[j]]){
          --lookup[b[j]]
      } else {
          return false;
      }
  }
  return true;
}

sameFrequency(13589578, 27859853)