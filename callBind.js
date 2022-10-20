const person = {
  firstName: "Ashutosh",
  lastname: "Maurya",
};

function printName(hometown) {
  console.log(this.firstName + " " + this.lastname + " " + hometown);
}
const person2 = {
  firstName: "Raj",
  lastname: "Maurya",
};

//function borrowig
printName.call(person, "Lucknow");
printName.call(person2, "Lucknow");

//Apply method
printName.apply(person2, ["Lucknow"]);

//bind method

let printFullName = printName.bind(person, "Mau");
console.log(printFullName);
printFullName();
