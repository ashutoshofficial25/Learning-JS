const revrseArr = (arr) => {
  let temp = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    temp.push(arr[i]);
  }

  return (arr = temp);
};

let arr = [1, 2, 3, 4, 5];

console.log(revrseArr(arr));
