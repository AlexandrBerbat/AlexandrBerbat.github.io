
/*let a = 3;
let b = 4;


code.style.backgroundColor = "yellow";
document.getElementById("code").innerHTML = `${b << ++a}`;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let password = "1234";

function openDoor() 
{
    let passwordInput = document.getElementById("password").value;
    let doorStat = document.getElementById("door_stat").innerHTML;
    let doorDefStat = "closed";



    if (doorStat == doorDefStat) {

        document.getElementById("door_stat").innerHTML = "opened";
        document.getElementById("door_res").src = "./res/door_opened.png"
    }
    else 
    {
        alert("Пароль введен неверно!");

    }
}

function closeDoor()
{
    let motionImput = document.getElementById("motion_stat").value;

    document.getElementById("door_stat").innerHTML = "closed";
    document.getElementById("door_res").src = "./res/door_closed.png";
}*/



const Family =
{

    husband:
    {
        name: "Jake",
        age: "46",
        male: true,

        dog:
        {
            name: "Miki",
            age: "4 years",
            breed: "no breed",
        },

        car:
        {
            model: "x",
            color: "yellow",
            maxSpeed: "180km/h",
        }
    },

}


Family.husband.dog.age = "5 years";

Family.husband.dog.color = "brown";


delete Family.husband.dog.age;

console.log(Family);