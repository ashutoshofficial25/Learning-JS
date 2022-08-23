const colWiseAddition = (matrix) => {
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

colWiseAddition(matrix);
