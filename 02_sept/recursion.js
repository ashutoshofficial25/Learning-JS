// Normal we do
const print1toN = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
};
//Using recursion

const print = (n) => {
  if (n == 0) return;

  console.log(n);
  print(n - 1);
};
print(5);

const fact = (n) => {
  if (n == 1) return 1;

  console.log(n);
  return n * fact(n - 1);
};
