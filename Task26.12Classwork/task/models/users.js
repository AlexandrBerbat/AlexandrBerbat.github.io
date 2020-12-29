const mySql = require('mysql2/promise');
const config = require('../config/mysql.coffeshop');
console.log(config.port);

const add = async (name, mail, passw) => {
    try{
        const con = await mySql.createConnection(config);
        console.log(`Connection succesfully!`);

        let query = `INSERT INTO users (username, email, password)
        VALUES(?, ?, ?)`;

        const [rows, fields] = await con.query(query, [name, mail, passw]);

        con.end();

        return rows;

        
    }catch(err)
    {
        console.log(`Error: ${err}`);
        con.end();
    }
}


const get = async (id) => {
    try{
        const con = await mySql.createConnection(config);
        console.log(`Connection succesfully!`);

        const query = `SELECT username, email FROM users WHERE id=?`;

        const [rows, fields] = await con.query(query, [id]);
        con.end();


        console.log('get user from model', rows[0]);

        return  rows[0] ;

    }catch(err)
    {
        console.log(`Error: ${err}`);
        con.end();
    }
}



module.exports.add = add;
module.exports.get = get;