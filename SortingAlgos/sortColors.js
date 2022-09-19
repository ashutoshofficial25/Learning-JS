var sortColors = function (nums) {
  //in-place so we use insertion sort

  const swap = (array, first, second) => {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
  };

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (nums[j] < nums[j - 1]) {
        swap(nums, j, j - 1);
      } else {
        break;
      }
    }
  }

  return nums;
};
let arr = [2, 0, 2, 1, 1, 0];

console.log(sortColors(arr));
