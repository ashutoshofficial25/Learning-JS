//leet 442

const findAllDuplicate = (nums) => {
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

  let dup = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      dup.push(nums[i]);
    }
  }

  return dup;
};

const arr = [4, 3, 2, 7, 8, 2, 3, 1];

console.log(findAllDuplicate(arr));
