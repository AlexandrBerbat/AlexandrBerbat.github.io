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


let pad = "0000";
let carNumb = 0;

for (let bodyColorIter = 0; bodyColorIter < carAllConf.bodyColor.length; bodyColorIter++) 
{
    for (let transmissionIter = 0; transmissionIter < carAllConf.transmission.length; transmissionIter++) 
    {
        for (let conditionerIter = 0; conditionerIter < carAllConf.conditioner.length; conditionerIter++)
        {
            for(let interiorIter = 0; interiorIter < carAllConf.interior.length; interiorIter++)
            {

                cars[carNumb] = createCar((pad+carNumb).slice(-pad.length), bodyColorIter, transmissionIter, conditionerIter, interiorIter);
                carNumb++;
            }
        }
    }
}

console.log(cars);







console.log("\n\nTask 2:");



let arr1 =   [
    1, 2, 3, 
    4, 5, 6, 
    7, 8, 9
];

let result = [
    1, 4, 7, 
    2, 5, 8, 
    3, 6, 9
];

//let shiftRatio = 2;



function newArray(arr) 
{
    let arrTemp = [];
    arrTemp.length = arr.length;

    let shift = 0;

    for(let i = 0; i < arr.length; i++)
    {
        // console.log(i);
        // console.log(shift);
        // console.log("________");

        arrTemp[i] = arr[shift];
        shift += 3;

        if(shift >= 9)
        {
            shift -= 8;
        }

    }   

    return arrTemp;

}


console.table(newArray(arr1));