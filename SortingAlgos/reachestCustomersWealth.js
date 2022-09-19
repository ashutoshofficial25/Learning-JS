const reachestWealth = (nums) => {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = 0; j < nums[i].length; j++) {
      sum = sum + nums[i][j];
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};

let arr = [
  [1, 2, 3, 4],
  [4, 5, 1, 4],
];
console.log(reachestWealth(arr));
