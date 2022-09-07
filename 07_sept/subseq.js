function printSubSeq(bag, i, arr) {
  if (i == arr.length) {
    console.log(bag);
    return;
  }

  bag.push(arr[i]);
  printSubSeq(bag, i + 1, arr);
  bag.pop();
  printSubSeq(bag, i + 1, arr);
}
