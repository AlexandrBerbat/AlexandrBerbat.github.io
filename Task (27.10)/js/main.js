// let request = require('request');
let URL = 'https://google.com/';

// let results = [];
// const searchStr = `<img class="img" loading="lazy" src="`;

// request(URL, function (err, res, body) {

//     let tempIndex = [];
//     let q = 1;
//     tempIndex[0] = body.indexOf(searchStr);
//     let prevIndex = tempIndex[0];

//     do {
//         tempIndex[q] = body.indexOf(searchStr, prevIndex + 1);
//         prevIndex = tempIndex[q];
//         q += 1;
//     } while (body.indexOf(searchStr, prevIndex + 1) !== -1);


//     for (let i = 0; i < tempIndex.length; i++) {
//         let tempStartConcat = tempIndex[i] + searchStr.length;
//         let tempEndConcat = body.indexOf("\"", tempStartConcat + 1);
//         results[i] = body.substr(tempStartConcat, tempEndConcat - tempStartConcat);

//         console.log(results[i]);
//     }

// });

const fs = require('fs');

const str = "hello!";
const file = "1.txt";
let content = null;




fs.writeFile(file,str,(err) => {
    console.log('err', err);

    const a = fs.readFile(file, 'utf8', (err,data) => {
        console.log('err', err);
        console.log(data);
    });
});


