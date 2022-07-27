//Integer literals

// Oxff => 255
// 0b, 0B;

//Floating point literals

/* 1.9
3.14

3.03e23 => 3.03 * 10 to the power 23
alt+ ahift + a
let billion = 1_000_000_000 not standardize */

//Arithmatic
// + - * / % **

Math.pow(3, 3);
Math.pow(3, 1 / 3);
Math.round(0.6);
Math.ceil(0.6); // maximum nearby 1
Math.floor(0.6); // lowest nearby 0

Math.abs(-5);
Math.min(4, 5, 5, 6, 3, 6);
Math.max(4, 5, 5, 6, 3, 6);

Math.random();

//ES6 new method

Math.cbrt(27);
Math.hypot(3, 4);

// console.log(Math.clz32(0xf));

//  Infinity , no errors , just Infinity

//divide by 0 ; it's just NaN

// console.log(Number.MAX_SAFE_INTEGER);
Number.isNaN(2);

// Number.parseInt("3a"); => 3

let s1 = 0.3 - 0.2; // 0.0999999
let s2 = 0.2 - 0.1;

console.log(s1 == s2);

//BigInt

let myBigInt = 123n;
