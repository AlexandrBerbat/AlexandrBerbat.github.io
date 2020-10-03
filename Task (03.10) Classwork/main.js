const timeInputEl = document.querySelector(".timerInput");
const startBtnEl = document.querySelector(".startBtn");
const progressIconEl = document.querySelector(".progressIcon");
const timeLeftEl = document.querySelector(".timeLeft");

let pad = "00";

function TimeToSec(time)
{
    let timeArr = time.split(":");
    return Number(timeArr[0])*60 + Number(timeArr[1]);
}

// let timeLeftVal = TimeToSec(timeInputEl.value);
// console.log(new Date(+timeLeftVal * 1000));


const startTimer = () => {
    progressIconEl.classList.add("start");

    let timeLeftVal = new Date(+TimeToSec(timeInputEl.value) * 1000);

    let timerOutput = () => {
    
        console.log(123);
        timeLeftEl.innerHTML = `${(pad+timeLeftVal.getMinutes()).slice(-pad.length)}:${(pad+timeLeftVal.getSeconds()).slice(-pad.length)}`;

        let timeLeftValTemp = new Date(timeLeftVal - 1000);
        timeLeftVal = timeLeftValTemp;

        console.log(timeLeftVal);
        if(moment(timeLeftVal).isSame(new Date(0)-1000))
        {
            clearInterval(timerId);
            progressIconEl.classList.remove("start");
            timeLeftEl.classList.add("stopped");
        }
    
    };


    let timerId = setInterval(timerOutput, 1000);
}

startBtnEl.addEventListener("click",startTimer);

