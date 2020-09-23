/////////////////////////////// 1 ///////////////////////////////
let chessDeskEl = document.querySelector(".chessDesk");

let figureOrderArray = [
    "R", "Kn", "B", "Q", "K", "B", "Kn", "R",
    "P", "P", "P", "P", "P", "P", "P", "P",]

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

for (let i = 0; i < figureOrderArray.length; i++) {
    cellsArr[i].innerHTML = `<img src='./res/${figureOrderArray[i]}B.png'>`;
    cellsArr[cellsArr.length - i - 1].innerHTML = `<img src='./res/${figureOrderArray[i]}W.png'>`;
}

/////////////////////////////// 2 ///////////////////////////////

const startNum = 9991999;
let leftNum = null;
let rigthNum = null;

function isPrime(num) {//является ли число простым
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

for (let i = startNum - 1; i > startNum - 100; i--) {//Ищем простое число из ближайших меньших 100 чисел
    if (isPrime(i)) {
        leftNum = i;
        break;
    }
}

for (let i = startNum + 1; i < startNum + 100; i++) {//Ищем простое число из ближайших больших 100 чисел
    if (isPrime(i)) {
        rightNum = i;
        break;
    }
}


console.log(`Левое ближайшее простое число: ${leftNum}`);
console.log(`Правое ближайшее простое число: ${rightNum}`);
