const maxOccurance = (array) => {
  let map = {};

  for (let i = 0; i < array.length; i++) {
    map[array[i]] = (map[array[i]] || 0) + 1;
  }

  for (let key in map) {
    if (map[key] >= array.length / 2) {
      return key;
    }
  }

  return -1;
};

console.log(maxOccurance([4, 4, 4, 4, 4, 1, 54, 4, 1, 1]));

//2nd solution

let nums = [1, 2, 4, 2, 2, 8, 2, 8, 2, 2];

let maxCount = 0;

for (let i = 0; i < nums.length; i++) {
  let count = 0;
  for (let j = i; j < nums.length; j++) {
    if (nums[i] == nums[j]) {
      count++;
    }
  }
  if (count > maxCount) {
    maxCount = count;
  }
}

if (maxCount > nums.length / 2) {
  console.log(true);
} else {
  console.log(false);
}

// more efficient

function test(nums) {
  let map = {};

  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  for (let value of Object.values(map)) {
    if (value > nums.length / 2) {
      return true;
    }
  }
  return false;
}
