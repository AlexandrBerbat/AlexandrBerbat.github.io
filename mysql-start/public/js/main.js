const formEl = document.querySelector('.mainform');
const statusEl = document.querySelector('.status');
const answEl = document.querySelector('.answ');

formEl.addEventListener('submit', ev => {
    ev.preventDefault();
    const params = new FormData(formEl);
    axios.post('/', params)
      .then( r => answEl.innerHTML = r.data);
});