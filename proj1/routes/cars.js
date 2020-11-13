var express = require('express');
var router = express.Router();

const params = {};

/* GET home page. */
router.get('/:a', function (req, res, next) {
    // res.render('cars_index', {models: 12});
    params.temp = Number(req.params.a);
    res.render(`cars_index`, params);
});



module.exports = router;
