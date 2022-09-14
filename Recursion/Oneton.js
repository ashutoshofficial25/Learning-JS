const oneton = (n) => {
  //base condition
  if (n <= 0) return;

  oneton(n - 1);
  console.log(n);
};

oneton(10);
