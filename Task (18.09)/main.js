console.log("Task 1:");

function randomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const carAllConf =
{
    bodyColor: ["Yellow", "Green", "Red", "Blue", "Orange"],
    transmission: ["Automatical", "Mechanical"],
    conditioner: ["True", "False"],
    interior: ["Leather", "Textile", "Combined"],
};



function createCar(carNumber, bodyColorInd, transmissionInd, conditionerInd, interiorInd) {
    let carTemp = {};
    carTemp.carNumber = carNumber;


    carTemp.bodyColor = carAllConf.bodyColor[bodyColorInd];
    carTemp.transmission = carAllConf.transmission[transmissionInd];
    carTemp.conditioner = carAllConf.conditioner[conditionerInd];
    carTemp.interior = carAllConf.interior[interiorInd];

    carTemp.confCode = carTemp.carNumber + carTemp.bodyColor[0] + carTemp.transmission[0] + carTemp.conditioner[0] + carTemp.interior[0];

    return carTemp;
};



let cars = [];



let carNumb = 0;

for (let b = 0; b < carAllConf.bodyColor.length; b++) 
{
    for (let c = 0; c < carAllConf.transmission.length; c++) 
    {
        for (let e = 0; e < carAllConf.conditioner.length; e++)
        {
            for(let f = 0; f < carAllConf.interior.length; f++)
            {

                if (carNumb < 10) 
                {
                cars[carNumb] = createCar(`000${carNumb}`, b, c, e, f);
                } else if (carNumb >= 10 && carNumb < 100) 
                {

                cars[carNumb] = createCar(`00${carNumb}`, b, c, e, f);
                } else if (carNumb >= 100 && carNumb < 1000) 
                {

                cars[carNumb] = createCar(`0${carNumb}`, b, c, e, f);
                } else if (carNumb >= 1000 && carNumb < 10000) 
                {

                cars[carNumb] = createCar(`${carNumb}`, b, c, e, f);
                }
                carNumb++;
            }

        }

    }

}

console.log(cars);







console.log("\n\nTask 2:");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function changeArray(arr) {
    let arrTemp = [];
    arrTemp.length = arr.length;

    arrTemp[0] = arr[0];
    arrTemp[arrTemp.length - 1] = arr[arr.length - 1];

    let firstEvenNum = true//bool для проверки, первое ли это четное число из пары или второе
    let firstOddNum = true//bool для проверки, первое ли это нечетное число из пары или второе (кроме 5)

    for (let i = 1; i < arr.length - 1; i++) {

        if (arr[i] % 2 == 0) {

            if (firstEvenNum == true) {
                arrTemp[i] = arr[i + 2];
                arrTemp[i + 2] = arr[i];
                firstEvenNum = false;
            }
            else {
                firstEvenNum = true;
            }
        }
        else if (arr[i] % 5 == 0) {

            arrTemp[i] = arr[i];
        }
        else if (arr[i] % 2 != 0) {

            if (firstOddNum == true) {
                arrTemp[i] = arr[i + 4];
                arrTemp[i + 4] = arr[i];
                firstOddNum = false
            }
            else {
                firstOddNum = true;
            }
        }


    }


    return arrTemp;
}

console.table(changeArray(arr));