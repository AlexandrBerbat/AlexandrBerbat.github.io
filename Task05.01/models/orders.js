const mysql = require('mysql2/promise');
const config = require('../config/mysql.coffeshop');

const getOrdersJoinUsers = async (id) => {
  try {
    const con = await mysql.createConnection(config);
    console.log('connected succefully.');
    const query = `SELECT orders.id AS orderid, orders.userid, users.name, orders.time
    FROM orders
    RIGHT JOIN users
    ON orders.userid = users.id`;

    const [row, fields] = await con.execute(query);

    con.end();
    console.log('disconnected succefully.');

    // console.log('get user from model:', row);
    // console.log('db answer:', fields);
    return row;

  } catch (err) {
    console.log('catch err:', err);
    con.end();
  }

}


module.exports.get = getOrdersJoinUsers;