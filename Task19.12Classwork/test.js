var mySql = require('mysql');
const { connect } = require('../Task18.12/task/routes');

const config = {
    host: '127.0.0.1',
    port: '3306',
    user: 'Flexandr',
    password: 'p0a1s2s2w2o9r4d3',
    database: 'proj1',
};

const connection = mySql.createConnection(config);

connection.connect(err => {
    if (err) console.log(err)
    else console.log('connection succesfully!');
});

//      1)
connection.query(`CREATE TABLE Articles (
    articleID INT PRIMARY KEY AUTO_INCREMENT,
    articleText MEDIUMTEXT NOT NULL,
    authorID INT NOT NULL,
    articleDate DATE)
`);

//      2)
connection.query(`
    ALTER TABLE Articles
    ADD 
    FOREIGN KEY (AuthorID)
    REFERENCES users (id)
    ON DELETE CASCADE;`, (err, result) => {
    console.log(`Errors: ${err}`);
    console.log('Result: ');
    console.table(result);
});

//      3)
connection.query(`INSERT  Articles (articleText, authorID, articleDate)
    VALUES('Some text article lorem lorem lorem', 1, '2019-5-15'),
    ('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 2, '2020-12-21'),
    ('Yeah it\`s my article!!!', 1, '2008-12-30')`);


connection.end(err => console.log(err));