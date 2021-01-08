const mysql = require('mysql2/promise');
const config = require('../config/mysql.coffeshop');

const get = async (id) => {
    try {
      const con = await mysql.createConnection(config);
      // console.log('connected succefully.'); 
      const query = `SELECT name FROM coffeshop.menudrinks;`;
  
      const [row, fields] = await con.execute(query);
  
      con.end();
  
    //   console.log('get user from model:', row);
      return row;
  
    } catch (err) {
      console.log('catch err:', err);
      con.end();
    }
  
}

module.exports.get = get;