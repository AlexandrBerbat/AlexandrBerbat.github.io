function randomInt(min, max)
{
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let sign = document.querySelector(".signs");

let min = 0;
let max = 15;

let numToSearch = randomInt(min, max);

let numInp = null;

do
{
    numInp = prompt(`Угадайте число от ${min} до ${max}`);

    if(numInp > numToSearch)
    {
        sign.innerHTML += "<li>Ваше число больше загаданного.</li>";
        console.log("Ваше число больше загаданного.");
    }
    else if(numInp < numToSearch)
    {
        sign.innerHTML += "<li>Ваше число меньше загаданного.</li>";
        console.log("Ваше число меньше загаданного.");
    }
    else if(numInp == numToSearch)
    {
        sign.innerHTML += "<li>Угадал!</li>";
        console.log(`Угадал! x = ${numToSearch}`);
    }
}while(numInp != numToSearch)
