function nextPermutation(nums) {
    const n = nums.length;
    let i = n - 2;
  
    //first pair of consecutive elements in desc
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }
  
    if (i >= 0) {
      //smallest element greater than nums[i] to its right
      let j = n - 1;
      while (j >= 0 && nums[j] <= nums[i]) {
        j--;
      }
  
      // Swap nums[i] to nums[j]
      swap(nums, i, j);
    }
  
    // Reverse the elements from index i+1 to end
    reverse(nums, i + 1);
  }
  
  function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  
  function reverse(nums, start) {
    let i = start;
    let j = nums.length - 1;
    while (i < j) {
      swap(nums, i, j);
      i++;
      j--;
    }
  }
  const nums = [1, 2, 3];
  nextPermutation(nums);
  console.log(nums);
    