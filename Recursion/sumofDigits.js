// concept == 1245=   1 + 2+ 4 +5...
// 1 + fun(245) | 2 + fun(45) ....

const sumofN = (number) => {
  if (n <= 1) return n;

  return (n % 10) + sumofN(parseInt(number / 10));
};
