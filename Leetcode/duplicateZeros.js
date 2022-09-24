const dupZeros = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j < i; j++) {}
  }
};
