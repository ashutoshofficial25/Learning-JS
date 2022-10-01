const bubbleSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let flag = false;
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
        flag = true;
      }
    }
    if (!flag) return;
  }
};
