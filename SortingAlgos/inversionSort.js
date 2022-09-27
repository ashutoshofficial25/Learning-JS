//Bruteforce method

const inversionSort = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (nums[i] < nums[j]) {
        count++;
      }
    }
  }
  return count;
};

//MergeSort
function mergeSort(arr, start, end) {
  if (start == end) {
    return 0;
  }

  let mid = Math.floor((start + end) / 2);
  let leftCount = mergeSort(arr, start, mid); // [8]
  let rightCount = mergeSort(arr, mid + 1, end); //[7]
  return merge(arr, start, mid, mid + 1, end) + leftCount + rightCount; // [7,8]
}

function merge(arr, s1, e1, s2, e2) {
  let result = [];
  let count = 0;

  let i = s1;
  let j = s2;

  while (i <= e1 && j <= e2) {
    if (arr[i] < arr[j]) {
      result.push(arr[i]);
      i++;
    } else {
      result.push(arr[j]);
      count += e1 - i + 1;
      j++;
    }
  }

  while (i <= e1) {
    result.push(arr[i]);
    i++;
  }

  while (j <= e2) {
    result.push(arr[j]);
    j++;
  }

  let k = 0;
  for (let i = s1; i <= e2; i++) {
    arr[i] = result[k];
    k++;
  }
  return count;
}
