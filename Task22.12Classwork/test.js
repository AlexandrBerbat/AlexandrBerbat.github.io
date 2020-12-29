var mySql = require('mysql2/promise');


const config = {
    host: '127.0.0.1',
    port: '3306',
    user: 'Flexandr',
    password: 'p0a1s2s2w2o9r4d3',
    database: 'proj1',
};

//      1)  
// let query1 =`CREATE TABLE Books (
//     bookID INT PRIMARY KEY AUTO_INCREMENT,
//     bookName MEDIUMTEXT NOT NULL,
//     authorID INT NOT NULL,
//     releaseDate DATE)
// `;

//      2)
// let query = `INSERT  Books (bookName, authorID, releaseDate)
// VALUES('7 days to heaven', 3, '2019-5-15'),
// ('How to write js code correctly?', 2, '2020-12-21'),
// ('1001 lifehack for students', 1, '2008-12-30')`

//      3)
let query = `SELECT * FROM Books`;

//      4)
// let query4 = `UPDATE Books SET releaseDate='2030-10-10' WHERE bookID=2`;

//      5)
// let query5 = `DELETE FROM Books WHERE bookID=3`;

const myquery1 = async () => {
    try{
        const con = await mySql.createConnection(config);
        console.log(`Connection succesfully!`);

        const [rows, fields] = await con.query(query);
        console.table(rows);

        con.end();
    }catch(err)
    {
        console.log(`Error: ${err}`);
    }
}

myquery1();

// const connection = mySql.createConnection(config);

// connection.connect(err => {
//     if (err) console.log(err)
//     else console.log('connection succesfully!');
// });

// connection.query("SELECT * FROM Articles", (err,result) => {
//     console.log(`Error: ${err}`);
//     console.log("Result:");
//     console.log(result);
// })

// connection.end(err => console.log(err));