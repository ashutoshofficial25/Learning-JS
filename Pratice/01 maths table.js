const table = (table, number) => {
  console.log(`Table of ${table} is: `);
  for (let i = 1; i <= number; i++) {
    console.log(`${table} * ${i} = ${table * i}`);
  }
};

table(20, 10);

//-----------------------------------

const table2 = (table) => {
  console.log(`Table of ${table} is: `);
  for (let i = 1; i <= 10; i++) {
    console.log(`${table} * ${i} = ${table * i}`);
  }
};

table2(20);
