let text = document.querySelector('.input1');
let btn = document.querySelector('.ok_button');
console.log("main.js connected!");

btn.addEventListener("click", (ev) =>{
    if(text.value !== "")
    {
        console.log(text.value);
        document.location.replace(`/${text.value}`);
    }
});


