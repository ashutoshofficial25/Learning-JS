let nums = [2, 4, 5, 7, [5, 4, 2]];

nums.flat();

let nums2 = [2, 4, 5, [4, 5, [2, 4, 5, 1]]];

// take how deep we want to go in this array

nums.flat(2);

let obj = {};

let obj2 = null;

// it always retuen last value

obj && obj2;

// '' falsy
// null falsy;
// undefined falsy
// 0 faly
let name = "";
if (name == false) {
  console.log("retrurns false");
}
if (name) {
  console.log("it will also true");
}

// -1 will returned true

"" == false; // return false
null == false; // returns false
undefined == false; // returns false
0 == false; // returns false

//TODO:

// Shorthand values
let a = 1;
let b = 2;

let c = a || b;
// return 1;
let a1 = 0;
let b1 = 1;

let c1 = a1 || b1;

//returns b1 = 1
let x = "" || "cat"; // return cat;

// && operator

let s = "" && "cat"; // retrurn ''

let z = 100 && 1000; // returns 1000
