//Pure functions

let student = {
  name: "ashok",
  marks: [100, 20, 25],
};

function calcTotal(s) {
  let total = s.marks.reduce((carry, mark) => carry + mark);
  return total;
}

//==========================

//Impure functions

function calcTotalHacked(s) {
  s.marks = s.marks.map((mark) => 100);
  let total = s.marks.reduce((carry, mark) => carry + mark);
  return total;
}

let arabianSea = "h20";

function india() {
  arabianSea = arabianSea + "CaSO4";
}

function usa() {
  arabianSea = arabianSea + "HCl";
}

///closure

function simpleTax(income, percentage) {
  return (income * percentage) / 100;
}

function createTaxCalculator(taxPercentage) {
  let adminCharges = 500;
  return function (income) {
    return (income * taxPercentage) / 100 + adminCharges;
  };
}
