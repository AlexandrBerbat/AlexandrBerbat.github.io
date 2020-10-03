let keyLeft = 37;
let keyRight = 39;
let tank = document.querySelector(".tank");


function elemMove(elem, right)//true - right, false - left
{
    let tempChange2 = Number(elem.style.left.slice(0, elem.style.left.length - 2));

    if (right === true) {
        tempChange2 += 3;
        elem.style.left = tempChange2 + "px";
    } else {
        tempChange2 -= 3;
        elem.style.left = tempChange2 + "px";
    }
}

let anyKeyPress = document.querySelector("body").onkeydown = function (event) {

    if (event.keyCode === keyLeft) {
        elemMove(tank, false);
    }
    if (event.keyCode === keyRight) {
        elemMove(tank, true);
    }
};

let btnLeftEl = document.querySelector(".btnleft");
let btnRightEl = document.querySelector(".btnright");

btnLeftFunc = () => {
    elemMove(tank, false);

}
btnRightFunc = () => elemMove(tank, true);

btnLeftEl.addEventListener('mousedown', btnLeftFunc);
btnRightEl.addEventListener('mousedown', btnRightFunc);

//Вправо - key 39
//Влево - key 37