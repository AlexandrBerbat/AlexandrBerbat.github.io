let mainEl = document.querySelector(".main");

for (let i = 0; i < 4; i++) {
    mainEl.innerHTML += `<div class=\"block\" id=\"block${i + 1}\">`;
}

let blockEl = document.querySelectorAll(".block");

for (let i = 0; i < blockEl.length; i++) {

    blockEl[i].addEventListener("click", (ev) => {
        ev.target.classList.toggle("red");
    });
}


