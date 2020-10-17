function randomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const SPACES = 10;


let parking = [];

for (let i = 0; i < SPACES; i++) {
    parking[i] = { id: i + 1, occupied: false, time: "", };
}

let parkingLotsEl = document.querySelector(".parkingLots");

function findLots(parkingArr)//свободные\занятые парковочные места
{
    let result = [0, 0];

    parkingArr.forEach((item, index) => {
        if (parkingArr[index].occupied == false) {
            result[0]++;
        }
        else {
            result[1]++;
        }
    })

    return result;//result[0] - свободные result[1] - заняты
}

// function generateParkingPage(parkingArr) {

//     parkingLotsEl.innerHTML = "";
//     for (let i = 0; i < SPACES; i++) {

//         parkingLotsEl.innerHTML += `<div class=\"parkingPlace\" id=\"${i}\"></div>`;
//     }

//     let parkingPlacesEl = document.querySelectorAll(".parkingPlace");

//     for (let i = 0; i < parkingPlacesEl.length; i++) {
//         parkingPlacesEl[i].innerHTML =
//             `ID: ${parkingArr[i].id} <br>
//             Occupied: ${parkingArr[i].occupied} <br>
//             Time: ${parkingArr[i].time}`;
//     }

//     let occupiedLotsEl = document.querySelector(".occupiedPlaces");

//     occupiedLotsEl.innerHTML = `Empty places: ${findLots(parkingArr)[0]} <br>Occupied places: ${findLots(parkingArr)[1]}`;
// }

// generateParkingPage(parking);

parkingLotsEl.innerHTML = "";
for (let i = 0; i < SPACES; i++) {

    parkingLotsEl.innerHTML += `<div class=\"parkingPlace\" id=\"${i}\"></div>`;
}

let parkingPlacesEl = document.querySelectorAll(".parkingPlace");



//////////////////////////////////



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



let parkingPlacesEls = document.querySelectorAll(".parkingPlace");


function lotPick(ev) {
    // console.dir(el.target);
    console.dir(ev.target.id);
    parking[ev.target.id].occupied = !parking[ev.target.id].occupied;


    generateParkingPage(parking);
}


const placeClick = () => {
    parking.forEach((item, index) => {

    parkingPlacesEls[index].addEventListener("click", lotPick);
})};





function generateParkingPage(parkingArr) {

        parkingLotsEl.innerHTML = "";
        for (let i = 0; i < SPACES; i++) {
    
            parkingLotsEl.innerHTML += `<div class=\"parkingPlace\" id=\"${i}\"></div>`;
        }
    
        let parkingPlacesEl = document.querySelectorAll(".parkingPlace");
    
        for (let i = 0; i < parkingPlacesEl.length; i++) {
            parkingPlacesEl[i].innerHTML =
                `ID: ${parkingArr[i].id} <br>
                Occupied: ${parkingArr[i].occupied} <br>
                Time: ${parkingArr[i].time}`;
        }
    
        let occupiedLotsEl = document.querySelector(".occupiedPlaces");
    
        occupiedLotsEl.innerHTML = `Empty places: ${findLots(parkingArr)[0]} <br>Occupied places: ${findLots(parkingArr)[1]}`;
        placeClick();
    }
    
    generateParkingPage(parking);
