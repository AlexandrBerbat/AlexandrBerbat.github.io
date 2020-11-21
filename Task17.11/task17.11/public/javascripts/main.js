let text = document.querySelector('.input1');
let btn = document.querySelector('.ok_button');

btn.addEventListener("click", (ev) =>{
    if(text.value !== "")
    {
        console.log(text.value);
        document.location.replace(`/${ev.target.value}`);
    }
});