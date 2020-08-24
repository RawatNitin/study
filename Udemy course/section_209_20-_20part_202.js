function capitalizeFirst (arr) {
  // add whatever parameters you deem necessary - good luck!
  let finalArray = [];
  function doCapital(arr){
      if(!arr.length){
         return;
      } else {
        finalArray.push(arr[0].charAt(0).toUpperCase() + (arr[0].slice(1)));
        return doCapital(arr.slice(1));
      }
  }
  doCapital(arr);
  return finalArray;
}
capitalizeFirst(['car','taco','banana']);