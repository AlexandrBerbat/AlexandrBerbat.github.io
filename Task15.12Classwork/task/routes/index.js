var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer();
var axios = require('axios');


function сharacterInFilm(charID, allChars) {
  let reg = /\d/gi;
  allChars = allChars.map(item => {
    item = item.match(reg);
    item = item.join('');
    return item
  })

  if (allChars.includes(charID)) {
    return true;
  }
  else {
    return false;
  }
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', upload.none(), (req, res) => {

  let data = req.body;
  let page = { filmName: "", filmID: data.film_id, characterName: "", characterID: data.character_id, WasInTheFilm: false };

  let promiseFilm = axios.get(`https://swapi.dev/api/films/${data.film_id}/`);
  let promiseChar = axios.get(`https://swapi.dev/api/people/${page.characterID}/`);

  Promise.all([promiseFilm, promiseChar])
    .then(values => {
      page.WasInTheFilm = сharacterInFilm(page.characterID, values[0].data.characters)
      page.filmName = values[0].data.title;
      page.characterName = values[1].data.name;
      return page;
    })
    .catch(err => {
      console.log(`Error: ${err}`);
    })
    .then(page => {
      if (page.WasInTheFilm) {
        res.send(`Character ${page.characterName} was present in ${page.filmName}`);
        res.end();
      }
      else {
        res.send(`Character ${page.characterName} wasn\`t present in ${page.filmName}`);
        res.end();
      }
    })

})

module.exports = router;
