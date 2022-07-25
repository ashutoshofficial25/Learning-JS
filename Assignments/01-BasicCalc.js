const calculator = (num1, num2, operation) => {
  switch (operation) {
    case "add":
      return console.log(num1 + num2);
    case "sub":
      return console.log(num1 - num2);

    case "multiply":
      return console.log(num1 * num2);

    case "division":
      return console.log(num1 / num2);

    default:
      return console.log("Please enter right values");
  }
};

calculator(40, 20, "add");
calculator(520, 120, "sub");
calculator(45, 20, "multiply");
calculator(4020, 20, "division");

