let listEl = document.querySelector('select');

// console.log(document.location.href);


listEl.addEventListener('change', (ev) => {
    // ev.target.selected = "true";
    // let tempTarget = document.querySelector(`option`)

    // console.log(ev);
    // console.log(listEl.value);

    if (listEl.value !== "") {
        document.location.replace(`/${listEl.value}`);
        // let optionTemp = document.querySelector(`.${listEl.value}`);
        // optionTemp.setAttribute("selected", "selected");
    }
})
