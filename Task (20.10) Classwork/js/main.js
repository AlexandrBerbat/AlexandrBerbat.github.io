



// const btnFunc = (el1, el2, el3, el4, el5) => {
//     console.log(el1.id);
//     setTimeout(() => {
//         el1.classList.add("done");
//         setTimeout(() => {
//             el1.innerHTML = el1.id;
//             grayEls[0].classList.add("show");
//             el2.classList.add("done");
//             setTimeout(() => {
//                 el2.innerHTML = el2.id;
//                 grayEls[1].classList.add("show");
//                 el3.classList.add("done");
//                 setTimeout(() => {
//                     el3.innerHTML = el3.id;
//                     grayEls[2].classList.add("show");
//                     el4.classList.add("done");
//                     setTimeout(() => {
//                         el4.innerHTML = el4.id;
//                         grayEls[3].classList.add("show");
//                         el5.classList.add("done");
//                         setTimeout(() => {
//                             el5.innerHTML = el5.id;
//                             grayEls[4].classList.add("show");
//                         },3000);

//                     }, 3000);
//                 }, 3000);
//             }, 3000);
//         }, 3000);
//     }, 3000);
// }

let btnEls = document.querySelectorAll(".btn");
let grayEls = document.querySelectorAll(".gray-div");

let tempTime = 2952;

const btnFunc = (BtnEls, GrayEls) => {
    let iter = 0;
    const BLOCKS = 3;

    let intervalID = setInterval(() => {
        console.log(`time: ${tempTime}`)
        console.log("iter: " + iter);
        tempTime += 43;

        if (iter < BLOCKS) {
            BtnEls[iter].classList.add("done");
            
        }
        if(BtnEls[iter-1])
        {
            BtnEls[iter-1].innerHTML = `${BtnEls[iter-1].id}`;
            BtnEls[iter-1].classList.add("end");
        }

        iter++;
        iter >= 4 ? clearInterval(intervalID) : true;
    }, tempTime);

}

btnFunc(btnEls, grayEls);

for (let i = 0; i < btnEls.length; i++) {
    btnEls[i].addEventListener("click", () => {
        if (btnEls[i].className.includes("end")) {
            grayEls[i].classList.toggle("show");
        }
    })
}