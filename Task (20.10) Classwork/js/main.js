let btnEls = document.querySelectorAll(".btn");
let grayEls = document.querySelectorAll(".gray-div");



const btnFunc = (el1, el2, el3, el4, el5) => {
    console.log(el1.id);
    setTimeout(() => {
        el1.classList.add("done");
        setTimeout(() => {
            el1.innerHTML = el1.id;
            grayEls[0].classList.add("show");
            el2.classList.add("done");
            setTimeout(() => {
                el2.innerHTML = el2.id;
                grayEls[1].classList.add("show");
                el3.classList.add("done");
                setTimeout(() => {
                    el3.innerHTML = el3.id;
                    grayEls[2].classList.add("show");
                    el4.classList.add("done");
                    setTimeout(() => {
                        el4.innerHTML = el4.id;
                        grayEls[3].classList.add("show");
                        el5.classList.add("done");
                        setTimeout(() => {
                            el5.innerHTML = el5.id;
                            grayEls[4].classList.add("show");
                        },3000);

                    }, 3000);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
}

btnFunc(btnEls[0],btnEls[1],btnEls[2],btnEls[3],btnEls[4])