const fieldLength = 5;

let fieldEl = document.querySelector(".field");

function createArray() {//создание двумерного массива
    let array = [];

    for (let i = 0; i < fieldLength; i++) {
        let tempArr = [];
        for (let a = 0; a < fieldLength; a++) {
            tempArr[a] = 0;
        }
        array[i] = tempArr;
    }
    return array;
}

let fieldArr = createArray();

// console.table(fieldArr);


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



let allCellsEl = document.querySelectorAll(".cell");

///////////////////////////////////////////////////////////////////////////////////////////
//дефолт: первая клетка выделена, массив [1,0,0...]
document.querySelector(".cell").classList.add("selected");
fieldArr[0][0] = 1;
document.querySelector(".status-row").innerHTML = findFilledCells(fieldArr);
///////////////////////////////////////////////////////////////////////////////////////////

for (let i = 0; i < allCellsEl.length; i++) {

    allCellsEl[i].addEventListener("mouseover", (ev) => {


        if(ev.target.classList.contains("selected"))
        {
            ev.target.classList.remove("selected");

            let tempRowNumber = Math.floor((i)/5);
            let tempColumnNumber = (i)%5;
            fieldArr[tempRowNumber][tempColumnNumber] = 0;
    
            document.querySelector(".status-row").innerHTML = findFilledCells(fieldArr);

        }else
        {
            ev.target.classList.add("selected");

            let tempRowNumber = Math.floor((i)/5);
            let tempColumnNumber = (i)%5;
            fieldArr[tempRowNumber][tempColumnNumber] = 1;
    
            document.querySelector(".status-row").innerHTML = findFilledCells(fieldArr);
        }

    });  
};



