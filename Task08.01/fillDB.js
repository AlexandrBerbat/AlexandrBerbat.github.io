const mysql = require('mysql2/promise');
const { user } = require('./config/mysql.coffeshop');
const config = require('./config/mysql.coffeshop');

const USERSQTY = 300; // 300 
const ORDERSQTY = 1000;  // 5000

// users
const getUsersArr = require('./storage/maks');        // +
const getPassArr = require('./storage/liubov');
const getAddrArr = require('./storage/oleg');         // +
const getTelArr = require('./storage/vlad');          // +

// orders
const getDateArr = require('./storage/flexander');    // +
const getOrders = require('./storage/olena')         // +

// console.log(getDateArr('2019-01-01', '2019-02-01', 12));


const fillUsers = async () => {
  try {
    console.time('fill Users time');

    passArr = getPassArr(8, USERSQTY); // 8- длина пароля
    addrArr = getAddrArr(USERSQTY);
    telArr = getTelArr(USERSQTY);
    usersArr = getUsersArr(USERSQTY);

    const con = await mysql.createConnection(config);

    for (let i = 0; i < USERSQTY; i++) {
      const query = 'INSERT INTO users (name, passw, address, tel) VALUES (?, ?, ?, ?)';
      const bodyArr = [usersArr[i], passArr[i], addrArr[i], telArr[i]];
      console.log('bA:', bodyArr);
      const [rows, fields] = await con.execute(query, bodyArr);
    }
    
    con.end();
    console.timeEnd('fill Users time');
  } catch (err) {
    console.log('db mysql err:', err);
    con.end();
  }  
};


const fillOrders = async () => {
  try {
    console.time('fill time');

    let dateArr = getDateArr('2019-01-01', '2019-08-01', 30);
    let ordersArr = getOrders(ORDERSQTY, dateArr, USERSQTY)
      .map(elem => Object.values(elem));
    console.log('orders arr', ordersArr);

    const con = await mysql.createConnection(config);

    for (let i = 0; i < ORDERSQTY; i++) {
      const query = 'INSERT INTO orders (number, userid, drinkid, capid, time) VALUES (?, ?, ?, ?, ?)';
      const bodyArr = [ordersArr[i][0], ordersArr[i][1], ordersArr[i][2], ordersArr[i][3], ordersArr[i][4]];
      // console.log('bA:', bodyArr);
      const [rows, fields] = await con.execute(query, bodyArr);
    }
    
    con.end();
    console.timeEnd('fill time');
  } catch (err) {
    console.log('db mysql err:', err);
    con.end();
  }  
};

fillOrders();