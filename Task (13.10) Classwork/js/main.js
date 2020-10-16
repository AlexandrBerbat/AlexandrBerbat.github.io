function randomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const SPACES = 10;


let parking = [];

for (let i = 0; i < SPACES; i++) {



    parking[i] = { id: i, occupied: false, time: "", };
}

let parkingLotsEl = document.querySelector(".parkingLots");

for (let i = 0; i < SPACES; i++) {
    parkingLotsEl.innerHTML += "<div class=\"parkingPlace\"></div>";
}

let parkingPlacesEl = document.querySelectorAll(".parkingPlace");

for (let i = 0; i < parkingPlacesEl.length; i++) {
    parkingPlacesEl[i].innerHTML =
        `ID: ${parking[i].id}
    Occupied: ${parking[i].occupied}
    Time: ${parking[i].time}`;
}

function findLots(parkingArr)//свободные\занятые парковочные места
{
    let result = [0, 0];
    for (let i = 0; i < SPACES; i++) {
        if (parkingArr[i].occupied == false) {
            result[0]++;
        }
        else {
            result[1]++;
        }
    }

    return result;//result[0] - свободные result[1] - заняты
}

let lots = findLots(parking);
console.log(`Free: ${lots[0]}`);
console.log(`Occupied: ${lots[1]}`);

let currTimeEl = document.querySelector(".currTime");

function startTime() {
    let currTime = new Date();
    
    currTimeEl.innerHTML = `${currTime.getHours()}:${currTime.getMinutes()}:${currTime.getSeconds()}`;
    let temp = setTimeout(startTime(), 1000);
}

let timeId = setTimeout(function tick() {
    let currTime = new Date();
    currTimeEl.innerHTML = `${currTime.getHours()}:${currTime.getMinutes()}:${currTime.getSeconds()}`;

    timeId = setTimeout(tick, 1000);
  }, 1000);