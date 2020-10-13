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
            array[i][a] = 0;
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

let btnLeftEl = document.querySelector(".icon-left-big");
let btnUpEl = document.querySelector(".icon-up-big");
let btnDownEl = document.querySelector(".icon-down-big");
let btnRightEl = document.querySelector(".icon-right-big");

///////////////////////////////////////////////////////////////////////////////////////////
//дефолт: первая клетка выделена, массив [1,0,0...]
document.querySelector(".cell").classList.add("selected");
fieldArr[pointer[0]][pointer[1]] = 1;
document.querySelector(".status-row").innerHTML = findFilledCells(fieldArr);
btnLeftEl.classList.add("disabl");
btnUpEl.classList.add("disabl");


///////////////////////////////////////////////////////////////////////////////////////////


////////////////888888888//////////////////
function blockImpossibleWayBorder(pointer) {
    let resultWays = [];//0-left, 1-up, 2-right, 3-down// true - possible way, false - impossible way

    if (pointer[0] - 1 < 0) {
        resultWays[0] = false;//left

    }
    else {
        resultWays[0] = true;
    }
    if ((pointer[0] + 1) == fieldLength) {
        resultWays[2] = false;//right

    } else {
        resultWays[2] = true;
    }
    if ((pointer[1] - 1) < 0) {
        resultWays[1] = false;//up

    }
    else {
        resultWays[1] = true;
    }
    if ((pointer[1] + 1) == fieldLength) {
        resultWays[3] = false;//down

    } else {
        resultWays[3] = true
    }

    return resultWays;
};
//////////////////////8888888//////////////////


///////////////////8.1////////////////////////
function blockImpossibleWayPassed(borderCheckArr, array, pointer) {//функция проверки на заполненные (пройденные клетки)
    let resultArr = [];

    if (borderCheckArr[0]) {//left
        if (array[pointer[0] - 1][pointer[1]] >= 1) {
            resultArr[0] = false;
        }
        else {
            resultArr[0] = true;
        }

    }
    else {
        resultArr[0] = false;
    }

    if (borderCheckArr[1]) {//up
        if (array[pointer[0]][pointer[1] - 1] >= 1) {
            resultArr[1] = false;
        }
        else {
            resultArr[1] = true;
        }
    }
    else {
        resultArr[1] = false;
    }

    if (borderCheckArr[2]) {//right
        if (array[pointer[0] + 1][pointer[1]] >= 1) {
            resultArr[2] = false;
        }
        else {
            resultArr[2] = true;
        }
    }
    else {
        resultArr[2] = false;
    }

    if (borderCheckArr[3]) {//down
        if (array[pointer[0]][pointer[1] + 1] >= 1) {
            resultArr[3] = false;
        }
        else {
            resultArr[3] = true;
        }
    }
    else {
        resultArr[3] = false;
    }

    return resultArr;
}
///////////////////8.1////////////////////////


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

    console.table(fieldArr);




    // let tempShit = blockImpossibleWayBorder(tempArr, pointer);
    let tempBorderCheck = blockImpossibleWayBorder(pointer);
    console.log("border check: " + tempBorderCheck);
    let tempShit = blockImpossibleWayPassed(tempBorderCheck, fieldArr, pointer);
    console.log("total check: " + tempShit);
    console.log("pointer: " + pointer);


    // blockImpossibleWayPassed(fieldArr, pointer)

    if (!tempShit[0]) {
        btnLeftEl.classList.add("disabl");
    }
    else {
        btnLeftEl.classList.remove("disabl");
    }

    if (!tempShit[1]) {
        btnUpEl.classList.add("disabl");
    }
    else {
        btnUpEl.classList.remove("disabl");
    }

    if (!tempShit[2]) {
        btnRightEl.classList.add("disabl");
    }
    else {
        btnRightEl.classList.remove("disabl");
    }

    if (!tempShit[3]) {
        btnDownEl.classList.add("disabl");
    }
    else {
        btnDownEl.classList.remove("disabl");
    }


    document.querySelector(".status-row").innerHTML = findFilledCells(fieldArr);


}

function moveLeft() {

    
    if (pointer[0] > 0 && !btnLeftEl.className.includes("disabl")) {
        pointer[0] -= 1;
        refreshData(pointer);
    }

    console.log(fieldArr);
}
function moveDown() {

    if (pointer[1] < fieldLength - 1 && !btnDownEl.className.includes("disabl")) {
        pointer[1] += 1;
        refreshData(pointer);
    }

    console.log(fieldArr);
}
function moveUp() {

    if (pointer[1] > 0 && !btnUpEl.className.includes("disabl")) {
        pointer[1] -= 1;
        refreshData(pointer);
    }

    console.log(fieldArr);
}
function moveRight() {

    if (pointer[0] < fieldLength - 1 && !btnRightEl.className.includes("disabl")) {
        pointer[0] += 1;
        refreshData(pointer);
    }

    console.log(fieldArr);

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


function trackPassedCells(array) {//отмечаем какие клетки мы проходили во временном двумерном массиве
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









///////////////////////////888888888888888888////////////////////////////////////////////

// function blockImpossibleWay(array, pointer)
// {
//     if((pointer[0]-1) <= 0 || array[pointer[0]-1][0] == 2)
//     {
//         btnLeftEl.classList.add("disabl");
//         console.log("allooo");
//     }
//     if((pointer[0]+1) >= fieldLength-1 || array[pointer[0]+1][0] == 2)
//     {
//         btnRightEl.classList.add("disabl");
//     }
// };

// blockImpossibleWay(fieldArr, pointer);






















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



