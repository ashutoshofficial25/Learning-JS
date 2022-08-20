const checkMatrix = () => {};

const multiplyMatrx = (m1, m2) => {
  let c = m1[0].length;
  let r = m2.length;

  if (c != r) {
    return false;
  }
  let result = [];
  for (let i = 0; i < m1.length; i++) {
    result[i] = [];
  }

  for (let i = 0; i < m1.length; i++) {
    for (let j = 0; j < m2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < m1[0].length; k++) {
        sum += m1[i][k] * m2[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
};

let a = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let b = [
  [1, 2, 3],
  [4, 5, 6],
];

let c = multiplyMatrx(a, b);

console.log(c);
