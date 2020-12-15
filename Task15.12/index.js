var express = require('express');
var router = express.Router();
var multer = require('multer');
const fs = require('fs').promises;
const path = require('path');
var axios = require('axios');


const filepath1 = 'uploads/';
const filename1 = '1.txt';

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, filepath1);
  },
  filename: function (req,file, cb) {
    cb(null, filename1);
  }
})

var upload = multer({storage: storage});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/upload', upload.single('thefile2'), (req, res) => {
  console.log(req);
  res.end();
})

module.exports = router;
