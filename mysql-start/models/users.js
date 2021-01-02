const mysql = require('mysql2/promise');
const config = require('../config/mysql.coffeshop');

const add = async (body) => {
  // name, pas, adr, tel
  try {
    const con = await mysql.createConnection(config);
    // console.log('connected succefully.'); 
    
    // if (ajv(body)) con.execute )
    
    const query = 'INSERT INTO users (name, passw, address, tel) VALUES (?, ?, ?, ?)';
    const bodyArr = Object.values(body);
    console.log('bA:', bodyArr);
    const [rows, fields] = await con.execute(query, bodyArr);
    con.end();

    return rows;
    
  } catch (err) {
    console.log('db mysql err:', err);
    con.end();
  }
}

const get = async (id) => {
  try {
    const con = await mysql.createConnection(config);
    // console.log('connected succefully.'); 
    const query = `SELECT name, tel FROM users WHERE id = ?`;

    const [row, fields] = await con.execute(query, [id]);

    con.end();

    console.log('get user from model:', row[0]);
    return row[0];

  } catch (err) {
    console.log('catch err:', err);
    con.end();
  }

}

module.exports.add = add;
module.exports.get = get;