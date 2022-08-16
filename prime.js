const prime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return console.log("not prime");
    }
  }
  return console.log("prime");
};

prime(43);
