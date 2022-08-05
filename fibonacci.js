const fibonacci = (num) => {
  let num1 = 1;
  let num2 = 1;
  let num3;
  while (num > 0) {
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
    num--;
  }
  console.log(num3);
};

fibonacci(3);

const fibonacci2 = (num) => {
  let num1 = 1;
  let num2 = 1;
  let num3;
  for (let i = 1; i <= num; num++) {
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
  }
  console.log(num3);
};
fibonacci2(3);
