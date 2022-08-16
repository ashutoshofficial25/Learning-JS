const pyramid = (num) => {
  for (let i = 1; i <= num; i++) {
    let str = printSpace(i - 1);

    for (let j = i; j <= num; j++) {
      str += j + " ";
    }
    //print i-1 space

    console.log(str);
  }
};

pyramid(5);

function printSpace(n) {
  let str = "";
  for (let i = 0; i <= n; i++) {
    str += " ";
  }
  return str;
}

function design(n) {
  for (let i = 1; i <= n; i++) {
    let ans = " ";
    for (let k = 1; k < i; k++) {
      ans += " ";
    }
    for (let j = i; j <= n; j++) {
      ans += j + " ";
    }
    console.log(ans);
  }
}
design(6);
