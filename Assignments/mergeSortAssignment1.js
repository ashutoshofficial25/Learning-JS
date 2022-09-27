// "Q1: Can we devise a modification to merge sort where we can make it inplace.

// Yes we can but it will incrtease time complexicity of merge sort.

// Q2. Convert an array into another array where each element will be replaced with the number of elements that are smaller on the right side of the array to the element

const divide = (nums) => {
  if (nums.length == 1) {
    return nums;
  }

  let mid = Math.floor(nums.length / 2);

  let left = divide(nums.slice(0, mid));
  let right = divide(nums.slice(mid));

  return merge(left, right);
};

const merge = (nums1, nums2) => {
  let result = [];

  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1[i]) {
    result.push(nums1[i]);
    i++;
  }

  while (j < nums2[j]) {
    result.push(nums2[j]);
    j++;
  }
  return result;
};

let array = [5, 4, 7, 8, 9, 6, 5, 4, 7];

console.log(divide(array));
