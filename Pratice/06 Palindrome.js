const palindrome = (number) => {
  let temp = number;
  let reverseNum = 0;

  while (temp > 0) {
    let rem = temp % 10;
    reverseNum = reverseNum * 10 + rem;
    temp = parseInt(temp / 10);
  }

  number == reverseNum ? console.log(true) : console.log(false);
};

palindrome(121);
