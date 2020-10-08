const keyLeft = 37;
const keyRight = 39;
const tankEl = document.querySelector(".tank");
const btnLeftEl = document.querySelector(".btnLeft");
const btnRightEl = document.querySelector(".btnRight");
const tankImgEl = document.querySelector(".tankImg");

let lastMove = "";
const SPEED = 700 / 2; // 700px/2s
let timeSpeedChange = null;
let tankPos = null;

console.log("SPEED: " + SPEED);


moveLeft = () => {
    tankEl.style.left = "0px";
    console.log("goleft");

    if (lastMove !== "left") {
        tankImgEl.style.transform = "scaleX(-1)";
        lastKeyPressed = "left";
    }

    if (tankPos !== null) {
        console.log("tankPos: " + tankPos);
        console.log("time: " + (tankPos / SPEED));
        timeSpeedChange = (tankPos / SPEED);

        tankEl.style.transition = "left " + timeSpeedChange + "s linear";
        console.log(tankEl.style.transition);
        console.log("timeSpeedChange" + timeSpeedChange);


    }


}

moveRight = () => {
    tankEl.style.left = "700px";
    console.log("goright");

    if (lastMove !== "right") {
        tankImgEl.style.transform = "scaleX(+1)";
        lastKeyPressed = "right";
    }

    if (tankPos !== null) {
        console.log("tankPos: " + tankPos);
        console.log("time: " + ((700 - tankPos) / SPEED));
        timeSpeedChange = ((700 - tankPos) / SPEED);

        tankEl.style.transition = "left " + timeSpeedChange + "s linear";
        console.log(tankEl.style.transition);
    }



}

pauseTank = () => {
    let temp = window.getComputedStyle(tankEl).getPropertyValue("left");
    tankEl.style.left = temp;
    
    tankPos = Number(temp.slice(0,-2));
    console.log("tankPos: " + tankPos);
    console.log("stop");
};

btnLeftEl.addEventListener("mousedown", moveLeft);
btnRightEl.addEventListener("mousedown", moveRight);
btnLeftEl.addEventListener("mouseup", pauseTank);
btnRightEl.addEventListener("mouseup", pauseTank);

document.addEventListener("keydown", (event) => {



    if (event.code === "ArrowLeft") {
        moveLeft();
    } else if (event.code === "ArrowRight") {
        moveRight();
    }
});

document.addEventListener("keyup", event => {
    if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
        pauseTank();
    }
})



//Вправо - key 39
//Влево - key 37