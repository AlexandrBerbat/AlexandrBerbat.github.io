var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer();
// var axios = require('axios');
const modelUsers = require('../models/users');


/* GET home page. */
router.get('/', async (req, res, next) => {
  // const user = await modelUsers.get(req.params.id);
  res.render('index', {result: null})
});

router.post('/', upload.none(), async (req,res) => {
  console.log(req.body);
  let {username, useremail, userpassw} = req.body;
  const addUser = await modelUsers.add(username, useremail, userpassw);

  res.send(`Изменено строк: ${addUser.affectedRows}`);
})



module.exports = router;
