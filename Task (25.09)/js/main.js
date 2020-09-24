/////////////////////////////// 1 ///////////////////////////////
let chessDeskEl = document.querySelector(".chessDesk");

/*let figureOrderArray = [
    "R", "Kn", "B", "Q", "K", "B", "Kn", "R",
    "P", "P", "P", "P", "P", "P", "P", "P",];*/

let figureSymbArray = [
    ["RB", "&#9820"], ["KnB", "&#9822"], ["BB", "&#9821"], ["QB", "&#9819"], ["KB", "&#9818"], ["BB", "&#9821"], ["KnB", "&#9822"], ["RB", "&#9820"],
    ["PB", "&#9823"], ["PB", "&#9823"], ["PB", "&#9823"], ["PB", "&#9823"], ["PB", "&#9823"], ["PB", "&#9823"], ["PB", "&#9823"], ["PB", "&#9823"],

    ["PB", "&#9823"], ["PB", "&#9823"], ["PB", "&#9823"], ["PB", "&#9823"], ["PB", "&#9823"], ["PB", "&#9823"], ["PB", "&#9823"], ["PB", "&#9823"],
    ["RB", "&#9820"], ["KnB", "&#9822"], ["BB", "&#9821"], ["QB", "&#9819"], ["KB", "&#9818"], ["BB", "&#9821"], ["KnB", "&#9822"], ["RB", "&#9820"],
]




/*K - King (Король)
  Q - Queen (Ферзь)
  B - Bishop (Слон)
  Kn - Knight (Конь)
  R - Rook (Ладья)
  P - Pawns (Пешка)*/

let shift = 7;//две черные клетки подряд после перехода на новый ряд
for (let i = 0; i < 64; i++) {

    if (i % 2 == 0) {
        chessDeskEl.innerHTML += "<div class=\"cell white\"></div>";
    }
    else {
        chessDeskEl.innerHTML += "<div class=\"cell black\"></div>";
    }

    if (i >= shift && shift != 63) {
        i--;
        shift += 7;
    }
}


let cellsArr = document.querySelectorAll(".cell");

for (let i = 0; i < figureSymbArray.length / 2; i++) {
    cellsArr[i].innerHTML = `<h1 class="chessFig blackFig">${figureSymbArray[i][1]}</h1>`;
    cellsArr[cellsArr.length - i - 1].innerHTML = `<h1 class="chessFig whiteFig">${figureSymbArray[figureSymbArray.length - i - 1][1]}</h1>`;
}

/////////////////////////////// 2 ///////////////////////////////

const startNum = 9991999;
let leftNum = null;
let rigthNum = null;

function isPrime(num) {//является ли число простым
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = startNum - 1; i > 0; i--) {//Ищем простое число из меньших чисел
    if (isPrime(i)) {
        leftNum = i;
        break;
    }
}

for (let i = startNum + 1; i < 999999999; i++) {//Ищем простое число из больших чисел
    if (isPrime(i)) {
        rightNum = i;
        break;
    }
}


console.log(`Левое ближайшее простое число: ${leftNum}`);
console.log(`Правое ближайшее простое число: ${rightNum}`);

