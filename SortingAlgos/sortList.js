var sortList = function (head) {
  for (let i = 0; i < head.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (head[j] < head[j - 1]) {
        let temp = head[j];
        head[j] = head[j - 1];
        head[j - 1] = temp;
      } else {
        break;
      }
    }
  }

  return head;
};
let arr = [4, 2, 1, 3];

sortList(arr);
console.log(arr);
