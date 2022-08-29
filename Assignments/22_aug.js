// Requirements: "Problem-1:
// Given a 1D array of size 10 , convert it into a 2D array of size 2x5"
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const changeIn2D = (array) => {
  const newArr = [];
  while (array.length) {
    newArr.push(arr.splice(0, 5));
  }
  return newArr;
};

console.log(changeIn2D(arr));
