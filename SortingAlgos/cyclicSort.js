//Cyclic Sort
//Important => NOTE:- for cyclic sort array must be from 1 to n.
//this sorting time compelxicty is =>  O(n)

//index by index check it is at correct index or not.. if not then swap with it's correct index
const swap = (array, first, second) => {
  let temp = array[first];
  array[first] = array[second];
  array[second] = temp;
};

const cyclicSort = (nums) => {
  let i = 0;
  while (i < nums.length) {
    let correctIndex = nums[i] - 1;
    if (nums[i] != nums[correctIndex]) {
      swap(nums, i, correctIndex);
    } else {
      i++;
    }
  }
};

let array = [3, 2, 3, 1, 2, 4, 5, 5, 6];

cyclicSort(array);

console.log(array);
