// const sumOfN = (num) => {
//   let sum = 0;
//   temp = num;
//   while (temp != 0) {
//     let rem = temp % 10;
//     sum = sum + rem;
//     temp = parseInt(temp / 10);
//   }
//   console.log(sum);
// };
// sumOfN(95785);

const sumOfNum = (num) => {
  if (num.toString().length == 2) {
    return console.log("not possible");
  } else {
    num1 = num.toString().slice(1, -1) * 1;
    temp = num1;
    let sum = 0;
    while (temp != 0) {
      let rem = temp % 10;
      sum = sum + rem;
      temp = parseInt(temp / 10);
    }
    console.log(sum);
  }
};
sumOfNum(4333);
