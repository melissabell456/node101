#!/usr/bin/env node

const [,, ... userEntries] = process.argv;


let total = 0;
for (let digit of userEntries) {
  total = parseInt(total) + parseInt(digit);
}
console.log(total);

let getTotal = () => {
  let toInt = userEntries.map( (entry) => parseInt(entry));
  let total2 = toInt.reduce( (prev, curr) => prev + curr );
  console.log(total2);
};

userEntries.length > 0 ? getTotal(userEntries) : console.log(0);