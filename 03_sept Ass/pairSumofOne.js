// o(n)2

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) return [i, j];
    }
  }
};

//O(n) solution
const twoSum2 = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]]) {
      console.log(i, map[target - nums[i]]);
    } else {
      map[nums[i]] = i;
    }
  }

  return map;
};

console.log(twoSum2([4, 5, 7, 9, 6], 4));
