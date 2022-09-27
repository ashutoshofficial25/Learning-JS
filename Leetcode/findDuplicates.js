var findDuplicates = function (nums) {
  const swap = (array, first, second) => {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
  };

  //range is 1 to n so Cylic sort
  let i = 0;

  while (i < nums.length) {
    let correctIndex = nums[i] - 1;
    if (nums[i] != nums[correctIndex]) {
      swap(nums, i, correctIndex);
    } else {
      i++;
    }
  }
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      arr.push(nums[i]);
    }
  }
  return arr;
};
