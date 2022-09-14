const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let smallest = i;

    for (let j = i; j < array.length; j++) {
      if (array[smallest] > array[j]) {
        // change condition then it will reverse
        smallest = j;
      }
    }
    let temp = array[i];
    array[i] = array[smallest];
    array[smallest] = temp;
  }
};
let array = [4, 3, 2, 7, 5, 5];
selectionSort(array);
console.log(array);

// sir solutions

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let smallest = i;
//     for (let j = i; j < arr.length; j++) {
//       if (arr[j] < arr[smallest]) {
//         smallest = j;
//       }
//     }
//     let temp = arr[i];
//     arr[i] = arr[smallest];
//     arr[smallest] = temp;
//   }
// }

// let arr = [4, 3, 6, 2, 1];
// selectionSort(arr);
// console.log(arr);
