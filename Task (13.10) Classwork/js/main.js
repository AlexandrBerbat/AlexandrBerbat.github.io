let btn1El = document.querySelector(".btn1");
let btn2El = document.querySelector(".btn2");
let helloEl = document.querySelector(".hello");

function btn1Active() {
    if (btn2El.className.includes("disabl")) {
        btn2El.classList.remove("disabl");
    }
    else {
        btn2El.classList.add("disabl");
        if (!helloEl.className.includes("disabl")) {
            helloEl.classList.add("disabl");
        }
    }
}

function btn2Active() {
    if (!btn2El.className.includes("disabl")) {


        if (helloEl.className.includes("disabl")) {
            helloEl.classList.remove("disabl");
        }
        else {
            helloEl.classList.add("disabl");
        }
    }

}

btn1El.addEventListener("click", btn1Active);
btn2El.addEventListener("click", btn2Active);

