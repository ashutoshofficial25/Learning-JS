const lcm = (num1, num2) => {
  let greater;
  num1 > num2 ? (greater = num1) : (greater = num2);

  while (true) {
    if (greater % num1 == 0 && greater % num2 == 0) {
      return console.log(greater);
    }
    greater++;
  }
};

lcm(625, 530);
