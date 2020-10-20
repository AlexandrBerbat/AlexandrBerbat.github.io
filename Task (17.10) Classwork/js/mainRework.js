const CARDSTYPES = 3;
const CARDSTYPEAMOUNT = 10;
const FIELDHEIGHT = 8;
const FIELDWIDTH = 8;

const CARDS = [
    { numb: 1, src: "./res/corner.png", left: false, top:false, right: true, bottom: true},
    { numb: 2, src: "./res/impasse.png", left: false, top:false, right: true, bottom: false },
    { numb: 3, src: "./res/stick.png", left: true, top:false, right: true, bottom: false },
];

function randomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

let cellsArr = [];//массив ячеек на странице
let cardsArr = [];//массив карт

for (let i = 0; i < FIELDHEIGHT; i++) {//заполняем массив ячеек null'ами
    let tempArr = [];
    for (let a = 0; a < FIELDWIDTH; a++) {
        tempArr[a] = null;
    }
    cellsArr[i] = tempArr;
}

let tempPushCard = 0;

for (let i = 0; i < CARDSTYPES * CARDSTYPEAMOUNT; i++) {//заполняем массив карт
    cardsArr[i] = CARDS[tempPushCard];
    if ((i + 1) % CARDSTYPEAMOUNT == 0) {
        tempPushCard++;
    }
}

cardsArr.sort(() => Math.random() - 0.5);//перемешиваем карты в массиве




let nextCardEl = document.querySelector(".nextCard");
let cardsLeftEl = document.querySelector(".cardsLeft");
let fieldEl = document.querySelector(".field");

function showNextCard(cardsArrEx) {//показать следующую карту в массиве карт
    cardsLeftEl.innerHTML = "Осталось карт: " + cardsArrEx.length;
    let tempStr = cardsArrEx[cardsArrEx.length - 1].src;
    nextCardEl.innerHTML = `<img src=\"${tempStr}\">`;
}
showNextCard(cardsArr);


function generateField(cellsArrEx) {
    fieldEl.innerHTML = "";
    let tempId = 0;
    for (let i = 0; i < cellsArrEx.length; i++) {
        for (let k = 0; k < cellsArrEx.length; k++) {

            if (cellsArrEx[i][k] > 0) {
                // console.log(cellsArrEx)
                let tempStr = CARDS[cellsArrEx[i][k] - 1].src;
                fieldEl.innerHTML += `<div class=\"cell\" id=\"${tempId}\" style=\"background-image: url(${tempStr});\">`;//<img src="` + tempStr + `" class=\"image\" id=\"i${tempId}\"></div>`;
                // console.log(`<div class=\"cell\" style=\"background-image: url(${tempStr});\" id=\"${tempId}\" >`);

                // style="background-image: url(./res/corner.png)"

                tempId++;
            } else {

                fieldEl.innerHTML += `<div class=\"cell\" id=\"${tempId}\"></div>`;
                tempId++;
            }
        }
    }
}
generateField(cellsArr);


let cellsHtml = document.querySelectorAll(".cell");


const cellClick = (event) => {

    
    if (event.target.style.backgroundImage == "") {

        console.dir(event.target)
        console.log(event.target.innerHTML)
        let tempCell = cardsArr.pop();
        // console.log(tempCell);
        cellsArr[Math.floor(Number(event.target.id) / FIELDHEIGHT)][Number(event.target.id) % FIELDWIDTH] = tempCell.numb;

        console.log(cellsArr[Math.floor(Number(event.target.id) / FIELDHEIGHT)][Number(event.target.id) % FIELDWIDTH]);

        console.log(cardsArr);

    }
    else {
        let temp2 = event.target;

        console.log("Таргет: " );
        console.log(event.target);
        console.log("Родитель: ");
        console.log(event.target.parentNode);
        console.log("Родитель Id: ");
        console.log(Number(event.target.parentNode.id));

        // temp2.classList.add("rotated");
        event.target.classList.add("rotated");
        // document.getElementById(event.target.id).classList.add("rotated");
        console.log("ROTATE!");


    }
    render();

};


const addListeners = (cellsHtml) => {
    cellsHtml.forEach((elem) => elem.addEventListener("click", cellClick));
};

const render = () => {
    generateField(cellsArr);
    showNextCard(cardsArr);

    let cellsEls = document.querySelectorAll(".cell");
    addListeners(cellsEls);

};

render();