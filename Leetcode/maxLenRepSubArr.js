const maxLen = (num1, num2) => {
  let result = [];

  for (let i = 0; i < num1.length; i++) {
    let matched = false;

    for (let j = 0; j < num2.length; j++) {
      if (num1[i] == num2[j]) {
        matched = true;
      }
    }

    if (matched == false) {
      result.push(num1[i]);
    }
  }
  console.log(result);
};
let nums1 = [1, 2, 3, 2, 1];
let nums2 = [3, 2, 1, 4, 7];

maxLen(nums1, nums2);
