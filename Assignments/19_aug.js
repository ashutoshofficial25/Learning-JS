// Requirements: "1. Write an efficient algorithm to search a value in a 2D matrix in which the rows are in sorted order and the first integer of each row is greater than the last integer of the previous row.

// 2. Find the row index which has maximum no. of unique elements in a matrix efficiently.

const containsDuplicate = (nums) => {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = (obj[nums[i]] || 0) + 1;
  }
  for (let keys in obj) {
    if (obj[keys] > 1) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 1, 3, 4, 2, 22]));
