const fs = require('fs');

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return rand;
}


const start = '2019-3-25';
const end = '2020-12-25';

//'YYYY-MM-DD' - input (любой разделитель)
//'YYYY-MM-DD HH:MM:SS' - output

function generateDate(startDateStr, endDateStr, numberOfGenerations) {

    let startDate = new Date(startDateStr);
    let endDate = new Date(endDateStr);
    const options = { weekday: 'narrow', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };

    let result = [];

    for (let i = 0; i < numberOfGenerations; i++) {
        let temp = new Date(+startDate + randomInteger(0.5, 0.5) * (endDate - startDate)).toLocaleDateString('ru', options).split(" ");
        result[i] = `${temp[0]}-${temp[1]}-${temp[2].slice(0, -1)} ${temp[4]}`;
    }

    return JSON.stringify(result);
}

let tempRes = generateDate(start, end, 100);

console.log(tempRes);

// fs.writeFile("test.json", tempRes, function(error){
//     if(error) throw error;
//     console.log("Запись файла завершена.");
// });










