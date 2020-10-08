const ballEl = document.querySelector(".ball");
const rightEl = document.querySelector(".rightBtn");
const leftEl = document.querySelector(".leftBtn");
const keyLeft = 37;
const keyRight = 39;

let lastKeyPressed = null;

moveLeft = () => {
    ballEl.style.left = "0px";
    console.log("goleft");
}
moveRight = () => {
    ballEl.style.left = "267px";
    console.log("goright");
}
pauseBall = () => {
    let temp = window.getComputedStyle(ballEl).getPropertyValue("left");
    ballEl.style.left = temp;
    console.log("stop");
};

leftEl.addEventListener("mousedown", moveLeft);
rightEl.addEventListener("mousedown", moveRight);
leftEl.addEventListener("mouseup", pauseBall);
rightEl.addEventListener("mouseup", pauseBall);

document.addEventListener("keydown", (event) => {


    if(event.code === "ArrowLeft")
    {
        moveLeft();
    }else if(event.code === "ArrowRight")
    {
        moveRight();
    }
});

document.addEventListener("keyup", event =>
{
    if(event.code === "ArrowLeft" || event.code === "ArrowRight")
    {
        pauseBall();
    }
})

// let anyKeyPressDown = document.querySelector("body").onkeydown = function (event) {
//     if (event.keyCode === keyLeft) {
//         moveLeft();
//     }
//     if (event.keyCode === keyRight) {
//         moveRight();
//     }
// };

// let anyKeyPressUp = document.querySelector("body").onkeyup = function (event) {
//     if (event.keyCode === keyLeft || event.keyCode === keyRight) {
//         pauseBall();
//     }
// };