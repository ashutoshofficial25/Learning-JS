//selection sort
//It is not a stable method

const swap = (array, first, second) => {
  let temp = array[first];
  array[first] = array[second];
  array[second] = temp;
};

const selectionSort = (nums) => {};

const array = [2, 4, 51, 1, 5, 6];

selectionSort(array);
console.log(array);
