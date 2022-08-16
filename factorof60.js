const factor = (n) => {
  if (n < 60) return false;
  let isZero = false;
  let sum = 0;

  while (n != 0) {
    let digit = n / 10;
    if (digit == 0 && isZero == false) {
      return (isZero = true);
    } else {
      let x;
    }
  }
};
