const factorail = (number) => {
  if (n <= 1) return n;

  return n * factorail(n - 1);
};

factorail(5);
