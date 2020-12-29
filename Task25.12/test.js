var mySql = require('mysql2/promise');


const config = {
    host: '127.0.0.1',
    port: '3306',
    user: 'Flexandr',
    password: 'p0a1s2s2w2o9r4d3',
    database: 'proj1',
};

    // 1)  
let query =`CREATE TABLE Pets (
    petID INT PRIMARY KEY AUTO_INCREMENT,
    petName MEDIUMTEXT NOT NULL,
    masterID INT NOT NULL,
    petKind MEDIUMTEXT NOT NULL)
`;



    //  2)
let query = `INSERT  Pets (petName, masterID, petKind)
VALUES('Miki', 2, 'dog'),
('Lucky', 1, 'cat'),
('Joseph', 3, 'aligator')`

`
CREATE TABLE menuDrinks(
    id INT NOT NULL UNIQUE AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    drinkPrice INT
)
`

    //  3)
let query = `ALTER TABLE Pets
ADD CONSTRAINT fk_pet_masterID
FOREIGN KEY (masterID)
REFERENCES users (id)
ON DELETE CASCADE;`;


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