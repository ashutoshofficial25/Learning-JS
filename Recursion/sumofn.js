const sumofn = (number) => {
  if (n <= 1) return n;

  return n + sumofn(n - 1);
};

sumofn(5);
