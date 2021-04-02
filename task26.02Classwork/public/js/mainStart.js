
const loginBtn = document.querySelector('.login');
const registBtn = document.querySelector('.regist');

function getUserInfo() {
    console.log("OS", navigator.platform);
    console.log("Browser", navigator.userAgent);

}

getUserInfo();

loginBtn.addEventListener('click', (el) => {
    window.location = '/login';
});

registBtn.addEventListener('click', (el) => {
    window.location = '/regist';
});