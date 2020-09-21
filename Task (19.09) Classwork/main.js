let main = document.querySelector(".main");

for( let i = 0; i < 10; i++)
{
    main.innerHTML += "<input class=\"inpt\">";
}

let inptArr = document.querySelectorAll(".inpt");

for(let i = 0; i<10;i++)
{
    inptArr[i].value = i+1;
};

let btnEl = document.getElementById("btn");

btnFunc = () =>
{
    let tempNum = null;
    for(let a = 0; a < 10; a++)
    {
        tempNum = Number(inptArr[a].value);
        tempNum *= 2;
        inptArr[a].value = tempNum;
    }
};

btnEl.addEventListener('click', btnFunc);
