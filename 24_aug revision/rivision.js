// reduce f

const array = [2, 4, 5, 6];

let num = array.reduce((prev, next) => prev + next);
console.log(num);

//Map Reduce Filter - Array Methods, only works on Arrays

//How to travel array using for loop
let nums = [1, 2, 3, 4, 5];

for (let i = 0; i < nums.length; i++) {
  //console.log(nums[i]);
}
//If we want to create a new array, where the elements are double of nums array above,
//we can use a simple for loop to iterate over the array and multiply array elements with 2 and store
//in result array

let result = [];

for (let i = 0; i < nums.length; i++) {
  result.push(nums[i] * 2);
}

//Map
//From ES6 - 2015 JS version we got a new method/function called 'map' for the above use case
//map is a higher order function is used to transform one array to another array, ex: doubling the nums array
//map does not modify existing array but creates and returns new array
//it uses for loop just like above behind the scene

//consider small function which doubles whatever input is given
function double(n) {
  return n * 2;
}

let resultUsingMap = nums.map(double);

//Filter
//Just like map, it exists only on array
//Used to filter elements out of an array
//If the small function passed to filter(higher order function) when called with an element
//of the array return true, the element is retained in the result array, else it will be ignored.

function isEven(n) {
  return n % 2 == 0;
}

let resultUsingFilter = nums.filter(isEven);

//Instead of creating function outside, you can create call back function on the spot.

let resultUsingMapOnTheSpot = nums.map(function (n) {
  return n * 2;
});

let resultUsingFilterOnTheSpot = nums.filter(function (n) {
  return n % 2 == 0;
});

//Reduce
//How to reduce an array elements to single value using a simple loop

let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum = sum + nums[i];
}

//Same thing above can  be done using reduce
function add(carry, n) {
  return carry + n;
}

let reduceResult = nums.reduce(add);

let resultResultOnTheSpot = nums.reduce((sum, n) => sum + n);
