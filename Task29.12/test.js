  const fs = require('fs');

const start = '3/25/2019';
const end = '12/25/2020';

//'MM:DD:YYYY' - input;
//'YYYY-MM-DD HH:MM:SS' - output

function generateDate(startDateStr, endDateStr, numberOfGenerations) {

    let startDate = new Date(startDateStr);
    let endDate = new Date(endDateStr);
    const options = { weekday: 'narrow', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };

    let result = [];
    

    for (let i = 0; i < numberOfGenerations; i++) {
        let temp = new Date(+startDate + Math.random() * (endDate - startDate)).toLocaleDateString('eu', options).split(" ");
        result[i] = `${temp[0]}-${temp[1]}-${temp[2].slice(0, -1)} ${temp[4]}`;
    }

    return JSON.stringify(result);
}

let tempRes = generateDate(start, end, 100);

fs.writeFile("test.json", tempRes, function(error){
    if(error) throw error;
    console.log("Запись файла завершена.");
});










