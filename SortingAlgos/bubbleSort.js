// Time Compexity for this algo is : O(N^2)
// Not stable
// Stability: means when two valuesa are same .. there position should not be changed during the sorting

const bubbleSort = (array) => {
  //run the steps n-1 times
  let swapped = false;
  for (let i = 0; i < array.length - 1; i++) {
    //for each step, max item will be come at the last respective index
    for (let j = 1; j < array.length - i; j++) {
      //swap if the item is smaller than the previous item
      if (array[j] < array[j - 1]) {
        //swap
        swapped = true;
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
    // if you did not swap for a particular value of i , it means array is sorted hence stop the program

    if (!swapped) break; // if swappwd value is false then return
  }
};

let arr = [5, 4, 3, 2, 1];

bubbleSort(arr);
