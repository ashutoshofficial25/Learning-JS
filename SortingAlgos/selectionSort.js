const selectonSort = (nums) => {
  //Outer Loop start form 0 index
  for (let i = 0; i < nums.length; i++) {
    //store the 1st element index : assume as minimim
    let element = i;

    //inner start form next element from i; : Because previous one  is sorted one by one
    for (let j = i + 1; j < nums.length; j++) {
      //if minimum element than previous found then change the minimum index value
      if (nums[element] > nums[j]) {
        element = j;
      }
    }

    // if swap the minimum with the starting index
    let temp = nums[i];
    nums[i] = nums[element];
    nums[element] = temp;
  }
};
let array = [20, 4, 5, 3, 7, 14, 5, 3, 15];
selectonSort(array);
console.log(array);
