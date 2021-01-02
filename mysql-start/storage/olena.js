// randFromArr by Olena 29-12-2020

function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function randFromArr(dateArray) {
  return dateArray[randInt(0, dateArray.length -1)];
};

function getOrders(count, dateArray, users) {
  let arr = [];
  for (let i = 0; i < count; i++) {
    let order = {};
    order.number = randInt(123, (323 + count));
    order.userid = randInt(1, users); // диапазон users id
    order.drinkid = randInt(1, 3); // напитки
    order.capid = randInt(1, 2); // емкости
    order.time = randFromArr(dateArray); 
    arr.push(order);
  };
  return arr;
};

module.exports = getOrders;