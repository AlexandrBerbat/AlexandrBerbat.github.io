var express = require('express');
var router = express.Router();

const page = {
  text: '',
  nav: ''
}


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', page);
});

router.get('/:id', function(req, res, next) {
  res.send('index', page);
});

module.exports = router;
