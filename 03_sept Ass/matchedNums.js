const matched = (array1, array2) => {};
function test(a1, a2) {
  let i = 0;
  let j = 0;

  let result = [];

  while (i < a1.length && j < a2.length) {
    if (a1[i] == a2[j]) {
      result.push(a1[i]);
      i++;
      j++;
    } else if (a1[i] > a2[j]) {
      j++;
    } else {
      i++;
    }
  }
  return result;
}
