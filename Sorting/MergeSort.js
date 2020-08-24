// https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060



function mergeSort(arr){
    // No need to sort the array if the array only has one element or empty
    
	if(arr.length <= 1) {
        return arr;
    }
    
	// In order to divide the array in half, we need to figure out the middle
    
	const mid = Math.floor((arr.length/2));

    
	// This is where we will be dividing the array into left and right and sorting them
    
	const left = mergeSort(arr.slice(0, mid));
    
	const right = mergeSort(arr.slice(mid));
    
    
	// Using recursion to combine the left and right
    
	return merge( left, right );

}



	// Merge the two arrays: left and right
	
function merge(left, right) {
   
	 	let i = 0, j = 0, resultsArray = [];
    // We will concatenate values into the resultArray in order
    
		while(i < left.length && j < right.length){

        		if(left[i] > right[j]){
            
				resultsArray.push(right[j++]); //push right value and move right array cursor
        
			} else {
            
				resultsArray.push(left[i++]); //push left value and move left array cursor
        
			}
    
		}
    
  // We need to push remaining elements because there will be one element remaining in either left OR the right
   
		while(i < left.length){
     resultsArray.push(left[i++])
   }

   
		while(j < right.length){
     resultsArray.push(right[j++])
   }
    
   
	 	// Need to return new array from resultsArray     
    
		return [...resultsArray]

	}


let unsorted = [5,6,1,2,4,0];

mergeSort(unsorted);
