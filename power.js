const pow = (num, power) => {
  let result = 1;
  for (let i = 1; i <= power; i++) {
    result = result * num;
  }
  console.log(result);
};
pow(2, 5);
