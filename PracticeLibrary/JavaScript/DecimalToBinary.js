const DecimalToBinary = (number) => {
  let binary = 0;
  let rem,
    i = 1,
    step = 1;

  while (number != 0) {
    console.log(binary);
    let rem = number % 10;
    console.log(`Binary: ${rem} + ${binary * 10}`);
    binary = binary * 10 + rem;

    number = parseInt(number / 10);
  }
  console.log(binary);
};
DecimalToBinary(821);
