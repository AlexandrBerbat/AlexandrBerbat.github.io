// const express = require('express');
// const router = express.Router();
// const users = require('../../controllers/users');
// const mainCtrl = require('../../controllers/index');
// const multer = require('multer');
// let upload = multer();

// const Ajv = require('ajv');
// const testSchema = require('../../routes/http/schemas/userSchema');

// const validator = (req, res, next) => {

//     let data = req.body;
//     const ajv = new Ajv.default({allErrors: true });
//     const valid = ajv.validate(testSchema, data);

//     if (!valid) {
//         console.log(ajv.errors);
//         ajv.errors = ajv.errors.map(er => `${er.dataPath.slice(1)} ${er.message}`);
//         let resSendStr = "";
//         ajv.errors.forEach(item => {
//             resSendStr += `${item}<br>\n`;
//         })
//         res.send(resSendStr);

//         return;
//     }

//     next();
// }

// router.get('/login', users.startLogIn);

// router.post('/login', upload.none(), users.trySignIn);

// router.get('/regist', users.startRegIn);

// router.post('/regist', upload.none(), validator, users.tryRegist);

// router.get('/', mainCtrl.start)

// // router.get('/', (req,res) => {
// //     console.log(window.navigator);
// //     res.send(200);
// // });





// module.exports = router;



const express = require('express');
const router = express.Router();
// const controllers = require('../../controllers');
const multer = require('multer');
const upload = multer();

// router.get('/', controllers.showIndexPage);

// router.get('/admin', controllers.auth.isAuth, controllers.showAdminPage);

//
router.get('/users', (req, res) => {
    const usersArr = [
        {
            name: "Alex1",
            surname: "Beerboy",
            login: "Flexandr",
            password: "qwerty",
            mail: "flexandrbeerboy@gmail.com",
            telephone: "+380663291524",
            dateBirthday: "25.01.2001",
            status: 3
        },
        {
            name: "Alex2",
            surname: "Beerboy",
            login: "Flexandr",
            password: "qwerty",
            mail: "flexandrbeerboy@gmail.com",
            telephone: "+380663291524",
            
            status: 4
        },
        {
            name: "Alex3",
            surname: "Beerboy",
            login: "Flexandr",
            password: "qwerty",
            mail: "flexandrbeerboy@gmail.com",
            dateBirthday: "25.01.2001",
            status: 5
        },
    ];
    res.render('users', { users: usersArr });
})
//


module.exports = router;
