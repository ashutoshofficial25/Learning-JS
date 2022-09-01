let nums = [1, 7, 3, 6, 5, 6];

const findPivot = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let leftSum = 0;

    for (let j = 0; j <= i - 1; j++) {
      leftSum += nums[j];
    }

    let rightSum = 0;

    for (let k = i + 1; k < nums.length; k++) {
      rightSum += nums[k];
    }

    if (leftSum == rightSum) {
      return i;
    }
  }

  return -1;
};

console.log(findPivot(nums));
