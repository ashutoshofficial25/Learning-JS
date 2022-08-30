const anagram = (str1, str2) => {
  if (str1.length != str2.length) {
    return false;
  }

  let map = {};

  for (let char of str1) {
    map[char] = (map[char] || 0) + 1;
  }

  for (let char of str2) {
    if (map[char]) {
      map[char] = map[char] - 1;
    } else {
      return false;
    }
  }

  return true;
};
// costly method

function anagram(str1, str2) {
  if (str1.length != str2.length) return false;

  let arr1 = str1.split("");
  arr1.sort((l1, l2) => l1.charCodeAt(0) - l2.charCodeAt(0));

  let arr2 = str2.split("");
  arr2.sort((l1, l2) => l1.charCodeAt(0) - l2.charCodeAt(0));

  str1 = arr1.join("");
  str2 = arr2.join("");
  if (str1 == str2) {
    return true;
  }
  return false;
}
