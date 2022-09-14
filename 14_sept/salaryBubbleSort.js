function bubblesort(arr, k) {
  for (let i = 0; i < arr.length - 1; i++) {
    let flag = false;

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j].salary > arr[j + 1].salary) {
        flag = true;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (!flag) break;
  }
  console.log(arr[arr.length - k]);
  console.log(arr);
}

let arr = [
  {
    name: "Ashu",
    salary: 4010,
  },
  {
    name: "some",
    salary: 54010,
  },
  {
    name: "laura",
    salary: 2010,
  },
  {
    name: "jonas",
    salary: 1210,
  },
];

bubblesort(arr, 3);
