const FIELDLENGTH = 8;
const CARDSTYPE = 3;
const CARDSAMOUNT = 30;

const CARDS = [

    { numb: 1, src: "./res/corner.png" },
    { numb: 2, src: "./res/impasse.png" },
    { numb: 3, src: "./res/stick.png" },
];

function randomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let cellsArr = [];
let cardsArr = [];

for (let i = 0; i < FIELDLENGTH; i++) {
    let tempArr = [];
    for (let a = 0; a < FIELDLENGTH; a++) {
        tempArr[a] = null;
    }
    cellsArr[i] = tempArr;
}


for (let i = 0; i < CARDSAMOUNT; i++) {
    if (i >= 0 && i < CARDSAMOUNT / 3) {
        cardsArr[i] = CARDS[0];
    } else if (i >= CARDSAMOUNT / 3 && i < CARDSAMOUNT * 2 / 3) {
        cardsArr[i] = CARDS[1];
    } else if (i >= CARDSAMOUNT * 2 / 3 && i < CARDSAMOUNT) {
        cardsArr[i] = CARDS[2]
    }
}

cardsArr.sort(() => Math.random() - 0.5);

let nextCardEl = document.querySelector(".nextCard");
let cardsLeftEl = document.querySelector(".cardsLeft");
let fieldEl = document.querySelector(".field");


function showNextCard(cardsArrEx) {
    let tempStr = cardsArrEx[cardsArrEx.length - 1].src;
    nextCardEl.innerHTML = `<img src=\"${tempStr}\">`;
    cardsLeftEl.innerHTML = "Осталось карт: " + cardsArrEx.length;
}

showNextCard(cardsArr);

function generateField(cellsArrEx) {
    fieldEl.innerHTML = "";
    let tempId = 0;
    for (let i = 0; i < cellsArrEx.length; i++) {
        for (let k = 0; k < cellsArrEx.length; k++) {

            if (cellsArrEx[i][k] > 0) {
                console.log(cellsArrEx)
                let tempStr = CARDS[cellsArrEx[i][k] - 1].src;
                fieldEl.innerHTML += `<div class=\"cell\" id=\"${tempId}\"><img src="` + tempStr + `"></div>`;
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
    if (cardsArr.length > 0) {
        let tempCell = cardsArr.pop();
        console.log(tempCell);
        cellsArr[Math.floor(Number(event.target.id) / FIELDLENGTH)][Number(event.target.id) % FIELDLENGTH] = tempCell.numb;

        console.log(cardsArr);
    }
    else {
        console.log("Карт больше нет!");
    }
    // console.log(`След карта ${cardsArr[0].num}`);


    render();
}

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