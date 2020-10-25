/* eslint-disable linebreak-style */
const calc = require('./calc');


// console.log(calc[0].mass);

calc.forEach((item) => {
  console.log(`${item.name}:${item.mass}`);
});