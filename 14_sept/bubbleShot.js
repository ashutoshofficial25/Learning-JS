const bubbleShot = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};

let arr = [4, 3, 7, 2, 8, 6, 9];

bubbleShot(arr);
console.log(arr);

//both working fine
// Smarter version of sortedArray

function bubblesort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let flag = false;

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = true;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (!flag) break;
  }
  console.log(arr);
}
bubblesort(arr);
