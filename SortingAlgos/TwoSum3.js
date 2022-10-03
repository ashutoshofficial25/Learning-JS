const twoSum = (nums) => {
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          if (map[`${nums[i]}, ${nums[j]} ,${nums[k]}`] === undefined)
            result.push(nums[i], nums[j], nums[k]);
        }
      }
    }
  }
};
