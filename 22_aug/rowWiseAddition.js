const rowWiseAddition = (matrix) => {
  let row = matrix.length;

  for (let i = 0; i < row; i++) {
    let sum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[j][i];
    }
    console.log(sum);
  }
};

let matrix = [
  [1, 0, 0],
  [0, 2, 0],
  [9, 0, 1],
];

rowWiseAddition(matrix);

// Reduce method

const rowWiseAddition2 = (matrix) => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    sum = matrix[i].reduce((prev, next) => prev + next);
    console.log(sum);
  }
};

let matrix2 = [
  [1, 0, 3],
  [0, 2, 0],
  [9, 0, 1],
];

rowWiseAddition2(matrix);
