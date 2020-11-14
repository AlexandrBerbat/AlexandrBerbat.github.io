var express = require('express');
var router = express.Router();
const texts = require('../models/db');



function generPage(tmpID, texts) {
  const page = { text: '', nav: '' }
  page.text = `<p>${texts[tmpID]}</p>`;

  texts.forEach((item, index) => {
    if (index !== tmpID) {
      page.nav += `<a href="/${index}"> ${index} </a>`;
    } else {
      page.nav += `<a> ${index} </a>`
    }
  });

  return page;
}

/* GET users listing. */
router.get('/', function (req, res, next) {
  let page = generPage(0, texts);

  res.render('index', page);
});

router.get('/:id', function (req, res, next) {
  let tempID = Number(req.params.id);

  let page = generPage(tempID, texts);

  res.render('index', page);
});

module.exports = router;