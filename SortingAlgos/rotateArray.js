const rotateArray = (nums, k) => {
  const swap = (array, first, second) => {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
  };
  let i = 0;
  let j = 0;
  while (i < k) {
    let newNum = nums;
    for (let j = i; j < nums.length; j++) {
      swap(nums, i, nums.length - 1);
    }
    i++;
  }
  return nums;
};

let arr = [1, 2, 3, 4, 5];

rotateArray(arr, 3);
console.log(arr);
