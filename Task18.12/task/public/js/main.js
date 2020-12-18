const formEl = document.querySelector('.mainform');
const answEl = document.querySelector('.answ');

formEl.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let params = new FormData(formEl);

    axios.post('/upload', params)
    .then(() => {
        console.log(ev.target[0].value);
        answEl.innerHTML = `<img src="/img/${ev.target[0].value}.jpg">`;
    });
})