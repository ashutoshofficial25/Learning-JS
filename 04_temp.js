const play = (temp, isRaining) => {
  if (temp > 20 && temp < 25 && !isRaining) {
    console.log("go out side and play");
  } else if (isRaining && temp > 18 && temp < 20) {
    console.log("play inside");
  } else {
    console.log("should not go out of home");
  }
};

// play(19, true);

// condition ? true : false

let marks = 30;

marks >= 40 ? console.log("passed") : console.log("fail");

let age = 10;

age >= 18
  ? console.log("eligible to vote")
  : console.log("Not eligible to vote");

let num = -3;
switch (true) {
  case num == 0:
    console.log("number is zero");
    break;
  case num > 0:
    console.log("number is positive");
    break;
  case num < 0:
    console.log("number is negative");
}

let num1 = 45;
let num2 = 9;
let temp = 0;

let number = num1 < num2 ? num1 : num2;

while (number >= 1) {
  if (num1 % number == 0 && num2 % number == 0) {
    console.log(number);
    break;
  }
  temp--;
}

//my version
// for (let i = 0; i <= num1 && i <= num2; i++) {
//   if (num1 % i == 0 && num2 % i == 0) {
//     temp = i;
//   }
// }
// console.log(temp);

let str = "catdograt";

let length = str.length;

let result = "";

for (let chandresh = length - 1; chandresh >= 0; chandresh--) {
  result = result + str[chandresh];
}

console.log(result);
