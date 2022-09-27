const trangleSum = (array) => {
  if (array.length == 1) return array;

  let newArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArr.push(array[i] + array[i + 1]);
  }

  console.log(array);
  return trangleSum(newArr);
};

let array = [1, 2, 3, 4, 5];
let sum = trangleSum(array);

console.log(sum);
