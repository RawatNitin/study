
  var maxSubArray = function(nums) {
    var n = nums.length;
    var currSum = nums[0], maxSum = nums[0];

    for(var i = 1; i < n; ++i) {
      const tsum = currSum + nums[i];
      currSum = Math.max(nums[i], tsum);
      maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
  }

  maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
