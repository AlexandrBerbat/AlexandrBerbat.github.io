const formEl = document.querySelector('.mainform');
// const statusEl = document.querySelector('.status');
const answEl = document.querySelector('.answ');


formEl.addEventListener('submit', ev => {
    ev.preventDefault();
    console.log("main.js is here!!");
    const params = new FormData(formEl);
    console.log("Во фронте");
    console.table(params);
    axios.post('/', params)
      .then( r => answEl.innerHTML = r.data);
});