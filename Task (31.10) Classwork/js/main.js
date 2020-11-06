const request = require('request');
const fs = require("fs");
const URL = 'https://auto.ria.com/uk/search/?category_id=1&marka_id=2233&model_id=0&city%5B0%5D=0&state%5B0%5D=0&s_yers%5B0%5D=0&po_yers%5B0%5D=0&price_ot=&price_do=';
const http = require('http');
const PORT = 3000;


const searchStr1 = `" > <span class="blue bold">`;
const searchStr2 = `<span class="bold green size22" data-currency="USD">`;
const searchStr3 = `<span data-currency="UAH">`;
const FILE_NAME = "test1.csv";

let resultArr = [];


function arrToCsv(arr) {
    let svgString = "";

    for (let i = 0; i < arr.length; i++) {
        for (let a = 0; a < arr[i].length; a++) {
            if (typeof (arr[i][a]) == "string") {
                svgString += `"${arr[i][a]}";`
            } else {
                svgString += arr[i][a] + ";";
            }
        }
        svgString += "\r\n";
    }
    return svgString;

}

// request(URL, (err, res, body) => {

//     resultArr = parseCars(body);

//     //let tempTestStr = arrToHtmlTable(resultArr);



// });

function findIndex(bodyStr, searchStrI) {
    let tempIndex = [];
    let q = 1;
    tempIndex[0] = bodyStr.indexOf(searchStrI);
    let prevIndex = tempIndex[0];

    do {
        tempIndex[q] = bodyStr.indexOf(searchStrI, prevIndex + 1);
        prevIndex = tempIndex[q];
        q += 1;
    } while (bodyStr.indexOf(searchStrI, prevIndex + 1) !== -1);

    return tempIndex;
}


function parseCars(body) {
    let results = [];

    let tempIndexNameYear = findIndex(body, searchStr1);
    let tempIndexPriceUsd = findIndex(body, searchStr2);
    let tempIndexPriceUah = findIndex(body, searchStr3);

    for (let i = 0; i < tempIndexNameYear.length; i++) {
        let tempStartConcat = tempIndexNameYear[i] + searchStr1.length;
        let tempEndConcat = body.indexOf("</a>", tempStartConcat + 1);
        let nameAndYear = body.substr(tempStartConcat, tempEndConcat - tempStartConcat);
        let nameAndYearArrSplitted = nameAndYear.split("</span>");

        let tempStartConcat2 = tempIndexPriceUsd[i] + searchStr2.length;
        let tempEndConcat2 = body.indexOf("</span>", tempStartConcat2 + 1);
        let PriceUsd = body.substr(tempStartConcat2, tempEndConcat2 - tempStartConcat2);

        let tempStartConcat3 = tempIndexPriceUah[i] + searchStr3.length;
        let tempEndConcat3 = body.indexOf("</span>", tempStartConcat3 + 1);
        let PriceUah = body.substr(tempStartConcat3, tempEndConcat3 - tempStartConcat3);


        results[i] = [
            nameAndYearArrSplitted[0],
            nameAndYearArrSplitted[1],
            Number(parseInt(PriceUsd.replace(/\s+/g, ''), 10)),
            Number(parseInt(PriceUah.replace(/\s+/g, ''), 10)),
        ];

    }

    return results;
}



function formatTime(date) {
    let result = "";
    let Y = date.getFullYear() + "";
    let M = date.getMonth() + 1 + "";
    let D = date.getDate() + "";

    let h = date.getHours() + "";
    let m = date.getMinutes() + "";
    let s = date.getSeconds() + "";

    result = Y.padStart(4, "0") + M.padStart(2, "0") + D.padStart(2, "0") + "-" + h.padStart(2, "0") + m.padStart(2, "0") + s.padStart(2, "0");
    return result;
}

function writeFile(fileName, fileDataArr) {

    try {
        if (fileName.length < 4) throw "Неверное имя файла";
        if (fileName.substr(-4, 4) !== ".csv") throw "Неверный формат файла";
        if (fileDataArr.length == 0 || fileDataArr == null) throw "Отсутствуют данные для записи в файл";

        let writeStr = arrToCsv(fileDataArr);
        let tempTime = formatTime(new Date());
        fileName = fileName.slice(0, -4) + "_" + tempTime + ".csv";

        fs.writeFile(fileName, writeStr, (err) => {
            if (err) {
                throw "Ошибка записи файла";
            } else {
                console.log("Файл успешно записан.");
            }
        });
    }
    catch (e) {
        console.log("Ошибка:", e);
    }
    return fileName;
}

function arrToHtmlTable(arr) {
    let resultStr = "<table>";

    for (let i = 0; i < arr.length; i++) {
        resultStr += "<tr>"
        for (let a = 0; a < arr[i].length; a++) {
            resultStr += `<td>${arr[i][a]}</td>`;
        }
        resultStr += "</tr>";
    }


    resultStr += "</table>\n"
    return resultStr;
}

/*
6) Запустить сервер, который: 
при обычном запросе пишет только ссылку <a href='/tesla'>обновить данные по Тесле</a>
При нажатии на эту ссылку на странице появляется: 
* строка: ссылка <a href='/tesla'>обновить данные по Тесле</a>
* таблица с актуальными данными
* строка: ссылка на скачивание актуального csv-файла (например, tesla_20201031-145233.csv)
*/

http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write(`<a href='/tesla'>обновить данные по Тесле</a><br>`);

    if (req.url == '/tesla') {

        console.log("tadaaaa!");
        request(URL, (e, r, b) => {

            resultArr = parseCars(b);
            let tempTestStr = arrToHtmlTable(resultArr);
            
            res.write(tempTestStr);
            let newFileName = writeFile(FILE_NAME, resultArr);
            console.log(newFileName);
            fs.readFile(newFileName,"utf-8", (err, data) => {
                console.log(data);
            })
            res.write(`<a href="./${newFileName}" download>Скачать ${newFileName}</a>`);
            res.end();
        });
        
    } else {
        res.end();
    }

}).listen(PORT, () => {
    console.log("Server is running");
});