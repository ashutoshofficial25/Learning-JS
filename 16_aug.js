let arr = [4, -5, 1, -2, 3, 45, -35];
let positive = [];
let negative = [];

// let num of nums
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 0) {
    positive.push(arr[i]);
  } else {
    negative.push(arr[i]);
  }
}

// console.log(positive);
// console.log(negative);

// Prime Number
// const isPrime = (number) => {
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       return false;
//     }
//   }
//   return true;
// };

function isPrime(x) {
  //logic to find prime
  for (let i = 2; i < x; i++) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
}

function printAllPrimeTillN(n) {
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

// printAllPrimeTillN(60);

// let i = 0;
// while (i < 10) {
//   if (i == 5) {
//     break;
//   }
//   console.log(i);

//   i++;
// }

// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }

const sum = (n) => {
  let temp = n;
  let sum = 0;

  while (temp != 0 && sum < 9) {
    let num = temp % 10;
    sum += num;
    // if (sum > 9) {
    //   break;
    // }

    temp = parseInt(temp / 10);
  }
  console.log(sum);
};

sum(1354);
