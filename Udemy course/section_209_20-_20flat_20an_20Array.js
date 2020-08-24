// *****************Flatten***********************
function flatten(arr) {
    let finalArr = [];
    function doFlat(arr){
        if(arr.length && !Array.isArray(arr[0])){
            finalArr.push(arr[0]);
            doFlat(arr.slice(1));
        } else if(arr.length && Array.isArray(arr[0])){
            return doFlat(arr[0]);
        } else if(!arr.length){
            return;
        }
    }
    doFlat(arr);
    return finalArr;
}
flatten([1, [2, [3, 4], [[5]]]]);