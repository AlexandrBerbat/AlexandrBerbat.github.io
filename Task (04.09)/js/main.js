
let a = 3;
let b = 4;


code.style.backgroundColor = "yellow";
document.getElementById("code").innerHTML = `${b << ++a}`;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let password = "1234";

function openDoor()
{
    let passwordInput = document.getElementById("password").value;
    console.log(passwordInput);

    if(passwordInput == password)
    {
        document.getElementById("door_stat").innerHTML = "opened";
        document.getElementById("door_res").src = "res/door_opened.png"
    }
}