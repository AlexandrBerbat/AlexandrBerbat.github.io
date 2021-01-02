// getDateArr by Flexander 29-12-2020

//'YYYY-MM-DD' - input (любой разделитель)
function getDateArr(startDateStr, endDateStr, numberOfGenerations) {

    let startDate = new Date(startDateStr);
    let endDate = new Date(endDateStr);
    let result = [];

    for (let i = 0; i < numberOfGenerations; i++) {
        result[i] = new Date(+startDate + Math.random() * (endDate - startDate));
        result[i] = result[i].getUTCFullYear() + '-' +
        ('00' + (result[i].getUTCMonth()+1)).slice(-2) + '-' +
        ('00' + result[i].getUTCDate()).slice(-2) + ' ' + 
        ('00' + result[i].getUTCHours()).slice(-2) + ':' + 
        ('00' + result[i].getUTCMinutes()).slice(-2) + ':' + 
        ('00' + result[i].getUTCSeconds()).slice(-2);
    };

    return result;
}

module.exports = getDateArr;


// const fs = require('fs');
// const start = '2019-3-25';
// const end = '2020-12-25';

// function randomInteger(min, max) {
//     let rand = min - 0.5 + Math.random() * (max - min + 1);
//     return rand;
// }
//'YYYY-MM-DD HH:MM:SS' - output
// let tempRes = generateDate(start, end, 100);

// console.log(tempRes);

// fs.writeFile("test.json", tempRes, function(error){
//     if(error) throw error;
//     console.log("Запись файла завершена.");
// });









