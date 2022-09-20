const removeElement = (array, value) => {
  let j = array.length - 1;
  let i = 0;

  while (i != j) {
    if (array[i] != value) {
      i++;
    } else if (array[j] == value) {
      j--;
    } else {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      j--;
      i++;
    }
  }
  return array;
};

let ans = removeElement([4, 7, 5, 8, 7, 4, 7, 8, 4, 8, 7, 5], 4);

console.log(ans);
