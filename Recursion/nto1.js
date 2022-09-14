const nto1 = (n) => {
  //Base condition
  if (n <= 0) return;

  console.log(n);
  nto1(n - 1);
};

nto1(5);
