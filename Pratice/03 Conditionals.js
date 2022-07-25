let marks = 40;

if (marks > 80) {
  console.log("grade a");
} else if (marks >= 60) {
  console.log("grade b");
} else if (marks >= 40) {
  console.log("grade c");
} else {
  console.log("fail");
}

let a = 10;
let b = 20;
let c = 30;

if (a < b && b < c) {
  return "increasing";
} else if (a > b && b > c) {
  return "decreasing";
} else {
  return "not both";
}
