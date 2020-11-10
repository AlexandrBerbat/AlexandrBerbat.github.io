const request = require('request');
const URL = 'https://dog.ceo/api/breeds/image/random';
const http = require('http');
const PORT = 3000;
const ARR_SIZE = 30;
let resultArr = [];
let results = [];

http.createServer((req, res) => {
    if (req.url !== "/favicon.ico") {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');

        for (let i = 0; i < ARR_SIZE; i++) {

            request(URL, (e, r, b) => {
                let a = JSON.parse(b);

                if (a.status == "success") {

                    let timeStart = Date.now();
                    request(a.message, (er, rs, bd) => {
                        let timeEnd = Date.now();
                        if (!er && rs.statusCode === 200) {
                            


                            let tempStrArr = a.message.split("\/");
                            let idArr = tempStrArr[tempStrArr.length - 1].split(".");
                            resultArr[i] = { id: i, url: a.message, size: Buffer.byteLength(bd), download_time: timeEnd - timeStart, breed: tempStrArr[tempStrArr.length - 2] };


                        } else {
                            console.log("Ошибка загрузки");
                        }

                        res.end();
                    })
                }
            });
        }
        sortArrByDownloadTime(resultArr);
        console.table(resultArr);
    }

}).listen(PORT, () => {
    console.log("Server is running");
});

function sortArrByDownloadTime(arr)
{
    arr.sort((a, b) => a.download_time > b.download_time ? 1 : -1);
}
















// res.write(`<a href="/">обновить данные по Собакам</a><br>`);

// request(URL, (e, r, b) => {
//     let a = JSON.parse(b);

//     if (a.status == "success") {
//         res.write(`<img src="${a.message}">`)
//     } else {
//         res.write(`<h1>Загрузка</h1>`);
//     }
//     res.end();
// });