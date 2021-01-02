// const fs = require('fs');
const mySql = require('mysql2/promise')

const start = '2020-11-1';
const end = '2020-12-1';

const config = {
    host: '127.0.0.1',
    port: '3306',
    user: 'Flexandr',
    password: 'p0a1s2s2w2o9r4d3',
    database: 'proj1',
};



//'YYYY-MM-DD' - input
//'YYYY-MM-DD HH:MM:SS' - output

function getDateArr(startDateStr, endDateStr, numberOfGenerations) {

    let startDate = new Date(startDateStr);
    let endDate = new Date(endDateStr);
    let result = [];
    
    for (let i = 0; i < numberOfGenerations; i++) {
        result[i] = new Date(+startDate + Math.random() * (endDate - startDate)).toLocaleDateString();
    }
    
    // return JSON.stringify(result);
    return result;
}

let dateArr = getDateArr(start, end, 10);
console.log(dateArr);

// let query = `INSERT INTO new_table (data) VALUES `

// for(let a = 0; a < dateArr.length; a++)
// {
//     query += `("${dateArr[a]}")`;
//     if(a !== dateArr.length-1)
//     {
//         query += `,`;
//     }
// }

// query += `;`;
// console.log(query);


// const myquery1 = async () => {
//     try{
//         const con = await mySql.createConnection(config);
//         console.log(`Connection succesfully!`);

//         const [rows, fields] = await con.query(query);
//         console.table(rows);

//         con.end();
//     }catch(err)
//     {
//         console.log(`Error: ${err}`);
//     }
// }

// myquery1();


// fs.writeFile("test.json", tempRes, function(error){
//     if(error) throw error;
//     console.log("Запись файла завершена.");
// });










