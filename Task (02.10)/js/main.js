const keyLeft = 37;
const keyRight = 39;
const tankEl = document.querySelector(".tank");
const btnLeftEl = document.querySelector(".btnLeft");
const btnRightEl = document.querySelector(".btnRight");
const tankImgEl = document.querySelector(".tankImg");

let lastMove = "";

moveLeft = () => {
    tankEl.style.left = "0%";
    console.log("goleft");

    if (lastMove !== "left") {
        tankImgEl.style.transform = "scaleX(-1)";
        lastKeyPressed = "left";
    }
}
moveRight = () => {
    tankEl.style.left = "88%";
    console.log("goright");

    if (lastMove !== "right") {
        tankImgEl.style.transform = "scaleX(+1)";
        lastKeyPressed = "right";
    }
}
pauseTank = () => {
    let temp = window.getComputedStyle(tankEl).getPropertyValue("left");
    tankEl.style.left = temp;
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