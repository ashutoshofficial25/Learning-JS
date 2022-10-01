const insertionSort = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (nums[j] < nums[j - 1]) {
        // [nums[j], (nums[j + 1] = nums[j + 1]), nums[j]];
        let temp = nums[j];
        nums[j] = nums[j - 1];
        nums[j - 1] = temp;
      } else {
        break;
      }
    }
  }
};
let arr = [5, 4, 3, 2, 1];
insertionSort(arr);

console.log(arr);
