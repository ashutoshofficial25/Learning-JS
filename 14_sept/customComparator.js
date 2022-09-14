const customComaprator = (o1, o2) => {
  if (o1.age > o2.age) {
    return 1;
  } else if (o1.age < o2.age) {
    return -1;
  } else {
    return 0;
  }
};
