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
      console.log(values);
      if (values == "") {
        let json = JSON.stringify(data);

        let writeStr = `${startFile}${json}${endFile}`;

        fs.writeFile(fileName, writeStr, "utf-8")
          .catch(err => {
            res.send(`Ошибка записи файла: ${err}`);
            res.end();
          })
          .then(() => {
            res.send(`Статья успешно записана`)
            res.end();
          })
      }
      else {
        let json = JSON.stringify(data);
        let tempData = values.slice(0, -1);

        let writeStr = `,${json}${endFile}`;

        fs.writeFile(fileName, `${tempData}${writeStr}`, "utf-8")
          .catch(err => {
            res.send(`Ошибка записи файла: ${err}`);
            res.end();
          })
          .then(() => {
            res.send(`Статья успешно записана`)
            res.end();
          })

      }
    })
    .catch(err => {
      res.send(`Ошибка чтения файла: ${err}`);
      res.end();
    })

});

module.exports = router;
