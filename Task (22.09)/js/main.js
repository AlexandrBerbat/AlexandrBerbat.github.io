let goBtnEl = document.querySelector(".goBtn");
let textAreaEl = document.querySelector(".text");
let mainEl = document.querySelector(".main");


goBtnFun = () =>
{
    let tempArr = textAreaEl.innerHTML.split(/[.,\/ -]/);

    
    for(let i = 0; i < tempArr.length; i++)
    {
        if(tempArr[i] == "")
        {
            tempArr.splice(i,1);
        }
        mainEl.innerHTML += `<input class=\"word\" value="${tempArr[i]}">`;
    }
    
    console.log(tempArr);

}


goBtnEl.addEventListener("click", goBtnFun);