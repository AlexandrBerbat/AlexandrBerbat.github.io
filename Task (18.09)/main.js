console.log("Task 1:");

function randomInt(min, max)
{
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const carAllConf =
{
    bodyColor: ["Yellow", "Green", "Red", "Blue", "Orange" ],
    transmission: ["Automatical", "Mechanical"],
    conditioner: ["True", "False"],
    interior: ["Leather", "Textile", "Combined"],
};



function createCar(carNumber)
{
    let carTemp = {};
    carTemp.carNumber = carNumber;

    carTemp.bodyColor = carAllConf.bodyColor[randomInt(0, carAllConf.bodyColor.length-1)];
    carTemp.transmission = carAllConf.transmission[randomInt(0, carAllConf.transmission.length-1)];
    carTemp.conditioner = carAllConf.conditioner[randomInt(0, carAllConf.conditioner.length-1)];
    carTemp.interior = carAllConf.interior[randomInt(0, carAllConf.interior.length-1)];

    carTemp.confCode = carTemp.carNumber + carTemp.bodyColor[0] + carTemp.transmission[0] + carTemp.conditioner[0] + carTemp.interior[0];

    return carTemp;
};


let carAmount = 10;
let cars = [];
cars.length = carAmount;

for(let i = 0; i < carAmount; i ++)
{
    if(i<10)
    {
        cars[i] = createCar(`000${i}`);
    }else if(i>= 10 && i <100)
    {
        cars[i] = createCar(`00${i}`);
    }else if(i>= 100 && i <1000)
    {
        cars[i] = createCar(`0${i}`);
    }else if(i>= 1000 && i <10000)
    {
        cars[i] = createCar(`${i}`);
    }
}

console.log(cars);






console.log("\n\nTask 2:");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function changeArray(arr) 
{
    let arrTemp = [];
    arrTemp.length = arr.length;

    arrTemp[0] = arr[0];
    arrTemp[arrTemp.length - 1] = arr[arr.length - 1];

    let firstEvenNum = true//bool для проверки, первое ли это четное число из пары или второе
    let firstOddNum = true//bool для проверки, первое ли это нечетное число из пары или второе (кроме 5)

    for (let i = 1; i < arr.length - 1; i++) {

        if (arr[i] % 2 == 0) 
        {

            if (firstEvenNum == true) 
            {
                arrTemp[i] = arr[i + 2];
                arrTemp[i + 2] = arr[i];
                firstEvenNum = false;
            } 
            else 
            {
                firstEvenNum = true;
            }
        } 
        else if (arr[i] % 5 == 0) 
        {

            arrTemp[i] = arr[i];
        } 
        else if (arr[i] % 2 != 0) 
        {

            if (firstOddNum == true) 
            {
                arrTemp[i] = arr[i + 4];
                arrTemp[i + 4] = arr[i];
                firstOddNum = false
            }
            else 
            {
                firstOddNum = true;
            }
        }


    }


    return arrTemp;
}

console.table(changeArray(arr));