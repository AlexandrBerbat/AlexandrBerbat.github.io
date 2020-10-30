const fs = require('fs');


const file = "testFile.txt";
// const fileName = "testFile.txt";
const startPath = "./test1/testFile.txt";
const endPath = "./test2/testFile.txt";

// fs.writeFile(file, str, (err) => {

//     !err ? console.log('err', err) : false;

//     const a = fs.readFile(file, 'utf8', (err, data) => {

//         if (!err) {
//             console.log('err', err)
//         } else {

//             console.log("Файл успешно перемещен");
//             console.log(data);

//         }
//     });
// });


const a = fs.readFile(startPath, 'utf8', (err, data) => {

    if (err) {
        console.log('err', err)
    } else {
        const b = fs.writeFile(endPath, data, (err, data) => {

            if (err) {
                console.log('err', err)
            } else {
                fs.unlink(startPath, (err, data) => {
                    if (err) {
                        console.log('err', err);
                    } else {
                        console.log("Перемещение прошло успешно.");
                    }
                });

            }
        });

    }
});