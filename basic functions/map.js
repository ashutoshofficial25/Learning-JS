//creating new map

let map = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

map.set("apples", 400);

let ban = map.get("bananas");

let iterator = map.entries();
//output of iterator
//  [Map Entries] {
//   [ 'apples', 400 ],
//   [ 'bananas', 300 ],
//   [ 'oranges', 200 ]
// }
iterator.next(); //{ value: [ 'apples', 400 ], done: false }

map.delete("oranges");

console.log(parseInt("123dsfd"));
