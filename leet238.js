const productOfSum = (nums) => {
  let prefix = [1];

  let previous = nums[0];
  for (let i = 1; i < nums.length; i++) {
    prefix.push(previous);
    previous = previous * nums[i];
  }

  let post = [];
  // nums.at(-1) to get last element
  post[nums.length - 1] = 1;
  for (let i = 0; i < nums.length - 2; i--) {
    post[i];
  }
};
