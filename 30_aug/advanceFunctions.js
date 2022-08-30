// Composition Function

const sum = (num1, num2) => n1 + n2;
const mul = (num1, num2) => n1 * n2;

//here is fucntion composition
let result = add(100, mul(4, 5));

// Curring Concept =====>

const name = (nam) => {
  return (age) => {
    console.log(`name is ${nam} and age is ${age}`);
  };
};

name("some")(45);

// Ordanury add function

const add = (a, b, c) => {
  return a + b + c;
};

const curryAdd = (sum) => {
  return (a) => {
    return (b) => {
      return (c) => {
        return sum(a, b, c);
      };
    };
  };
};

const addition = curryAdd(add);

//we like this because this is return function
addition(4)(5)(6);
