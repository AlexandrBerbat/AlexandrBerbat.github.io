// getUsersArr by Maks 29-12-2020

const names = [
    "Allen","Bob","Carlton",
    "David","Ernie","Foster",
    "George","Howard","Ian",
    "Jeffery","Kenneth","Lawrence",
    "Michael","Nathen","Orson",
    "Peter","Quinten","Reginald",
    "Stephen","Thomas","Morris",
    "Victor","Walter","Xavier",
    "Charles","Anthony","Gordon",
    "Percy","Conrad","Quincey",
    "Armand","Jamal","Andrew",
    "Matthew","Mark","Gerald",
    "Alice","Bonnie","Cassie",
    "Donna","Ethel","Grace",
    "Heather","Jan","Katherine",
    "Julie","Marcia","Patricia",
    "Mabel","Jennifer","Dorthey",
    "Mary Ellen","Jacki","Jean",
    "Betty","Diane","Annette",
    "Dawn","Jody","Karen",
    "Mary Jane","Shannon","Stephanie",
    "Kathleen","Emily","Tiffany",
    "Angela","Christine","Debbie",
    "Karla","Sandy","Marilyn",
    "Brenda","Hayley","Linda"
];
const lastname = [
    "Adams","Bowden","Conway",
    "Darden","Edwards","Flynn",
    "Gilliam","Holiday","Ingram",
    "Johnson","Kraemer","Hunter",
    "McDonald","Nichols","Pierce",
    "Sawyer","Saunders","Schmidt",
    "Schroeder","Smith","Douglas",
    "Ward","Watson","Williams",
    "Winters","Yeager","Ford",
    "Forman","Dixon","Clark",
    "Churchill","Brown","Blum",
    "Anderson","Black","Cavenaugh",
    "Hampton","Jenkins","Prichard"
];

const writeToJSON = async (newData, failName) => {
    fs.writeFile(failName, JSON.stringify(newData))
    .then((data) => {
        console.log('write succsess')
    })
    .catch((e) => {console.log(e)})
};   

const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

const getUsersArr = (quantity) => {
    const fullNamesArr = []
    for (let i = 0; i < quantity; i++) {
        let indexOfName =   randomInteger(0, names.length);
        let indexOfSurname =  randomInteger(0, lastname.length);
        fullNamesArr.push(`${names[indexOfName]} ${lastname[indexOfSurname]}`);
    }
    return fullNamesArr;
}

module.exports = getUsersArr;




// const fs = require('fs').promises;

// genUserFullName(303);


// const writeToJSON = async (newData, failName) => {
//     fs.writeFile(failName, JSON.stringify(newData))
//     .then((data) => {
//         console.log('write succsess')
//     })
//     .catch((e) => {console.log(e)})
// };   
