let g = 0;
let t = 0;
let c = 0;

for (let ground = 1; ground <= 10; ground++) {
  g++;
  console.log("ground round", g);
  for (let table = 1; table <= 10; table++) {
    t++;
    console.log("table round", t);
    for (let chair = 1; chair <= 10; chair++) {
      c++;
      console.log("chair round ", c);
    }
  }
}

// let ground = 1;
// let table = 1;
// let chair = 1;

// while (ground <= 10) {
//   console.log("ground round", ground);
//   ground++;
//   while (table <= 10) {
//     console.log("table round", table);
//     table++;
//     while (chair <= 10) {
//       console.log("chair round ", chair);
//       chair++;
//     }
//   }
// }
