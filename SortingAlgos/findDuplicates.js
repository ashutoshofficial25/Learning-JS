const findDuplicate = (nums) => {
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
  return nums;
};

const arr = [1, 3, 4, 2, 2];

findDuplicate(arr);
console.log(arr);
