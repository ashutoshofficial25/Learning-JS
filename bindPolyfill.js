let name = {
  firstName: "Ashutosh",
  lastName: "Maurya",
};

let printName = function (town, state) {
  console.log(this.firstName + " ", this.lastName + " ", town, +" ", state);
};

let printMyName = printName.bind(name, "mau");
printMyName("up");

Function.prototype.myBind = function (...args) {
  let obj = this,
    params = args.slice(1);

  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};
let printMyName2 = printName.myBind(name, "mau");
printMyName("up");
