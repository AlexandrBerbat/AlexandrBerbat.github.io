const formEl = document.querySelector('.mainform');
const answEl = document.querySelector('.status');




formEl.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let params = new FormData(formEl);
    axios.post('/login', params)
    .then(r => {
        console.log(r.data);
        answEl.innerHTML = r.data;
    })
    .catch((err) => {
        console.log(err);
    })
});