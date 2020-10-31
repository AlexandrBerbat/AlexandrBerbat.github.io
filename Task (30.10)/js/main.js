const fs = require("fs");

const startPath = "./test1/testFile.txt";
const endPath = "./test2/testFile.txt";


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
