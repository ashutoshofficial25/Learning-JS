//concept :
// 1824 = 4 + fun(182) | 2 + fun(18) .........

let sum = 0;

const reverse = (n) => {
  if (n <= 1) return n;

  let rem = n % 10;
  sum = sum * 10 + rem;

  reverse(n / 10);
};

const reverse2 = (n) => {
  if (n <= 1) return n;

  return function helper() {};

  let rem = n % 10;
  sum = sum * 10 + rem;

  reverse2(n / 10);
};
