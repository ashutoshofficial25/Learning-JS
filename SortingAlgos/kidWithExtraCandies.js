const kidsWithCandies = function (candies, extraCandies) {
  let candie = candies.map((item) => item + extraCandies);

  let flag = false;

  for (let i = 0; i < candie.length; i++) {
    for (let j = 1; j < candie.length; j++) {
      if (candie[i] > candie[j]) {
        flag = true;
      }
    }
    candies[i] = flag;
  }

  return candies;
};
let arr = [4, 2, 1, 1, 2];
console.log(kidsWithCandies(arr, 2));
