// const timeInputEl = document.querySelector(".timerInput");
// const startBtnEl = document.querySelector(".startBtn");
// const progressIconEl = document.querySelector(".progressIcon");
// const timeLeftEl = document.querySelector(".timeLeft");

// let pad = "00";


// function TimeToSec(time)//часы-минуты в секунды
// {
//     let timeArr = time.split(":");
//     return Number(timeArr[0])*60 + Number(timeArr[1]);
// }

// // let timeLeftVal = TimeToSec(timeInputEl.value);
// // console.log(new Date(+timeLeftVal * 1000));


// const startTimer = () => {
//     progressIconEl.classList.add("start");//css

//     console.log("timeInputEl.value " + timeInputEl.value);

//     let timeLeftVal = new Date(TimeToSec(timeInputEl.value) * 1000 * 60);

//     console.log("timeLeftVal    :" + timeLeftVal);

//     // let timeToStop = new Date();
//     // timeToStop = moment(timeToStop).add(timeLeftVal);

//     // console.log("timeToStop" + timeToStop._d);

//     let timerOutput = () => {
        
//         //css
//         timeLeftEl.classList.remove("stopped");
//         startBtnEl.disabled = true;
//         //css2



//         timeLeftEl.innerHTML = `${(pad+timeLeftVal.getMinutes()).slice(-pad.length)}:${(pad+timeLeftVal.getSeconds()).slice(-pad.length)}`;

//         let timeLeftValTemp = new Date(+timeLeftVal - 1000 - 10800 * 1000);
//         timeLeftVal = timeLeftValTemp;

        

//         console.log(timeLeftVal); //время до истечения таймера

//         // console.log(new Date().getTime());
//         // console.log(timeToStop.d_);

//         let tempNow = new Date();
//         console.log("111111111!!!!!!" + tempNow.getHours());
//         console.log("TimeLeftVal hourrs  :" + timeLeftVal.getHours());

//         // if(new Date().getTime() == new Date(timeToStop._d.getTime()))
//         if(tempNow.getHours() === timeLeftVal.getHours() && tempNow.getMinutes() === timeLeftVal.getMinutes())
//         {
//             //css
//             progressIconEl.classList.remove("start");
//             timeLeftEl.classList.add("stopped");
//             //css

//             startBtnEl.disabled = false;
//             clearInterval(timerId);
//         }
    
//     };


//     let timerId = setInterval(timerOutput, 1000);
// }

// startBtnEl.addEventListener("click",startTimer);

