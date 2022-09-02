function add(a, b) {
  return a + b;
}

add(4, 8);

function add(a) {
  return function (b) {
    return a + b;
  };
}

add(3)(4);

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

add(4)(5)(6);
