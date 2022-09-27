/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let mergedArr = [];

  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      mergedArr.push(nums1[i]);
      i++;
    } else {
      mergedArr.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    mergedArr.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    mergedArr.push(nums2[j]);
    j++;
  }

  if (mergedArr.length % 2 == 0) {
    let mid1 = mergedArr.length / 2;
    let mid2 = mid1 - 1;

    return (mergedArr[mid1] + mergedArr[mid2]) / 2;
  } else {
    let mid = Math.floor(mergedArr.length / 2);
    return mergedArr[mid];
  }
};
