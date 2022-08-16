let small = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHILKLMNOPQRSTUVWZYZ";

const lowToUp = () => {};

//Efficient Way
let alphabed = {
  a: "A",
  b: "B",
  c: "C",
  d: "D",
  e: "E",
  f: "F",
  g: "G",
  h: "H",
  i: "I",
  j: "J",
  k: "K",
  l: "L",
  m: "M",
  n: "N",
  o: "O",
  p: "P",
  q: "Q",
  r: "R",
  s: "S",
  t: "T",
  u: "U",
  v: "V",
  w: "W",
  x: "X",
  y: "Y",
  z: "Z ",
};

const lowerToUpper = (str) => {
  let arr = str.split("");

  let capArray = arr.map((leter) => alphabed[leter]);
  let ans = capArray.join("");
  console.log(ans);
};
