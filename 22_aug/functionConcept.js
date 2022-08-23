//Simple function
function add(n1, n2) {
  return n1 + n2;
}

//Function expression means writing with '=' sign, normal function and function expression both are same, but this is just not hoisted.
const sub = function (n1, n2) {
  return n1 - n2;
};

//Arrow function, almost similar to normal function/function expression, 'this' keyword works differently
const mul = (n1, n2) => {
  return n1 * n2;
};

//Arrow function having only one parameter/argument, does not need round () bracket in place of parameters.
const isEven = (n) => {
  return n % 2 == 0;
};

//Arrow function having only one statement, does not need {} curly brackets
//But if you remove {} brackets, then you cannot write return keyword because by default whatever single statement is written inside will be returned.
const isOdd = (n) => n % 2 != 0;

//Note: Callback function is a function that is passed to another function. You can consider it is a small function

//Higher Order Functions are nothing but functions which accepts another smaller function as its arguement.
//And the smaller function will be called/invoked inside the higher order function
//In the following, calculate is the higher order function and operate is a name of the parameter for which any callback function is passed.
function calculate(operate, n1, n2) {
  return operate(n1, n2); //Invoking call back function
}

//=========================================================//
