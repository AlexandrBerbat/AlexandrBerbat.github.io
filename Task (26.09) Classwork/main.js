const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand)
}

// arr = [];
// const LEN = 10;

// for(let i = 0; i < LEN; i++)
// {
//   arr.push(randomInt(-200, 200));
// }

// const ttt = (item) => {
//   return Math.abs(item);
// }

// const TOSYMB = (item) => {
//   return String(item).length;
// }

// const out = arr.map(ttt);
// const symb = out.map(TOSYMB);

// const TOPOS = (item) => {
//   if(item < 0)
//   {
//     return false;
//   }else
//   {
//     return true;
//   }
// }

const arr2 = [1, 2, 5, 7, 8, 9, 10, 11];

let amount = arr2.reduce((sum, item, index) => {
  if (item % 2 != 0) {
    return sum + index;
  } else {
    return sum;
  }
}, 0);

console.log(arr2);
console.log(amount);


// console.log(out);
// console.log(symb);


