const getUniqueElement = (array) => {
  let uniqueNum = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 10) {
      uniqueNum.push(array[i]);
    }
  }
  if (uniqueNum.length == 1) return uniqueNum[0];
  return false;
};

// console.log(getUniqueElement([44, 45, 5]));

getUniqueMatrix = (matrix) => {
  let row = matrix.length;
  let unique = [];
  for (let i = 0; i < row; i++) {
    if (getUniqueElement(matrix[i])) {
      unique.push(getUniqueElement(matrix[i]));
    }
  }
  return unique;
};

let mat = [
  [4, 55, 66],
  [5, 21, 63],
  [55, 22, 5],
];
// console.log(getUniqueMatrix(mat));

//Working but some changes required
// need more optmizaion in code..
// solution using map function

const getUnique = (matrix) => {
  let map = {};
  count = 1;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      map[matrix[i][j]] = (map[matrix[i][j]] || 0) + 1;
    }
  }
  return map;
};

let res = getUnique(mat);

for (let keys in res) {
  if (res[keys] == 1) {
    console.log(keys);
  }
}
