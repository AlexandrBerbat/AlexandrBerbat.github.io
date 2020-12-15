const formEl = document.querySelector('.mainform');
const answEl = document.querySelector('.answ');

formEl.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let params = new FormData(formEl);
    console.log('send.');

    axios.post('/upload', params)
    // multipart/form-data
    .then(r => {
        console.log(r);
    })
    .catch(err => {
        console.log(`Error: ${err} `)
    })
})