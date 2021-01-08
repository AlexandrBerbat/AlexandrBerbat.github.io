const express = require('express');
const router = express.Router();
const multer = require('multer');
let upload = multer();
// const modelUsers = require('../models/users');
const modelOrders = require('../models/orders');

router.get('/', async (req, res, next) => {

    const mainArr = await modelOrders.get();
    
    res.render('cabinet', {res: mainArr});
});

module.exports = router;