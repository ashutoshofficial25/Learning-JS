const calc = (num1, num2, operation) => {
  switch (operation) {
    case "add":
      return console.log(num1 + num2);

    case "sub":
      return console.log(num1 - num2);

    case "multi":
      return console.log(num1 * num2);
    case "divi":
      return console.log(num1 / num2);

    default:
      return console.log("Something went wrong");
  }
};

calc(10, 20, "add");
calc(30, 20, "sub");
calc(200, 20, "multi");
calc(200, 20, "divi");
