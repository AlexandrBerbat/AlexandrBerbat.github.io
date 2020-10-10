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








////////////////////////////////////////6666666666666666666666///////////////////////////////////

let allCellsEl = document.querySelectorAll(".cell");
let pointer = [0, 0];


///////////////////////////////////////////////////////////////////////////////////////////
//дефолт: первая клетка выделена, массив [1,0,0...]
document.querySelector(".cell").classList.add("selected");
fieldArr[pointer[0]][pointer[1]] = 1;
document.querySelector(".status-row").innerHTML = findFilledCells(fieldArr);
///////////////////////////////////////////////////////////////////////////////////////////

let btnLeftEl = document.querySelector(".icon-left-big");
let btnUpEl = document.querySelector(".icon-up-big");
let btnDownEl = document.querySelector(".icon-down-big");
let btnRightEl = document.querySelector(".icon-right-big");

function refreshData(pointer) {
    let tempArr = trackPassedCells(fieldArr);
    clearArray(fieldArr);
    fieldArr[pointer[1]][pointer[0]] = 1;

    let tempIter = 0;

    for (let i = 0; i < fieldArr.length; i++) {
        for (let a = 0; a < fieldArr.length; a++) {
            if (fieldArr[i][a] == 1 || fieldArr[i][a] == 2) {
                allCellsEl[tempIter].classList.add("selected");
            }
            else {
                allCellsEl[tempIter].classList.remove("selected");
            }
            if (tempArr[i][a] == 2) {
                fieldArr[i][a] = 2;
                allCellsEl[tempIter].classList.add("passed");
            }
            tempIter++;
        }
    }

    console.log(`pointer: ${pointer}`);
    console.log(`fieldArr: ${fieldArr}`);



    document.querySelector(".status-row").innerHTML = findFilledCells(fieldArr);
}

function moveLeft() {
    if (pointer[0] > 0) {
        pointer[0] -= 1;
        refreshData(pointer);
    }
}
function moveDown() {
    if (pointer[1] < fieldLength - 1) {
        pointer[1] += 1;
        refreshData(pointer);
    }
}
function moveUp() {
    if (pointer[1] > 0) {
        pointer[1] -= 1;
        refreshData(pointer);
    }
}
function moveRight() {
    if (pointer[0] < fieldLength - 1) {
        pointer[0] += 1;
        refreshData(pointer);
    }
}


btnLeftEl.addEventListener("click", moveLeft);
btnRightEl.addEventListener("click", moveRight);
btnUpEl.addEventListener("click", moveUp);
btnDownEl.addEventListener("click", moveDown);


document.addEventListener("keydown", (event) => {

    console.log(event.code);

    if (event.code === "ArrowLeft") {
        moveLeft();
    } else if (event.code === "ArrowRight") {
        moveRight();
    } else if (event.code === "ArrowUp") {
        moveUp();
    } else if (event.code === "ArrowDown") {
        moveDown();
    }
});




////////////////////////////////////77777777777777777777777777///////////////////////////////


function trackPassedCells(array) {
    let resultArr = new Array(fieldLength);

    for (let i = 0; i < resultArr.length; i++) {
        resultArr[i] = new Array(fieldLength);
    }

    for (let i = 0; i < array.length; i++) {
        for (let a = 0; a < array.length; a++) {
            if (array[i][a] == 1 || array[i][a] == 2) {
                resultArr[i][a] = 2;
            }
        }
    }
    return resultArr;
}



























// function movePointer(direction)
// {
//     switch
// }




// for (let i = 0; i < allCellsEl.length; i++) {

//     allCellsEl[i].addEventListener("mouseover", (ev) => {


//         if(ev.target.classList.contains("selected"))
//         {
//             ev.target.classList.remove("selected");

//             let tempRowNumber = Math.floor((i)/5);
//             let tempColumnNumber = (i)%5;
//             fieldArr[tempRowNumber][tempColumnNumber] = 0;

//             document.querySelector(".status-row").innerHTML = findFilledCells(fieldArr);

//         }else
//         {
//             ev.target.classList.add("selected");

//             let tempRowNumber = Math.floor((i)/5);
//             let tempColumnNumber = (i)%5;
//             fieldArr[tempRowNumber][tempColumnNumber] = 1;

//             document.querySelector(".status-row").innerHTML = findFilledCells(fieldArr);
//         }

//     });  
// };



