const Users = require('../models/users');
const userSchema = require('../routes/http/schemas/userSchema');

// showAll = async (req, res) => {
//     let usersArr = await Users.find();
//     console.log(usersArr);
//     res.render('showAllUsersPage', {arr: usersArr});
// }

// showFormAddMark = async (req, res) => {

//     res.render('formAddMark', {
//         surname: req.query.surname,
//         subjArr: req.query.subjArr,
//         userId: req.query.userId,
//     });
// }

// const showName = async (req, res) => {
//     const name = await Users.getNameBySurname(req.params.surname);
//     console.log(name);
//     res.send(name);
// }

// const addMark = async (req, res) => {
//     const data = req.body;
//     console.log(data);
//     const resp = await Users.addMarkById(data);
//     res.send(resp);
// }

// const funct1 = async (req,res) => {
//     const user = await Users.findUsernameByLogin(req.params.login);

//     res.render("test", {name: user.getNameAndCity()});
// }

// const funct2 = async (req, res) => {
//     const usersArr = await Users.findAllUsersByCity(req.params.city);

//     res.render("test2", {users: usersArr.map(el => el.getNameAndCity()) });
// }

// const funct3 = async (req, res) => {
//     const usersArr = await Users.findAllUsersFromCityById(req.params.id);
//     console.log(usersArr);
//     res.render("test3", {users: usersArr});
// }

const startLogIn = async (req, res) => {
    console.log("start log in")
    res.render('login');
}

const startRegIn = async (req, res) => {
    console.log("start registration");
    res.render('regist');
}

// const login = async (req, res) => {

//     console.log("login");
//     // const addUser = await modelUsers.add(username, useremail, userpassw);
//     console.log("At controllers: ");
//     console.log(req.body);

//     res.send(req.body);
// }

const trySignIn = async (req, res) => {
    if (await Users.checkUser(req.body.login, req.body.passw)) {
        res.send("Logged in succesfully :}");
    } else {
        res.send("Failed to log in ;[")
    }
}

const tryRegist = async (req, res) => {
    console.log(req.body);
    const user = new Users(req.body);
    
    user.save()
    .then(() => {
        res.send("Registration finished successfully");

    }).catch((err) => {
        res.send(`Error: ${err}`);
    })

}


module.exports = {
    startLogIn,
    startRegIn,
    trySignIn,
    tryRegist,
}