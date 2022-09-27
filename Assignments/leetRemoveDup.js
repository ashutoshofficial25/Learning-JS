const removeDuplicate = (nums) => {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }
  let arr = [];
  for (let keys in map) {
    arr.push(map[keys]);
  }
  return arr;
};

let ans = removeDuplicate([1, 1, 2]);

console.log(ans);
