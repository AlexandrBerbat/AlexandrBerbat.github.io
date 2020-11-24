var express = require('express');
var router = express.Router();
const axios = require('axios').default;

let pageG = { filmArr: [], sendStr: `<option value = "">Выберите Фильм</option>`, actorsList: "", actorsArr: [] };


/* GET home page. */
router.get('/', function (req, res, next) {
  pageG.filmArr = [];
  // const page = { filmArr: [], sendStr: `<option value = "">Выберите Фильм</option>`, actorsList: "" };

  pageG.actorsList = "";
  axios.get(`https://swapi.dev/api/films/`)
    .then((res) => {
      // console.log(res.data)
      let tempData = res.data;
      tempData.results.forEach((item) => {
        pageG.filmArr.push(item.title);

      });

    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    })
    .then(() => {
      pageG.filmArr.forEach((item) => {
        pageG.sendStr += `<option class = "${item}" value = "${item}">${item}</option>`;

      });
      // console.log(page.sendStr);
    })
    .catch((err) => {
      console.log(`Error: ${err}`);

    })
    .then(() => {

      // pageG = page;
      res.render(`index`, pageG);
    });
});

router.get("/:filmName", function (req, res, next) {

  let filmNameParam = req.params.filmName;
  pageG.actorsList = "";

  let charactersList = [];

  axios.get(`https://swapi.dev/api/films/`)
   .then((res) => {
    let tempData = res.data;
    tempData.results.forEach((item) => {
      if (item.title == filmNameParam) {
        console.log(item.characters);
        charactersList = item.characters;
      }
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    })
    .then((res) => {
      charactersList.forEach((item) => {

        axios.get(`${item}`)
        .then((res) => {
          console.log(`res.data`);
          console.log(res.data);
        });
    
      });

    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    })
    .then(() => {
      console.log(`END!`);
    })
  });

  // charactersList.forEach((item) => {

  //   axios.get(`${item}`)
  //   .then((res) => {
  //     console.log(`res.data`);
  //     console.log(res.data);
  //   });

  // });




  res.render(`index`, pageG);

});


module.exports = router;
