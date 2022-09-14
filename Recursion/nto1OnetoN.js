const ntooneton = (n) => {
  //base condition
  if (n <= 0) return;

  console.log(n);
  ntooneton(n - 1);
  console.log(n);
};

ntooneton(5);
