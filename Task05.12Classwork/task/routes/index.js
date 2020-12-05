var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer();
var axios = require('axios');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', upload.none(), (req,res) => {

  let data = req.body;
  let page = {filmName: "", filmID : data.film_id, characterName: "", characterID: data.character_id, WasInTheFilm: false};


  axios.get(`https://swapi.dev/api/films/${data.film_id}/`)
  .then(res1 => {
    let tempData = res1.data;

    page.filmName = tempData.title;

    let reg = /\d/gi;
    tempData.characters = tempData.characters.map(item => {
      item = item.match(reg);
      item = item.join('');
      return item
    })

    if(tempData.characters.includes(data.character_id))
    {
      console.log('Персонаж присутствовал в фильме');
      page.WasInTheFilm = true;

    }
    return page;

  })
  .catch(err => {
    console.log(`Error: ${err}`);
  })
  .then((page) => {
    axios.get(`https://swapi.dev/api/people/${page.characterID}/`)
    .then(res2 => {
      page.characterName = res2.data.name;
      return page;
    })
    .catch(err => {
      console.log(`Error: ${err}`);
    })
    .then(page => {
      if(page.WasInTheFilm)
      {
        res.send(`Character ${page.characterName} was present in ${page.filmName}`);
        res.end();
      }
      else{
        res.send(`Character ${page.characterName} wasn\`t present in ${page.filmName}`);
        res.end();
      }
    })

  })

})

module.exports = router;
