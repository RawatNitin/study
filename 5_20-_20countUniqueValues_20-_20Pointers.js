// O(n)
function countUnique(arr){
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 'Yes';
        }
    }
    console.log(Object.keys(obj).length);
}
// countUnique([1,6,6,6,6,7,8])

//O(n)
function countUnique2(){
    a
}

