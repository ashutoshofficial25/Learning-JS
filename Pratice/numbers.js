//JS mistry

let test1 = 0.2 - 0.1;
let test2 = 0.3 - 0.2;
// console.log(test1 === test2);

let variable = "outside function";
const diff = () => {
  let variable = "inside function";
  if (true) {
    let variable = "inside if block";
  }
};
diff();
console.log(variable);

let variable2 = "outside function";
const diff2 = () => {
  var variable2 = "inside function of dif2";
  if (true) {
    variable2 = "inside if block";
  }
  console.log(variable2);
};
diff2();
console.log(variable2);

var variable3 = "outside function";
const diff3 = () => {
  variable3 = "inside function";
  if (true) {
    variable2 = "";
    variable3 = "inside if block";
  }
};
diff3();
console.log(variable3);

// foo(4, 5);
// function foo(x, y) {
//   return x + y;
// }

// const foo = (x, y) => {
//   return x + y;
// };

function scope1() {
  //scope 1

  function add(a, b) {
    return a + b;
  }
  add(2, 2);
  return add;
}
