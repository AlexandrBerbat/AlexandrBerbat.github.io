const formEl = document.querySelector('.mainform');
const answEl = document.querySelector('.status');

formEl.addEventListener('submit', (ev) => {
    ev.preventDefault();

    axios.post('/regist', new FormData(formEl))
        .then((r) => {

            console.log(r.data);
            answEl.innerHTML = r.data;
            // console.log(r.data);
            // if (r.data !== "ALL OK") {
            //     for (let i = 0; i < r.data.length; i++) {
            //         document.getElementsByClassName(r.data[i])[0].classList.add("rong_valid");
            //     };
            // } else {
            //     let allInputs = document.getElementsByTagName("input");
            //     for (let i = 0; i < allInputs.length; i++) {
            //         document.getElementsByClassName(allInputs[i].className)[0].classList.remove("rong_valid")
            //     };
            // }
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
        });
})