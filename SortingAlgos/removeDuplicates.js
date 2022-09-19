const removeDuplicates = (nums) => {
  if (nums.length == 0) return 0;
  //   let i = 0;
  //   for (let j = 1; j < nums.length; j++) {
  //     if (nums[j] != nums[i]) {
  //       i++;
  //       nums[i] = nums[j];
  //     }
  //   }
  //   return i + 1;

  let res = new Set();

  for (let i = 0; i < nums.length; i++) {
    res.add(nums[i]);
  }
  nums = Array.from(res);
  return nums.length;
};
console.log(removeDuplicates([1, 1, 2]));
