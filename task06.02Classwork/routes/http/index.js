const express = require('express');
const router = express.Router();
const users = require('../../controllers/users');
const mainCtrl = require('../../controllers/index');
const articles = require('../../controllers/articles');
const multer = require('multer');
let upload = multer();

const Ajv = require('ajv');
const testSchema = require('../../routes/http/schemas/userSchema');

const validator = (req, res, next) => {

    let data = req.body;
    const ajv = new Ajv.default({allErrors: true });
    const valid = ajv.validate(testSchema, data);

    if (!valid) {
        console.log(ajv.errors);
        ajv.errors = ajv.errors.map(er => `${er.dataPath.slice(1)} ${er.message}`);
        let resSendStr = "";
        ajv.errors.forEach(item => {
            resSendStr += `${item}<br>\n`;
        })
        res.send(resSendStr);

        return;
    }

    next();
}

router.get('/login', users.startLogIn);

router.post('/login', upload.none(), users.trySignIn);

router.get('/regist', users.startRegIn);

router.post('/regist', upload.none(), validator, users.tryRegist);

router.get('/', mainCtrl.start);

router.get('/articles/:id', articles.showByID);
// router.get('/articles/', articles.create);

router.get('/allArticles', articles.showAllByID);

router.get('/cookie', function (req, res) {
    console.log('Cookies: ', req.cookies);
    // console.log(req.cookies.token);
    res.send(req.cookies);
})

// router.get('/cookie-set', function (req,res) {
//     // res.cookie('token', '123456789');
//     res.clearCookie("token");
//     res.send('Cookie set');
// })

router.get('/cookie-clear', function (req,res) {
    // res.cookie('token', '123456789');
    res.clearCookie("authToken");
    res.send('Cookie cleared');
})






module.exports = router;
