const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];

    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
};

let arr = [24, 26, 35, 22];
insertionSort(arr);
console.log(arr);
