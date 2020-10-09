const fieldLength = 5;

let fieldEl = document.querySelector(".field");

let fieldArr = [];

for(let i = 0; i < fieldLength; i++)
{
    let tempArr = [];
    for(let a = 0; a < fieldLength; a++)
    {
        tempArr[a] = a+1;
    }
    fieldArr[i] = tempArr;
}

console.table(fieldArr);