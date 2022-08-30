const sort = (input, ref) => {
  let result = [];

  for (let num of ref) {
    for (let num1 of input) {
      if (num1 == num) {
        result.push(num1);
      }
    }
  }
  return result;
};

//hashmap

let reference1 = [2, 3, 5, 6, 4, 8, 1, 7, 9, 0];
let input1 = [1, 4, 9, 5, 6, 0, 7, 2, 3, 2, 9];

let map = {
  2: 0,
  3: 1,
  5: 2,
  6: 3,
  4: 4,
  8: 5,
  1: 6,
  7: 7,
  9: 8,
  0: 9,
};

input.sort((n1, n2) => map[n1] - map[n2]);
