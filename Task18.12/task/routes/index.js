var express = require('express');
var router = express.Router();
var multer = require('multer');
const fs = require('fs').promises;
const path = require('path');



const filepath1 = 'uploads/';
const filename1 = 'thefile2.jpg';

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })
// var upload = multer({storage: storage});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/upload', upload.single('avatar'), async (req, res, next) => {
  try {
    const avatar = req.file;

    // make sure file is available
    if (!avatar) {
        res.status(400).send({
            status: false,
            data: 'No file is selected.'
        });
    } else {
        // send response
        res.send({
            status: true,
            message: 'File is uploaded.',
            data: {
                name: avatar.originalname,
                mimetype: avatar.mimetype,
                size: avatar.size
            }
        });
    }

} catch (err) {
    res.status(500).send(err);
}
  res.end();
})

module.exports = router;
