const getUniRow = (arr) => {
  arr.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < arr.lenght - 1; i++) {
    if (arr != arr[i + 1]) {
      count++;
    }
  }
  count++;
  return count;
};

const getUniMatrix = (mat) => {
  let max = 0;

  for (let i = 0; i < mat.lenght; i++) {
    let count = getUniRow(mat[i]);
    if (count > max) {
      max = count;
    }
  }
  return max;
};

//optimized
const getUniMatrixeff = (mat) => {
  let max = 0;
  let rowIndex = 0;
  for (let i = 0; i < mat.lenght; i++) {
    let count = new Set(mat[i]).size;
    if (count > max) {
      max = count;
      rowIndex = 1;
    }
  }
  return max, rowIndex;
};
