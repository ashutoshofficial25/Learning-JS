const arr = ["a", "d", "z", "c"];

// 'a'.charCodeAt(0) to get ASCII value
arr.sort((l1, l2) => l1.charCodeAt(0) - l2.charCodeAt(0));
console.log(arr.sort());

const arr2 = ["a", "l", "z", "c", "f"];

const arrNum = [5, 4, 2, 7, 5];

const checkAge = (num) => {
  return num;
};

console.log(arrNum.find(checkAge));

// function curring
