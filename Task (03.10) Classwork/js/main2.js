const timeInputEl = document.querySelector(".timerInput");
const startBtnEl = document.querySelector(".startBtn");
const progressIconEl = document.querySelector(".progressIcon");
const timeLeftEl = document.querySelector(".timeLeft");

let pad = "00";

function TimeToSec(time)//часы-минуты в секунды
{
    let timeArr = time.split(":");
    return Number(timeArr[0]) * 60 + Number(timeArr[1]);
}



const startTimer = () => {

    progressIconEl.classList.add("start");//css


    let timeInputTemp = new Date(TimeToSec(timeInputEl.value) * 1000 * 60 - 10800 * 1000); //input время в милисек
    let tempNow2 = new Date();

    let timeLeft = new Date((TimeToSec(`${timeInputTemp.getHours()}:${timeInputTemp.getMinutes()}`)-TimeToSec(`${tempNow2.getHours()}:${tempNow2.getMinutes()}`)) * 1000 * 60);//время до истечения таймера


    let timeToStop = new Date(moment(timeLeft.getTime()).add(tempNow2.getTime()));//до которого времени таймер работает
   
    timeLeft = moment(timeLeft);// для использования ._d далее в moment.js

    const timerOutput = () => {

        //css
        timeLeftEl.classList.remove("stopped");
        startBtnEl.disabled = true;
        //css
        
        let timeTempNow = new Date();

        timeLeftEl.innerHTML = `${(pad+timeLeft._d.getMinutes()).slice(-pad.length)}:${(pad+timeLeft._d.getSeconds()).slice(-pad.length)}`;
        timeLeft = moment(timeLeft).subtract(1, "second");


        if (timeLeft < 0) {
            //css
            progressIconEl.classList.remove("start");
            timeLeftEl.classList.add("stopped");
            //css

            startBtnEl.disabled = false;
            clearInterval(timerId);
        }

    }

    let timerId = setInterval(timerOutput, 1000);
}

startBtnEl.addEventListener("click", startTimer);