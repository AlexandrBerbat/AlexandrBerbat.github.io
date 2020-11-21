var express = require('express');
var router = express.Router();

const person = {id: ""};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', person);
});

router.get('/:ID', function(res, req, next) {
  // let tempId = Number(req.params.ID);
  // console.log(req.params.ID);
  // person.id = tempId;
  // res.render('index', person);
  res.send(`123`);
});

module.exports = router;
