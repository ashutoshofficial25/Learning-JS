//Merge sort stability

// const divide = (arr) => {
//   if (arr.length == 1) {
//     console.log(arr);
//     return;
//   }

//   let mid = Math.floor(arr.length / 2);

//   divide(arr.slice(0, mid));
//   divide(arr.slice(mid));
// };

const mergeSort = (arr) => {
  if (arr.length == 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

const merge = (arr1, arr2) => {
  let result = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
};

let arr1 = [5, 6, 7, 8];
let arr2 = [1, 2, 3, 4];

let arr = [4, 1, 2, 5, 87, 9, 6, 2, 54];
// console.log(merge(arr1, arr2));

// const arr = [5, 1, 2, 4, 6, 3];

mergeSort(arr);

console.log(arr);
