// My Func
function findLengthyUniqueCharSubString(str){
    let obj = {};
    let sub = '';
    let prevStr = '';
    for(let i = 0; i < str.length; i++){
        if(!obj[str[i]]){
            obj[str[i]] = str[i];
            sub += str[i];
        } else {
            if(prevStr.length < sub.length){
               prevStr = sub;
            }
            sub = '';
            obj = {};
            i = --i;
        }
    }
    console.log(prevStr);
}

findLengthyUniqueCharSubString("hjguuhchgvdsaftyhellothere");