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

const medianSorted = (nums1, nums2) => {
  let array = merge(nums1, nums2);

  let length = array.length;
  let median = 0;

  if (length % 2 == 0) {
    mid1 = array.length / 2;
    mid2 = mid1 - 1;
    return (array[mid1] + array[mid2]) / 2;
  } else {
    let mid = Math.floor(array.length / 2);
    return array[mid];
  }
};

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let ans = medianSorted(arr1, arr2);
console.log(ans);
