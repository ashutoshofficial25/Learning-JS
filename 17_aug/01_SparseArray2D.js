const isSparsed = (arr) => {
  let count = 0;
  let totalelement = 0;
  for (let i = 0; i < arr.length; i++) {
    //for ramdom matrix use arr[i].length
    for (let j = 0; j < arr.length; j++) {
      totalelement++;
      if (arr[i][j] == 0) {
        count++;
      }
    }
  }
  if (count > totalelement / 2) {
    return "sparsed";
  } else {
    return "not sparsed";
  }
};

let array = [
  [0, 3, 0],
  [3, 0, 0],
  [0, 7, 0],
];

let ans = isSparsed(array);
console.log(ans);
