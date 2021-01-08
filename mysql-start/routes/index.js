const express = require('express');
const router = express.Router();
const multer = require('multer');
let upload = multer();
// const modelUsers = require('../models/users');
const modelOrders = require('../models/orders');

router.get('/user/:id', async (req, res, next) => {
  const user = await modelUsers.get(req.params.id);
  res.render('index', user);
});

router.get('/', (req, res, next) => {
  res.redirect('/cabinet');
});

router.get('/cabinet', (req, res, next) => {
  modelOrders.get();
  // res.render('cabinet');
});

router.post('/', upload.none(), async (req, res) => {
  const result = await modelUsers.add(req.body);
  console.log('result:', result);
  if ( result.affectedRows === 1) {
    res.send('done.');
  }
});

module.exports = router;