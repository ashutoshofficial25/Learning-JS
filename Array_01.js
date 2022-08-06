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

fruits.slice(2, 1);
console.log(fruits);

fruits.find((items) => console.log(items));

let Fruits = ["🍒", "🍉", "🍈", "🍒", "🍏", "🍍", "🍎", "🥭", "🍌"];

function findFruit(fruit) {
  for (let i = 0; i < fruits.length; i++) {
    if (fruit == fruits[i]) {
      return i;
    }
  }
  return -1;
}

while (true) {
  alert("Available fruits are:-");
  alert(Fruits);

  let request = prompt("Which fruits do you want to buy:");
  if (request == "exit") {
    break;
  }
  let index = findFruit(request);
  fruits.splice(index, 1);
  alert("Purchase completed");
}
