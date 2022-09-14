function findLexicographic(n) {
  let sol = [];
  lexNumbers(1, n, sol);
  return sol;
}

function lexNumbers(temp, n, sol) {
  if (temp > n) return;
  sol.push(temp);
  lexNumbers(temp * 10, n, sol);
  if (temp % 10 !== 9) lexNumbers(temp + 1, n, sol);
}

findLexicographic(15);
