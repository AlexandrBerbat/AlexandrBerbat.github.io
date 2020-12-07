var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer();
var fs = require('fs').promises;

const startFile = "[";
const endFile = "]";
const fileName = "test.json";

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/checkJson', function (req, res, next) {
  fs.readFile(fileName, "utf-8")
  .then(values => {
    res.send(values);
  })
})

router.post('/', upload.none(), (req, res) => {

  let data = req.body;

  fs.readFile(fileName, "utf-8")
    .then((values) => {
      if (values == "") {
        let writeStr = `${startFile}{'author': ${data.author}, 'date': ${data.date}, 'article': ${data.article}, 'tags': ${data.tags}, 'comments': ${data.comments}}${endFile}`;
        fs.writeFile(fileName, writeStr, "utf-8")
      }
      else {
        let tempData = values.slice(0,-1);
        let writeStr = `,{'author': ${data.author}, 'date': ${data.date}, 'article': ${data.article}, 'tags': ${data.tags}, 'comments': ${data.comments}}${endFile}`;
        fs.writeFile(fileName, `${tempData}${writeStr}`, "utf-8");
      }
    })
    .catch(err=> {
      console.log(`Error: ${err}`);
    })
    .then(()=> {
      res.send(`Статья успешно записана`)
      res.end();
    })

});

module.exports = router;
