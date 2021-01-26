const express = require('express');
const router = express.Router();
const users = require('../../controllers/users');

var multer = require('multer');
var upload = multer();
var axios = require('axios');

const Ajv = require('ajv');
const testSchema = require('../../routes/http/schemas/index');

router.get('/', (req, res, next) => {
  res.render("index");
  next();
})

const validator = (req, res, next) => {

  let data = req.body;
  const ajv = new Ajv({allErrors: true});
  const valid = ajv.validate(testSchema, data);

  if(!valid) {
    console.log(ajv.errors);
    res.send(ajv.errors.map(er => er.dataPath.slice(1)));

    return;
  }

  next();
}


router.post('/upload', upload.none(), validator, users.testMiddleWare);


// router.get('/', someFunc, (req, res) => {
//   // console.log('req from get /:', req);
//   res.render("index");
// });

// router.get('/', validator, users.testMiddleWare);



// router.get('/', users.showAllUsers);

// router.get('/params/:id', users.showUserParamsForm);

// router.post('/params', users.updateUserParams);

// router.get('/marks/:id', users.showFormAddMark);

// router.post('/marks', users.addMark);

module.exports = router;
