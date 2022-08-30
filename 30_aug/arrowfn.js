function add() {
  console.log(arguments);
}

// add(4, 5, 7, 6, 4, 5, 5);

const sub = () => {
  console.log(arguments);
};
// sub(4, 5, 5, 1, 1, 4, 5);

// IIFE

(function test() {
  console.log("hello");
})();

(function (name) {
  console.log("hello " + name);
})("cat");
