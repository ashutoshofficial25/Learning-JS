// function factorial(n) {
//   let fact = 1;
//   // use process.stdout.write("hello") to print the output
//   //implement your  logic here - you dont have to return anything, print the output here

//   for (let i = 1; i <= n; i++) {
//     fact = fact * i;
//   }
//   return fact;
// }
// console.log(factorial(parseInt(6)));

function algebra(a, b) {
  // use process.stdout.write("hello") to print the output
  //implement your  logic here - you dont have to return anything, print the output here

  return a * a + 2 * a * b + b * b;
}

console.log(algebra(parseInt(3), parseInt(2)));
