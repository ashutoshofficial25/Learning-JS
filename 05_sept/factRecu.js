//

const fact = (m) => {
  if (m == 0) return 1;
  if (m < 3) return m;

  return m * fact(m - 1);
};

// console.log(fact(2));

//Fibonacci series is sum of previous two digits
const fibonaci = (n) => {
  if (n == 0 || n == 1) return n;
  return fibonaci(n - 1) + fibonaci(n - 2);
};

// fast way

const fib = (n) => {
  if (n == 1 || n == 0) return n;

  let n1 = 0;
  let n2 = 1;
  let n3;
  for (let i = 2; i <= n; i++) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
  return n3;
};
// console.log(fib(100));

// /increasing number with -

const incre = (n) => {
  if (n == 0) return;

  incre(n - 1);

  console.log(n);
};
// incre(5);

// Decreaing number withot -
function printNTo1(n) {
  function test(x) {
    if (x == n + 1) {
      return;
    }

    test(x + 1);
    console.log(x);
  }
  test(1);
}

printNTo1(10);
