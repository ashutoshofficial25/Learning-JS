//pluiOne

const plusOne = (digits) => {
  if (digits.length == 1)
    if (digits[digits.length - 2] !== 0) {
      let n = digits[digits.length - 1] + 1;
      digits[digits.length - 1] = n;
      return digits;
    }
  return "Leading zero";
};

const result = plusOne([9]);
console.log(result);
