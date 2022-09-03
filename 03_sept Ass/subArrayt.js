let nums = [1, 2, 3, 4];

for (let i = 0; i < nums.length; i++) {
  let sub = [nums[i]];
  console.log(sub);

  for (let j = i + 1; j < nums.length; j++) {
    sub.push(nums[j]);
    console.log(sub);
  }
}
