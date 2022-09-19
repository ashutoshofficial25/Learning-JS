//Insertion Sort
//It is a stable method to sort array
const swap = (array, first, second) => {
  let temp = array[first];
  array[first] = array[second];
  array[second] = temp;
};

const insertionSort = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (nums[j] < nums[j - 1]) {
        swap(nums, j, j - 1);
      } else {
        break;
      }
    }
  }
};

const array = [2, 0, 2, 1, 1, 0];

insertionSort(array);
console.log(array);
