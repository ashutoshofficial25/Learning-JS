function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }

  let pivot = start;
  let count = 0;
  let found = -1;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] <= arr[pivot]) {
      if (found != -1) {
        swap(arr, i, found);
        found++;
      }
      count++;
    } else if (found == -1) {
      found = i;
    }
  }

  swap(arr, pivot, pivot + count);
  quickSort(arr, start, pivot + count - 1);
  quickSort(arr, pivot + count + 1, end);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [45, 1, 2, 8, 3, 5, 90, 4, 23, 78];
quickSort(arr, 0, 9);
