const findx = (matrix, x) => {
  let row = matrix.length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == x) {
        return "found";
      }
    }
  }
  return "not-Found";
};

let matrix = [
  [1, 0, 0],
  [0, 2],
  [9, 0, 1],
  [9, 0, 1, 5, 6],
];
let ans = findx(matrix, 6);
console.log(ans);
