function randomInt(min, max)
{
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

// let arrTemp = [];
// let out4 = [];


// for(let i = 0; i < 10; i++)
// {
//     for(let a = 0; a < 10; a++)
//     {
//         arrTemp[a] = (a+1)*(i+1);
//     }

//     out4[i] = arrTemp;
//     arrTemp = [];
// }

// for(let x = 0; x < 10; x++)
// {
//     for(let y = 0; y < 10; y++)
//     {
        
//         if(x > y && y != 0)
//         {
//             out4[x][y] = 0;
//         }

//     }
// }

// console.table(out4);

let player1HP = 100;
let player2HP = 100;

let dmg1 = null;
let dmg2 = null;

while(player1HP > 0 && player2HP > 0)
{
    dmg1 = randomInt(1,6);
    dmg2 = randomInt(1,6);
    player1HP -= dmg1;
    player2HP -= dmg2;
    console.log(`Игрок 1 получает минус ${dmg1} очков`);
    console.log(`Игрок 2 получает минус ${dmg2} очков`);

}

console.log(`1 player hp = ${player1HP}`);
console.log(`2 player hp = ${player2HP}`);

(player1HP <= 0) ? console.log("Игрок 1 выбыл первым.") : console.log("Игрок 2 выбыл первым.");


