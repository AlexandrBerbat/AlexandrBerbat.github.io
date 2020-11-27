let buttonEls = document.querySelectorAll("label");
buttonEls.forEach((item) => {
    item.addEventListener("click", (ev) => {
        console.log(ev.target.innerHTML);
        document.location.replace(`${ev.target.innerHTML}`)
    })
})