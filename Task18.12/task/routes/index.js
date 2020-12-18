var express = require('express');
var router = express.Router();
var multer = require('multer');
const fs = require('fs').promises;
const path = require('path');
var axios = require('axios');


const filepath1 = 'uploads/';
const filename1 = '1.jpg';

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
  fs.rename(`${filepath1}${filename1}`, `${filepath1}${req.body.name}`)
  .then(() => console.log('renamed.'));
  console.log(req.body.name);
  res.end();
})

module.exports = router;
