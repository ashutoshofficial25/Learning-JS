let person = {
  name: "animal",
  varity: "mammals",
};

console.log(person);

person.name = "dog";

person.address = "indira-nagar";
person.pin = "451";
// person.1 = '' error

person[1] = "working";

let status = "single";

person.status = status;

console.log(person);

//dynamic accessing objects...........//
console.log(person["name"]);

let query = "status";

console.log(person[query]);

const product = {
  name: "Iphone",
  price: 125040,
  model: "14 pro max",
  storage: "128gb",
};

let buy = prompt("Please enter what do you want to know about Iphone 14");

const keys = Object.keys(product);

for (let i = 0; i < keys.length; i++) {
  if (buy != keys[i]) {
    alert("Chutia ho kya!....");
  } else {
    alert(product[buy]);
  }
}

for (let key in product) {
  console.log(key);
}

for (let key of Object.key(product)) {
  console.log(key);
}

function test() {
  let person = {
    name: "Prashant",
    FavFruits: ["Banana", "Chiku"],
    hobbies: ["Running", "Reading"],
    address: {
      street: "Canol road",
      landmark: "E-Square",
      mob: [123, 456],
    },
  };

  for (let key in person) {
    if (typeof person[key] == "object") {
      for (let key1 in person[key]) {
        console.log(person[key][key1]);
      }
    } else {
      console.log(person[key]);
    }
  }
}
