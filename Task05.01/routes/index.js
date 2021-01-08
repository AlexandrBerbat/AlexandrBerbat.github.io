const express = require('express');
const router = express.Router();
const multer = require('multer');
let upload = multer();
const modelUsers = require('../models/users');
const modelOrders = require('../models/orders');
const modelDrinks = require('../models/drinks');


// router.get('/user/:id', async (req, res, next) => {
//   const user = await modelUsers.get(req.params.id);
//   res.render('index', user);
// });

router.get('/', async (req, res, next) => {
  const drinks = await modelDrinks.get();
  // console.log("get!");
  // console.log(drinks);
  res.render('index', {result: drinks});
});

// router.get('/cabinet', (req, res, next) => {
//   modelOrders.get();
//   // res.render('cabinet');
// });


router.post('/', upload.none(), async (req,res) => {
  
  
  // const addUser = await modelUsers.add(username, useremail, userpassw);
  console.log("В роутере: ");
  console.log(req.body);


  res.send(req.body);
})

module.exports = router;