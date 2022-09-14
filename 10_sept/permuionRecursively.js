const permRecur = (result, arr, bag, map) => {
  if (bag.length == arr.length) {
    result.push(bag.join(""));
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!map[i]) {
      bag.push(arr[i]);
      map[i] = true;
      permRecur(result, arr, bag, map);
      bag.pop();
      map[i] = false;
    }
  }
  return result;
};
let str = "abcd";

let ans = permRecur([], str.split(""), [], {});

console.log(ans);


1. Time complexity is to simplify. 
2. Count the units to convert them into time.
3. Totally 3 types 
{ 1. Big oh notation O - this is enough,
2. Big omega notation,
3. Big tita notation
}
4. Big oh 'O' of 1 is the fastest.
// 5. While writing the Algorithm "Plan for the worst case" than "Best case" in time complexity.