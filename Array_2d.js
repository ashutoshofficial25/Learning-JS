//Multidimentional arrays

let fruits = [["🍈", "🍉"], ["🍒", "🍓", "🍍"], ["🍎"], ["🍐", "🍊", "🍌"]];

for (let i = 0; i < fruits.length; i++) {
  for (let j = 0; j < fruits[i].length; j++) {
    console.log(
      `Fruit in The floor number ${i} in flat number ${j} is ${fruits[i][j]}`
    );
  }
}

const sum = [[4, 3], [2], [5, 8], [4, 2, 7, 8, 5]];

// console.log(sum[0][0]);
for (let i = 0; i < sum.length; i++) {
  // console.log(sum[i]);
  for (let j = 0; j < sum[i].length; j++) {
    console.log(`floor  ${i}  person  ${j} is ${sum[i][j]}`);
  }
}
