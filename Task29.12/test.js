// const fs = require('fs');

const start = '2020-11-25';
const end = '2019-12-25';

//'YYYY-MM-DD' - input
//'YYYY-MM-DD HH:MM:SS' - output

function getDateArr(startDateStr, endDateStr, numberOfGenerations) {

    let startDate = new Date(startDateStr);
    let endDate = new Date(endDateStr);
    let result = [];

    for (let i = 0; i < numberOfGenerations; i++) {
        result[i] = new Date(+startDate + Math.random() * (endDate - startDate)).toLocaleString();
    }

    // return JSON.stringify(result);
    return result;
}

console.log(getDateArr(start, end, 10));




// fs.writeFile("test.json", tempRes, function(error){
//     if(error) throw error;
//     console.log("Запись файла завершена.");
// });










