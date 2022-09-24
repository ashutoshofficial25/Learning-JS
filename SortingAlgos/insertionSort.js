//Insertion Sort//
//It is an inplace algorithm
const insertionSort = (nums) => {
  //array will only loop 1 times less than its last index means less than 2 less than its length

  for (let i = 0; i < nums.length - 1; i++) {
    //inner loop from i position to its 0th posttion
    for (let j = i; j > 0; j--) {
      if (nums[j] < nums[j - 1]) {
        let temp = nums[j];
        nums[j] = nums[j - 1];
        nums[j - 1] = temp;
      } else {
        //if previous element is not greater then it means it is already sorted.. then break
        break;
      }
    }
  }
};
let array = [20, 4, 5, 3, 7, 14, 5, 3, 15];
insertionSort(array);
console.log(array);
