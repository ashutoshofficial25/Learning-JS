// Get max in each row in Matrix
const isMax = (array) => {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    array[i];
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

const maxInEachRow = (matrix) => {
  let row = matrix.length;
  let max = [];
  for (let i = 0; i < row; i++) {
    max.push(isMax(matrix[i]));
  }
  return max;
};

let matrix = [
  [2, 5, 6],
  [4, 5, 8],
  [9, 45, 7, 78],
];

console.log(maxInEachRow(matrix));
