
function getRandomNumber(min, max) {// Случайное целое число от min до max
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

function fillUpFleetArr() //Случайно заполняем массив кораблями
{
    let tempFleet = [];

    for (let i = 0; i < 10; i++) 
    {
        let randomTemp = getRandomNumber(1, 4);

        switch (randomTemp) 
        {
        case 1:
            tempFleet[i] = ["destroyer", 10, 45];
            break;
        case 2:
            tempFleet[i] = ["battleship", 4, 100];
            break;
        case 3:
            tempFleet[i] = ["flattop", 40, 15];
            break;
        case 4:
            tempFleet[i] = ["cruiser", 8, 60];
            break;
        }
    }
    return tempFleet;
}



function twoFleetFight(fleetArrEx, fleetFirstInd, fleetSecondInd) //один корабль атакует другой
{

    /**
     * fleetArrEx - массив флотов
     * fleetFirstInd - индекс атакующего флота
     * fleetSecondInd - индекс флота-жертвы
     */

    let shipAttackerInd = getRandomNumber(0,fleetArrEx[fleetFirstInd].length-2);//случайно определяем какой корабль атакует
    let shipVictimInd = getRandomNumber(0,fleetArrEx[fleetSecondInd].length-2);//случайно определяем какой корабль получает урон

    let fleetFirst = fleetArrEx[fleetFirstInd];
    let fleetSecond = fleetArrEx[fleetSecondInd]

    let dealDamage = fleetFirst[shipAttackerInd][1] + (fleetFirst[shipAttackerInd][1]*getRandomNumber(-20,20))/100;// урон +- 20%
    dealDamage = Math.floor(dealDamage * 100) / 100;
    fleetSecond[shipVictimInd][2] -= dealDamage;
    fleetSecond[shipVictimInd][2] = Math.floor(fleetSecond[shipVictimInd][2] * 100) / 100;
    
    if(fleetSecond[shipVictimInd][2] >= 0)// если осталось хп
    {
        console.log(`${fleetFirst[shipAttackerInd][0]}-${fleetFirstInd}-${shipAttackerInd} =${dealDamage}dmg=> ${fleetSecond[shipVictimInd][0]}-${fleetSecondInd}-${shipVictimInd}`)
    }
    else
    {
        console.log(`${fleetFirst[shipAttackerInd][0]}-${fleetFirstInd}-${shipAttackerInd} kill ${fleetSecond[shipVictimInd][0]}-${fleetSecondInd}-${shipVictimInd}`)
    }
}

function checkForDeadShipsOrFleets(fleetArrEx)// проверка массива флотов и кораблей на убитые корабли и полностью разгромленные флоты
{
    for(let a = 0; a < fleetArrEx.length; a++)
    {
        for(let b = 0; b < fleetArrEx[a].length; b++)
        {
            if(fleetArrEx[a][b][2] <= 0)
            {
                fleetArrEx[a].splice(b,1);
                console.log(`Ship ${b} from fleet ${a} was deleted.`);
            }
        }
        if(fleetArrEx[a].length == 0)
        {
            fleetArrEx.splice(a,1);
            console.log(`Fleet ${a} was deleted.`);
        }
    }
}

function startBattle(fleetArrEx)
{
    let pointer1 = 0;
    let pointer2 = 1;
    let fleetExists = true;

    do
    {
        twoFleetFight(fleetArrEx, pointer1, pointer2);
        checkForDeadShipsOrFleets(fleetArrEx);
        
        if(fleetArrEx.length == 1)// если остался 1 флот
        {
            console.log("HERE COMES THE WINNER! Fleet:");
            console.table(fleetArrEx[0]);
            fleetExists = false;
        }
        pointer1++;
        pointer2++;

        if(pointer1 >= fleetArrEx.length)// если указатель перешел на флот, с индексом больше последнего
        {
            pointer1 = 0;
        }
        if(pointer2 >= fleetArrEx.length)// если указатель перешел на флот, с индексом больше последнего
        {
            pointer2 = 0;
        }


        console.log("________________________________________________");

        

    }while(fleetExists == true)

}



let shipArr = [];
let numberOfFleet = 3;


for (let i = 0; i < numberOfFleet; i++)
{
    shipArr[i] = fillUpFleetArr();
}



// twoFleetFight(shipArr, 0, 1);
// twoFleetFight(shipArr, 0, 1);
// twoFleetFight(shipArr, 0, 1);

// checkForDeadShipsOrFleets(shipArr);


startBattle(shipArr);