let arr = [-5, 3, -4, 88, -9, -10, 21, 5, 6];

let neg = [];
let pos = [];

for (let num of arr) {
  if (num < 0) neg.push(num);
  else pos.push(num);
}

// arr = pos;
// for (let num of neg) {
//   arr.push(num);
// }

//Two pointer method

let i = 0;
let j = arr.length - 1;

while (i != j) {
  if (arr[j] < 0) {
    j--;
  } else if (arr[i] > 0) {
    i++;
  } else {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
}
console.log(arr);
