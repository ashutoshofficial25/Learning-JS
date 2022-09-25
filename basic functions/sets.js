let set = new Set([1, 2, 4, 5, 5]);
// let err = new Set(1, 2, 3, 4, 5); // Gives an error

// to add new elements in set
set.add(8);

set.forEach(function (value) {
  // console.log(value);
});
console.log(set.values()); // Returns [object Set Iterator]

set.delete(5);

set.has(5); // returns a boolean

let size = set.size;
console.log(size);
