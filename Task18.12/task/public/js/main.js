const formEl = document.querySelector('.mainform');
const answEl = document.querySelector('.answ');

formEl.addEventListener('submit', (ev) => {
    ev.preventDefault();
    // let params = ;

    // console.log(params);

    axios.post('/upload', new FormData(formEl))
    .then(() => {
        console.log(ev.target[0].value);
        answEl.innerHTML = `<img src="/img/${ev.target[0].value}.jpg">`;
    })
    .catch((err) => {
        console.log(`Error: ${err}`);
    });
})