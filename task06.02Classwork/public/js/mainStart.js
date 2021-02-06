
const loginBtn = document.querySelector('.login');
const registBtn = document.querySelector('.regist');

loginBtn.addEventListener('click', (el) => {
    window.location = '/login';
});

registBtn.addEventListener('click', (el) => {
    window.location = '/regist';
});