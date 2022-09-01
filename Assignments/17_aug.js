// Problem 1
// Requirements: "1) Given an array having 0,1 as input. We need to write a function that sorts the array in ascending order without using inbuilt sort function
// Input Array -> [0,1,1,0,1,0,0,1]
// Output -> [0,0,0,0,1,1,1,1]

const sortArray = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }

  // console.log(Object.keys(obj));

  for (let num in obj) {
    // console.log(Object.keys(obj));
  }
};

sortArray([0, 1, 1, 0, 1, 0, 0, 1]);
// sortArray([4, 1, 0, 1, 2, 4, 5, 2, 0]);

// Given 2D Array. A Magic square is a 2D array having n rows and n columns which will be having all elements as distinct and the sum of row, column or diagonal is equal to the same number.
// You need to check whether that array is a magic square or not

// const checkSum = (matrix) => {
//   let row = matrix.length;
//   let newarr = [];
//   let digonalSum = 0;
//   for (let i = 0; i < row; i++) {
//     let rowSum = 0;
//     let colSum = 0;

//     for (let j = 0; j < row; j++) {
//       rowSum += matrix[i][j];
//       colSum += matrix[j][i];
//       if (i == j) {
//         digonalSum += matrix[j][i];
//       }
//     }
//     if (rowSum !== colSum) {
//       return "not a magic matrix";
//     }
//   }
//   console.log(digonalSum);
//   return "magic matrix";
// };
// console.log(
//   checkSum([
//     [2, 2, 2],
//     [2, 5, 2],
//     [2, 2, 2],
//   ])
// );
