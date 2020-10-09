const fieldLength = 5;

let fieldEl = document.querySelector(".field");

function createArray() {//создание двумерного массива
    let array = [];

    for (let i = 0; i < fieldLength; i++) {
        let tempArr = [];
        for (let a = 0; a < fieldLength; a++) {
            tempArr[a] = a + 1;
        }
        array[i] = tempArr;
    }
    return array;
}

let fieldArr = createArray();

console.log(fieldArr);


function clearArray(array) {//очистка двумерного массива
    for (let i = 0; i < array.length; i++) {
        for (let a = 0; a < array.length; a++) {
            array[i][a] = null;
        }
    }
}
// clearArray(fieldArr);



function findFilledCells(array)//количество ненулевых(непустых) ячеек массива
{
    let tempCells = 0;
    for (let i = 0; i < array.length; i++) {
        for (let a = 0; a < array.length; a++) {
            if (array[i][a]) {
                tempCells++;
            }
        }
    }

    return tempCells;
}

let emptyCells = findFilledCells(fieldArr);

////////////////////////////////////////////////////////////////////////////////


function fillUpField(fieldEl, array)//отображение игрового поля(клеток массива) и строки статуса, в которой будет написано количество ненулевых клеток.
{

    for (let i = 0; i < array.length; i++) {
        fieldEl.innerHTML += "<div class=\"row\"></div>"
    }

    let rowsEl = document.querySelectorAll(".row");

    for (let i = 0; i < array.length; i++) {
        for (let a = 0; a < array.length; a++) {
            rowsEl[i].innerHTML += "<div class=\"cell\"></div>";
        }
    }


    fieldEl.innerHTML += "<div class=\"status-row\"></div>"
    document.querySelector(".status-row").innerHTML = findFilledCells(array);
}

fillUpField(fieldEl, fieldArr);





