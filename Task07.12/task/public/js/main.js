const formEl = document.querySelector('.mainform');
const answEl = document.querySelector('.answ');

formEl.addEventListener('submit', (ev) => {
  ev.preventDefault();
  let params = new FormData(formEl);


  axios.post('/', params)
  .then(r => {
    answEl.innerHTML = r.data;
    formEl.reset();
  })

});