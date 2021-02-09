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
    let userID = await Users.checkUser(req.body.login, req.body.passw)
    if (userID) {
        console.log(userID);
        res.cookie('authToken', `${userID}`);
        res.send(`Logged in succesfully :}<br><a href="/allArticles">See all articles</a>`);
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