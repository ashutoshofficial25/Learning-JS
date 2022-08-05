// Array basic concepts.........

let fruits = ["mango", "banana", "apple", "papaya"];

let mango = fruits[0];

let litchi = "litchi";

fruits.push(litchi); // add as last element of array
console.log(fruits);

fruits.pop(); // remove last element of array
console.log(fruits);

fruits.shift(); // remove 0th element from array
console.log(fruits);

fruits.unshift("some "); // add element at 0th position
console.log(fruits);
