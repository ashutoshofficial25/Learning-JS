const setZeros = (matrix) => {
  let row = matrix.length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        return { i, j };
      }
    }
  }
};

let ans = setZeros([
  [1, 2, 3],
  [4, 0, 8],
  [1, 2, 3],
]);

console.log(ans);
