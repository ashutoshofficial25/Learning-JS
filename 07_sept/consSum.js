function sum(arr) {
  if (arr.length == 1) {
    return;
  }
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i] + arr[i + 1]);
  }

  sum(newArr);
  console.log(newArr);
}
