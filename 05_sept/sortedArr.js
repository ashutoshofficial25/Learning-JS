const sortArr = (arr) => {
  const helper = (arr, i) => {
    if (i == arr.length) return true;

    if (arr[i] > arr[i + 1]) return false;

    return helper(arr, i + 1);
  };
  return helper(arr, 0);
};

//PAIR RECORSION
