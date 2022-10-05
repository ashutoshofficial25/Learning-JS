const binarySearch = (array, left, right, k) => {
  if (right >= left) {
    let mid = left + Math.floor((right - left) / 2);

    if (array[mid] == k) {
      return mid;
    }

    //left when searching element is lesser than array of mid
    if (array[mid] > k) {
      return binarySearch(array, left, mid - 1, k);
    }

    //right when searching element is greater than array if mid
    return binarySearch(array, mid + 1, right, k);
  }

  return -1;
};

let arr = [1, 2, 3, 4, 5];
let len = arr.length;

let searched = binarySearch(arr, 0, len - 1, 4);
console.log(searched);
