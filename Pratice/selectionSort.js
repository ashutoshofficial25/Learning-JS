const selectionSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let element = i;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[element] > nums[j]) {
        element = j;
      }
    }
    if (element != i) [nums[i], (nums[element] = nums[element]), nums[i]];
  }
};
