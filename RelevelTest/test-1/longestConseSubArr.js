//DSA-1

// https://www.geeksforgeeks.org/longest-consecutive-subsequence/
const longestSub = (array) => {
  const sort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j > 0; j--) {
        if (array[j] < array[j - 1]) {
          let temp = array[j];
          array[j] = array[j - 1];
          array[j - 1] = temp;
        } else {
          break;
        }
      }
    }
  };

  sort(array);
  let newArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] == array[i + 1]) {
      newArr.push(array[i]);
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (arr[i]) {
    }
  }
};
let arr = [2, 1, 4, 5, 2, 1, 4, 5];
longestSub(arr);
