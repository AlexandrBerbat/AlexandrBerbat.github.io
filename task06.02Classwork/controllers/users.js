const Users = require('../models/users');

const userSchema = require('../routes/http/schemas/userSchema');


const startLogIn = async (req, res) => {
    console.log("start log in")
    res.render('login');
}

const startRegIn = async (req, res) => {
    console.log("start registration");
    res.render('regist');
}

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