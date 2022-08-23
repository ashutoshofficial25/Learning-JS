const isDignonal = (matrix) => {
  let row = matrix.length;
  let col = matrix[0].length;

  if (row != col) {
    return false;
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i !== j) {
        if (matrix[i][j] == 0) {
          continue;
        } else return false;
      }
    }
  }
  return true;
};

let matrix = [
  [1, 0, 0],
  [0, 2, 0],
  [9, 0, 1],
];

let ans = isDignonal(matrix);
console.log(ans);

// Sir Solution

function isDiagonalMat(mat) {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (i != j && mat[i][j] != 0) {
        return false;
      }
    }
  }
  return true;
}

let mat = [
  [0, 0, 0],
  [0, 0, 0],
  [6, 0, 0],
];

console.log(isDiagonalMat(mat));
