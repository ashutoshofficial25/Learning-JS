const nums = [2, 3, 4, 5, 6];

let num1 = nums.map((n) => n * 2);

function myMap(callBack) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result[i] = callBack(this[i]);
  }
  return result;
}

let mapped = nums.myMap((n) => n * 4);
console.log(mapped);
