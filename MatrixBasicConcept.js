// const matrix = [
//          c1  c2 c3
//  row-0   [1, 2, 3],
//  row-1   [4, 5, 6],
//  row-2   [7, 8, 9],
//   ];

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let rows = matrix.length;
let columns = matrix[0].length - 1;

for (let i = 0; i < rows; i++) {
  console.log(matrix[1][i]);
}
