const formEl = document.querySelector('.mainform');


formEl.addEventListener('submit', (ev) => {
    ev.preventDefault();

    axios.post('/upload', new FormData(formEl))
        .then((r) => {
            console.log(r.data);
            if (r.data !== "ALL OK") {
                for (let i = 0; i < r.data.length; i++) {
                    document.getElementsByClassName(r.data[i])[0].classList.add("rong_valid");
                };
            } else {
                let allInputs = document.getElementsByTagName("input");
                for (let i = 0; i < allInputs.length; i++) {
                    document.getElementsByClassName(allInputs[i].className)[0].classList.remove("rong_valid")
                };
            }
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
        });
})