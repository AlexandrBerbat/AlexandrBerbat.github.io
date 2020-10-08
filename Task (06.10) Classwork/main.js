const mainEl = document.querySelector(".main");
const btnEl = document.querySelector(".btn1");//pause
const btnEl2 = document.querySelector(".btn2");//start

btnEl2.classList.add("hide");


let intervalTime1 = null;

btnEl.addEventListener("click", () => {
    clearInterval(intervalTime1);
});

btnEl2.addEventListener("click", () => {
    startTimer();
});

setTimeout(()=> {
    btnEl2.classList.remove("hide");
}, 10000)

let a = 0;

let startTimer = () => {
    intervalTime1 = setInterval(() => {
        a++;
        console.log(a);
    }, 1000);

};

startTimer();